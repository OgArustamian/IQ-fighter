/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */

const { Game, Turn } = require('../db/models');

// function generalInformation(ws) {
//   let obj;
//   if (ws.room === undefined) {
//     console.log('ws.room ----->', ws.room);
//     obj = {
//       type: 'info',
//       params: {
//         room: ws.room,
//         'no-cliets': rooms[ws.room].length,
//       },
//     };
//   } else {
//     obj = {
//       type: 'info',
//       params: {
//         room: 'no room',
//       },
//     };
//   }
//   ws.send(JSON.stringify(obj));
// }

function genKey(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * characters.length),
    );
  }
  return result;
}

function create(ws, userID, rooms) {
  const room = genKey(5);
  console.log('create', room); // information
  rooms[room] = [ws];
  ws.room = room;
  ws.send(JSON.stringify({ type: 'createdRoom', params: { room } }));

  // generalInformation(ws);
}

async function join(rooms, maxClients, ws, userID, room) {
  if (!Object.keys(rooms).includes(room)) {
    console.warn(`Room ${room} does not exist!`);
    return;
  }

  if (rooms[room].length >= maxClients) {
    console.warn(`Room ${room} is full!`);
    return;
  }

  const game = await Game.create({ winner_id: 1 });
  const turn = await Turn.create({ game_id: game.id });
  const gameID = game.id;
  const turnID = turn.id;

  rooms[room].push(ws);
  ws.room = room;

  console.log('join', room); // information

  rooms[room].forEach((el) => el.send(JSON.stringify({ type: 'joinedRoom', params: { room, gameID, turnID } })));
  console.log('send join true');

  // generalInformation(ws);
}

function close(rooms, room) {
  try {
    delete rooms[room];
  } catch (err) { console.error(err); }
}

function leave(rooms, ws) {
  const { room } = ws;
  try {
    rooms[room] = rooms[room].filter((so) => so !== ws);
    ws.room = undefined;
  } catch (err) { console.error(err); }

  if (rooms[room].length == 0) { close(rooms, room); }
}

function roomController(rooms, maxClients, ws, userID) {
  for (const [key, value] of Object.entries(rooms)) {
    console.log(`${key}: ${value}`);
    if (value.length < 2) { return join(rooms, maxClients, ws, userID, key); }
  }
  create(ws, userID, rooms);
}

module.exports = {
  create, join, roomController, leave,
};
