/* eslint-disable camelcase */
/* eslint-disable no-fallthrough */
/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
const { Op } = require('sequelize');
const {
  Questions, Answers, Turn, UserTurn,
} = require('../db/models');

function generalInformation(infotype, rooms, room, message, userID = 0) {
  console.log('infotype ------>', infotype, (infotype === 'draw'));
  switch (true) {
    case infotype === 'attack' || infotype === 'draw':
      for (const [key, value] of Object.entries(rooms)) {
        if (key === room) {
          value.forEach((el) => {
            el.send(JSON.stringify(message));
          });
        }
      }
      break;
    case infotype === 'win' || infotype === 'loss':
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
  let infotype = '';
  let message = {};
  let turnWinnerID;
  let turnLoserID;
  const answers = await UserTurn.findAll({ where: { turn_id: oldturn.id } });
  const turn = await Turn.create({ where: { game_id } });
  const turnID = turn.id;
  if (answers.length === 2) {
    const trueAnsweredUser = answers.filter((el) => (el.isTrue));
    const falseAnsweredUser = answers.filter((el) => (!el.isTrue));
    console.log('true ---->', trueAnsweredUser.length);
    console.log('false ---->', falseAnsweredUser.length);
    switch (true) {
      case trueAnsweredUser.length === 2 || falseAnsweredUser.length === 2:
        console.log('draw ----->');
        infotype = 'draw';
        message = { type: infotype, params: { turnID } };
        generalInformation(infotype, rooms, room, message);
        break;
      case trueAnsweredUser.length === 1:
        infotype = 'win';
        turnWinnerID = trueAnsweredUser[0].id;
        message = { type: infotype, params: { turnID, damage: difficulty * 10 } };
        generalInformation(infotype, rooms, room, message, turnWinnerID);
        infotype = 'loss';
        turnLoserID = falseAnsweredUser[0].id;
        message = { type: infotype, params: { turnID, damage: difficulty * 10 } };
        generalInformation(infotype, rooms, room, message, turnLoserID);
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

module.exports = gameController;
