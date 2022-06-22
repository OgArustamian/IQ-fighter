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
    case infotype === 'win' || infotype === 'loss' || infotype === 'game-over' || infotype === 'game-win':
      console.log('win/loss or game-win/game-over player id ->>>>>>>>>>>>>', infotype, userID);

      for (const [key, value] of Object.entries(rooms)) {
        if (key === room) {
          value.forEach((el) => {
            console.log('el,userID in "for in" ------>', el.userID);
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
  // Checking how many players have already answered on the current turn
  const answers = await UserTurn.findAll({ where: { turn_id: oldturn.id } });

  // If two players answered...
  if (answers.length === 2) {
    const { game_id, difficulty } = oldturn;

    // Create new TURN
    const turn = await Turn.create({ game_id });
    const turnID = turn.id;

    // Grouping userID of winners and losers
    const trueAnsweredUserID = answers.filter((el) => (el.isTrue)).map((el) => el.user_id);
    const falseAnsweredUserID = answers.filter((el) => (!el.isTrue)).map((el) => el.user_id);

    // DAMAGE variable declaration
    const damage = difficulty * 10;

    // Type and message for generalinformation variable declaration
    let infotype;
    let infotypeLoser;
    let infotypeWinner;
    let message = {};

    // ID variable declaration
    let winnerID;
    let loserID;

    // HP variable declaration
    let hpLoser;
    let hpWinner;

    // State of the players in the current turn
    let stateLoserInTurn;
    let stateWinnerInTurn;

    switch (true) {
      // If both players answered correctly or both incorrectly
      case trueAnsweredUserID.length === 2 || falseAnsweredUserID.length === 2:
        infotype = 'draw';
        message = { type: infotype, params: { turnID } };
        generalInformation(infotype, rooms, room, message);
        break;

      // If only one player answered correctly
      case trueAnsweredUserID.length === 1:
        // Dstructuring Winner and Loser ID
        [loserID] = falseAnsweredUserID;
        [winnerID] = trueAnsweredUserID;
        console.log('loserID winnerID', loserID, winnerID);

        // Winner state and update the loser state in the database
        stateWinnerInTurn = await UserGames.findOne({ where: { game_id, user_id: winnerID } });
        stateLoserInTurn = await UserGames.decrement({ hp: damage }, { where: { game_id, user_id: loserID }, returning: true, plain: true });
        hpLoser = stateLoserInTurn.flat()[0].hp;
        hpWinner = stateWinnerInTurn.hp;

        if (hpLoser <= 0) {
          hpLoser = 0;
          infotypeLoser = 'game-over';
          infotypeWinner = 'game-win';
        } else {
          infotypeLoser = 'loss';
          infotypeWinner = 'win';
        }

        message = { type: infotypeLoser, params: { turnID, hp: hpLoser, hpEnemy: hpWinner, damage } };
        console.log('message loser --->', message, loserID);
        generalInformation(infotypeLoser, rooms, room, message, loserID);

        message = { type: infotypeWinner, params: { turnID, hp: hpWinner, hpEnemy: hpLoser, damage } };
        console.log('message winer --->', message, winnerID);
        generalInformation(infotypeWinner, rooms, room, message, winnerID);
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

  console.log('answerID ------ >', answerID);
  console.log('userId ---->', userID);

  const turn = await Turn.findOne({ where: { id: turnID } });

  if (answerID === 0) {
    await UserTurn.create({ user_id: userID, turn_id: turnID, isTrue: false });
  } else {
    const answer = await Answers.findOne({ where: { id: answerID } });
    if (answer.isTrue) { await UserTurn.create({ user_id: userID, turn_id: turnID, isTrue: true }); }
    if (!answer.isTrue) { await UserTurn.create({ user_id: userID, turn_id: turnID, isTrue: false }); }
  }

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

module.exports = { gameController, generalInformation };
