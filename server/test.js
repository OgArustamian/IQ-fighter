const { Op } = require('sequelize');
const { Game, UserGames } = require('./db/models');

async function test() {
  const losses = await UserGames.findAll({
    where: { id: 2 },
    include: {
      model: Game,
      where: {
        winner_id: {
          [Op.ne]: 2,
        },
      },
    },
  });

  console.log(JSON.parse(JSON.stringify(losses)));
}

test();
