/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
const { Op } = require('sequelize');
const {
  Questions, Answers, Turn, UserTurn,
} = require('../db/models');

function generalInformation(subtype, rooms, room, message) {
  for (const [key, value] of Object.entries(rooms)) {
    if (key === room) {
      value.forEach((el) => {
        el.send(JSON.stringify(message));
      });
    }
  }
}

function sendBtn(subtype, rooms, params) {
  const { room } = params;
  const message = {
    type: subtype,
    params: {},
  };
  generalInformation(subtype, rooms, room, message);
}

async function attack(subtype, rooms, params) {
  const {
    room, difficulty, questAnsweredID, game,
  } = params;

  const question = await Questions.findOne({ where: { id: { [Op.notIn]: questAnsweredID }, difficulty } });
  const turn = await Turn.create({ game_id: game, question_id: question.id, difficulty });
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

async function responseAnswers(subtype, rooms) {
  console.log('answer response')
}

async function checkAnswer(subtype, rooms, params) {
  const {
    userID, room, answerID, turnID,
  } = params;

  const answer = await Answers.findOne({ where: { id: answerID } });
  if (answer.isTrue) { await UserTurn.create({ user_id: userID, turn_id: turnID, isTrue: true }); }
  if (!answer.isTrue) { await UserTurn.create({ user_id: userID, turn_id: turnID, isTrue: false }); }

  responseAnswers(subtype, rooms);
}

function gameController(rooms, subtype, params) {
  switch (subtype) {
    case 'changeBtnTest':
      sendBtn(subtype, rooms, params);
      break;
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
