/* eslint-disable max-len */
const sequelize = require('sequelize');
const { Game, User } = require('../db/models');
const { generalInformation } = require('./gameController');
const { GETRATE } = require('./types');

async function ladderboard(rooms, ws) {
  const { room, userID } = ws;
  let message;
  try {
    let rank = await Game.findAll({
      group: ['winner_id', 'User.id'],
      attributes: ['winner_id', [sequelize.fn('COUNT', 'winner_id'), 'victory_count']],
      order: [[sequelize.col('victory_count'), 'DESC']],
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    rank = rank.map((el, index) => {
      if (index <= 10) {
        return { rank: index, username: el.User.username, victory_count: el.dataValues.victory_count };
      } if (el.dataValues.winner_id === 12) {
        return { rank: index, username: el.User.username, victory_count: el.dataValues.victory_count };
      }
    });

    console.log(rank);

    message = { type: GETRATE, params: { rank } };
    //   order: [[sequelize.col('victory_count'), 'DESC']],

    generalInformation(GETRATE, rooms, room, message);
  } catch (err) { console.error('error rank query to DB ------->', err); }
}

module.exports = ladderboard;
