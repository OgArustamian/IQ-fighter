/* eslint-disable no-loop-func */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */

const { Game, Turn, UserGames } = require('../db/models');
const { generalInformation } = require('./gameController');
const { createdRoom, joinedRoom } = require('./types');

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

function create(ws, rooms) {
  const room = genKey(5);
  let message;
  try {
    rooms[room] = [ws];
    ws.room = room;

    message = { type: createdRoom, params: { room } };
    generalInformation(createdRoom, rooms, room, message);

    console.log('create', room); // information
  } catch (err) { console.error('error create room --------->', err); }
}

async function join(rooms, maxClients, ws, userID, room, enemyID, firstPlayer) {
  let message;
  if (!Object.keys(rooms).includes(room)) {
    console.warn(`Room ${room} does not exist!`);
    return;
  }

  if (rooms[room].length >= maxClients) {
    console.warn(`Room ${room} is full!`);
    return;
  }

  try {
    const secondPlayer = ws.username;
    const game = await Game.create({ winner_id: 1 });
    const turn = await Turn.create({ game_id: game.id });
    const usergames = await UserGames.create({ user_id: userID, game_id: game.id });
    await UserGames.create({ user_id: enemyID, game_id: game.id });
    const gameID = game.id;
    const turnID = turn.id;

    rooms[room].push(ws);
    ws.room = room;

    message = {
      type: joinedRoom,
      params: {
        room, gameID, turnID, hp: usergames.hp, rigthUserName: firstPlayer, secondPlayer,
      },
    };
    generalInformation(joinedRoom, rooms, room, message);
    console.log('join', room); // information
  } catch (err) { console.error('errr join rooms function -------->', err); }
}

// not activ function
function leave(rooms, ws) {
  console.log('leave ------->');
  const { room } = ws;
  try {
    console.log('rooms', rooms);
    delete rooms[room];
    console.log('rooms', rooms);
    console.log('rooms', rooms[room]);
    // rooms[room] = rooms[room].filter((so) => so !== ws);
    // ws.room = undefined;
    // generalInformation()
  } catch (err) { console.error(err); }
}

function roomController(rooms, maxClients, ws, userID) {
  try {
    for (const [key, value] of Object.entries(rooms)) {
      console.log(`${key}: ${value}`);
      if (value.length < 2) {
        return join(rooms, maxClients, ws, userID, key, value[0].userID, value[0].username);
      }
    }
    create(ws, rooms);
  } catch (err) { console.error('error roomController ----------->', err); }
}

module.exports = {
  create, join, roomController, leave,
};
