/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
/* eslint-disable no-fallthrough */
/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
const { Op } = require('sequelize');
const {
  Questions, Answers, Turn, UserTurn, UserGames,
} = require('../db/models');

function generalInformation(infotype, rooms, room, message, userID = 0) {
  switch (true) {
    case infotype === 'attack' || infotype === 'draw' || infotype === 'joinedRoom':
      for (const [key, value] of Object.entries(rooms)) {
        if (key === room) {
          value.forEach((el) => {
            el.send(JSON.stringify(message));
          });
        }
      }
      break;
    case infotype === 'win' || infotype === 'loss':
      console.log('player id ->>>>>>>>>>>>>', userID);

      for (const [key, value] of Object.entries(rooms)) {
        if (key === room) {
          value.forEach((el) => {
            console.log('el,userID ------>', el.userID);
            if (el.userID === userID) el.send(JSON.stringify(message));
          });
        }
      }
      break;
    default:
      console.log('eror generalinformation gamecontroller');
      break;
  }
}

async function attack(subtype, rooms, params) {
  const {
    room, difficulty, answeredQuestions, turnID,
  } = params;
  console.log(turnID);

  const question = await Questions.findOne({ where: { id: { [Op.notIn]: answeredQuestions }, difficulty } });
  const turn = await Turn.update({ question_id: question.id, difficulty }, { where: { id: turnID } });

  const requestAnswers = await Answers.findAll({ where: { question_id: question.id } });
  const answers = requestAnswers.map((el) => ({ id: el.id, answer: el.answer }));
  const message = {
    type: subtype,
    params: {
      question: question.question,
      questionID: question.id,
      answers,
      turnID: turn.id,
    },
  };
  generalInformation(subtype, rooms, room, message);
}

async function responseAnswers(subtype, rooms, room, oldturn) {
  const { game_id, difficulty } = oldturn;
  const answers = await UserTurn.findAll({ where: { turn_id: oldturn.id } });
  if (answers.length === 2) {
    const turn = await Turn.create({ where: { game_id } });
    const turnID = turn.id;
    const trueAnsweredUser = answers.filter((el) => (el.isTrue));
    const falseAnsweredUser = answers.filter((el) => (!el.isTrue));
    const damage = difficulty * 10;
    let infotype = '';
    let message = {};
    let winnerID;
    let loserID;
    let hp;
    let hpEnemy;
    let loserTurn;
    let winnerTurn;

    switch (true) {
      case trueAnsweredUser.length === 2 || falseAnsweredUser.length === 2:
        infotype = 'draw';
        message = { type: infotype, params: { turnID } };
        generalInformation(infotype, rooms, room, message);
        break;

      case trueAnsweredUser.length === 1:
        loserID = falseAnsweredUser[0].user_id;
        winnerID = trueAnsweredUser[0].user_id;
        winnerTurn = await UserGames.findOne({ where: { game_id, user_id: winnerID } });
        loserTurn = await UserGames.decrement({ hp: damage }, { where: { game_id, user_id: loserID }, returning: true, plain: true });

        infotype = 'loss';
        hp = loserTurn.flat()[0].hp;
        hpEnemy = winnerTurn.hp;
        message = { type: infotype, params: { turnID, hp, hpEnemy, damage } };
        generalInformation(infotype, rooms, room, message, loserID);

        infotype = 'win';
        hp = winnerTurn.hp;
        hpEnemy = loserTurn.flat()[0].hp;
        message = { type: infotype, params: { turnID, hp, hpEnemy, damage } };
        generalInformation(infotype, rooms, room, message, winnerID);
        break;

      default:
        console.log('check answerd error');
        break;
    }
  }
}

async function checkAnswer(subtype, rooms, params) {
  const {
    room, userID, answerID, turnID,
  } = params;

  console.log('params ---------->', params);

  const answer = await Answers.findOne({ where: { id: answerID } });
  const turn = await Turn.findOne({ where: { id: turnID } });

  if (answer.isTrue) { await UserTurn.create({ user_id: userID, turn_id: turnID, isTrue: true }); }
  if (!answer.isTrue) { await UserTurn.create({ user_id: userID, turn_id: turnID, isTrue: false }); }

  responseAnswers(subtype, rooms, room, turn);
}

function gameController(rooms, subtype, params) {
  switch (subtype) {
    case 'attack':
      attack(subtype, rooms, params);
      break;
    case 'answer':
      checkAnswer(subtype, rooms, params);
    default:
      console.log('no subtype');
  }
}

module.exports = {gameController, generalInformation};
