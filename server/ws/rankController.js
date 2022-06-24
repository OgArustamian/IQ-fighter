/* eslint-disable max-len */
const sequelize = require('sequelize');
const { Game, User } = require('../db/models');
const { generalInformation } = require('./gameController');
const { GETRATE, PERSONAL_SEND } = require('./types');

async function ladderboard(ws, params) {
  const userID = params.id;
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
      if (index < 10) {
        if (el.dataValues.winner_id === userID) {
          return {
            rank: index + 1, username: el.User.username, victory_count: el.dataValues.victory_count, userID,
          };
        }
        return {
          rank: index + 1, username: el.User.username, victory_count: el.dataValues.victory_count,
        };
      }
      if (el.dataValues.winner_id === userID) {
        return {
          rank: index + 1, username: el.User.username, victory_count: el.dataValues.victory_count, userID,
        };
      }
    }).filter((el) => el != null);

    message = { type: GETRATE, params: { rank } };
    console.log(userID);
    console.log(rank);

    generalInformation(PERSONAL_SEND, null, null, message, userID, ws);
  } catch (err) { console.error('error rank query to DB ------->', err); }
}

module.exports = ladderboard;
