import React, { useState } from 'react';
import ImageMapper from 'react-image-mapper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestion } from '../../Redux/Actions/questionAction';
import { useWsContext } from '../Context/Context';
import HealthBar from '../HealthBar/HealthBar';
import QuizModal from '../QuizModal/QuizModal';

function Player({
  url, model, width, imgWidth, cursor,
}) {
  const bodyPart = document.querySelector('area');
  console.log(cursor.active);
  // bodyPart.style.cursor = cursor.cursor;

  const { ws } = useWsContext();
  const room = useSelector((state) => state.ws);
  const { question, player } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { modal, setModal } = useWsContext();

  function attackHandler(area) {
    if (player.turn) {
      dispatch(fetchQuestion(
        area.questionDifficulty,
        ws,
        question.answeredQuestions,
        room,
        player.turnID,
      ));
    }
  }

  return (
    <div>
      <ImageMapper
        onClick={(area) => attackHandler(area)}
        active={cursor.active}
        src={url}
        map={model}
        width={width}
        imgWidth={imgWidth}
      />
      {modal ? <QuizModal /> : null }
      <HealthBar mt-3 />
    </div>
  );
}

export default Player;
