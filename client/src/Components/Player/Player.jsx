import React, { useState } from 'react';
import ImageMapper from 'react-image-mapper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestion } from '../../Redux/Actions/questionsAction';
import { useWsContext } from '../Context/Context';
import attackCursor from './img/sword-attack-icon .png';

function Player({
  url, model, width, imgWidth, active,
}) {
  const [isHover, setIsHover] = useState(false);
  const body = document.querySelector('body');
  if (isHover) {
    body.style.cursor = `url(${attackCursor}), auto`;
  } else {
    body.style.cursor = 'default';
  }

  const ws = useWsContext();
  const room = useSelector((state) => state.ws);
  const { questions } = useSelector((state) => state);
  const dispatch = useDispatch();

  function attackHandler(area) {
    dispatch(fetchQuestion(area.questionDifficulty, ws, questions.answeredQuestions, room));
  }

  return (
    <div>
      <ImageMapper
        // active={active}
        src={url}
        map={model}
        width={width}
        imgWidth={imgWidth}
        onClick={(area) => attackHandler(area)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      />
    </div>
  );
}

export default Player;
