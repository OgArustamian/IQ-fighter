import React, { useState } from 'react';
import ImageMapper from 'react-image-mapper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestion } from '../../Redux/Actions/questionAction';
import { useWsContext } from '../Context/Context';
import QuizModal from '../QuizModal/QuizModal';

function Player({
  url, model, width, imgWidth,
}) {
  const { ws } = useWsContext();
  const room = useSelector((state) => state.ws);
  const { question, player } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { modal, setModal } = useWsContext();

  function attackHandler(area) {
    dispatch(fetchQuestion(
      area.questionDifficulty,
      ws,
      question.answeredQuestions,
      room,
      player.turnID,
    ));
  }

  const [active, setActive] = useState(true);

  function checkTurn() {
    if (player.turn) {
      console.log('blaaah');
      // setActive(false);
      // const body = document.querySelector('body');
      // body.style.cursor = 'default';
    }
  }

  checkTurn();

  return (
    <div>
      <ImageMapper
        onClick={(area) => attackHandler(area)}
        active={active}
        src={url}
        map={model}
        width={width}
        imgWidth={imgWidth}
      />
      {modal ? <QuizModal /> : null }
    </div>
  );
}

export default Player;
