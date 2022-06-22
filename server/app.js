/* eslint-disable no-restricted-syntax */
require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

// ws
const http = require('http');
const { v4: uuidv4 } = require('uuid');
const { WebSocketServer } = require('ws');

const { roomController, leave } = require('./ws/roomController');
const { gameController } = require('./ws/gameController');

const map = new Map();

// routing
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

const app = express();
const PORT = process.env.PORT ?? 3001;

const sessionParser = session({
  name: 'sessionID',
  store: new FileStore({}),
  secret: process.env.SESSION,
  resave: true,
  saveUninitialized: false,
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.use(sessionParser);

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler§
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Create an HTTP server
const server = http.createServer(app);
const wss = new WebSocketServer({ clientTracking: false, noServer: true });

// part1
server.on('upgrade', (request, socket, head) => {
  console.log('Parsing session from request...');

  sessionParser(request, {}, () => {
    if (!request.session.user) {
      socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n'); // ?
      socket.destroy();
      return;
    }

    console.log('Session is parsed!');

    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit('connection', ws, request);
    });
  });
});

const maxClients = 2;
const rooms = {};

// part2
wss.on('connection', (ws, request) => {
  const userID = request.session.user?.id;
  ws.userID = userID;

  // коннект и получение месседжа
  ws.on('message', (message) => {
    const obj = JSON.parse(message);
    console.log(obj);
    const { type } = obj;
    const { subtype } = obj;
    const { params } = obj;

    switch (type) {
      case 'game':
        gameController(rooms, subtype, params);
        break;
      case 'find':
        roomController(rooms, maxClients, ws, userID);
        break;
      case 'leave':
        leave(rooms, ws);
        break;
      default:
        console.log('default case');
        console.warn(`Type: ${type} unknown`);
        break;
    }
  });

  ws.on('close', () => {
    console.log('user left <----');
    map.delete(userID);
  });
});

server.listen(PORT, () => {
  console.log('server running on port', PORT);
});

module.exports = app;
