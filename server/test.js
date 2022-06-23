/* eslint-disable max-len */
const { Op } = require('sequelize');
const sequelize = require('sequelize');
const { Game, User } = require('./db/models');

async function test() {
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
      return { rank: index + 1, username: el.User.username, victory_count: el.dataValues.victory_count };
    } if (el.dataValues.winner_id === 12) {
      return { rank: index + 1, username: el.User.username, victory_count: el.dataValues.victory_count };
    }
  }).filter((el) => el != null);

  console.log(rank);

  // const rank = await User.findAll({
  //   attributes: [
  //     'username',
  //   ],
  //   include: [
  //     {
  //       model: Game,
  //       attributes: [[sequelize.fn('sum', sequelize.col('Game.winner_id')), 'victory']],
  //     },
  //   ],
  //   group: ['username'],
  // });

  // const losses = await UserGames.findAll({
  //   where: { id: 2 },
  //   include: {
  //     model: Game,
  //     where: {
  //       winner_id: {
  //         [Op.ne]: 2,
  //       },
  //     },
  //   },
  // });

  console.log(JSON.parse(JSON.stringify(rank)));
}

test();
