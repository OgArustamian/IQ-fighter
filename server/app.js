require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

const app = express();
const PORT = process.env.PORT ?? 3001;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.use(session({
  name: 'sessionID',
  store: new FileStore({}),
  secret: process.env.SESSION,
  resave: true,
  saveUninitialized: false,
}));

// app.use(checkSession);

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

app.listen(PORT, () => {
  console.log('server running on port', PORT);
});

module.exports = app;
