/* eslint-disable no-fallthrough */
/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
const { Op } = require('sequelize');
const {
  Questions, Answers, Turn, UserTurn,
} = require('../db/models');

function generalInformation(infotype, rooms, room, message) {
  for (const [key, value] of Object.entries(rooms)) {
    if (key === room) {
      value.forEach((el) => {
        el.send(JSON.stringify(message));
      });
    }
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

async function responseAnswers(subtype, rooms, turnID, difficulty) {
  const answers = await UserTurn.findAll({ where: { turn_id: turnID } });
  if (answers.length === 2) {
    switch (true) {
      case ((answers[0].isTrue) && (answers[1].isTrue)):
        const message = { type: 'draw', params: {} };
        generalInformation(subtype, rooms, room, message);
    }
  }
}

async function checkAnswer(subtype, rooms, params) {
  const {
    userID, answerID, turnID,
  } = params;

  const answer = await Answers.findOne({ where: { id: answerID } });
  const turn = await Turn.findOne({ where: { id: turnID } });
  if (answer.isTrue) { await UserTurn.create({ user_id: userID, turn_id: turnID, isTrue: true }); }
  if (!answer.isTrue) { await UserTurn.create({ user_id: userID, turn_id: turnID, isTrue: false }); }

  responseAnswers(subtype, rooms, turnID, turn.difficulty);
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
