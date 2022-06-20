/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
const { Op } = require('sequelize');
const { Questions, Answers, Turn } = require('../db/models');

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
  const { room, difficulty, questAnsweredID } = params;
  const question = await Questions.findOne({ where: { id: { [Op.notIn]: questAnsweredID }, difficulty } });
  await Turn.create({game_id:})
  const requestAnswers = await Answers.findAll({ where: { question_id: question.id } });
  const answers = requestAnswers.map((el) => ({ id: el.id, answer: el.answer }));
  const message = {
    type: subtype,
    params: {
      question: question.question,
      questionID: question.id,
      answers,
    },
  };
  generalInformation(subtype, rooms, room, message);
}

async function answer(subtype, rooms, params) {
  const { userID, room, answerID } = params;
  const answer = await Answers.findOne({ where: { id: answerID } });
  
}

function gameController(rooms, subtype, params) {
  switch (subtype) {
    case 'changeBtnTest':
      sendBtn(subtype, rooms, params);
      break;
    case 'attack':
      attack(subtype, rooms, params);
      break;
    default:
      console.log('no subtype');
  }
}

module.exports = gameController;
