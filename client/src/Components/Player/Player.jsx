import React, { memo } from 'react';
import ImageMapper from 'react-image-mapper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestion } from '../../Redux/Actions/questionAction';
import { useWsContext } from '../Context/Context';

function Player({
  url, model, width, imgWidth, cursor, position,
}) {
  const { ws } = useWsContext();
  const room = useSelector((state) => state.ws);
  const question = useSelector((state) => state.question);
  const player = useSelector((state) => state.player);
  const dispatch = useDispatch();

  function attackHandler(area) {
    if (player.turn && position !== player.position) {
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
    <div className="player-model">
      <ImageMapper
        onClick={(area) => attackHandler(area)}
        active={cursor.active}
        src={url}
        map={model}
        width={width}
        imgWidth={imgWidth}
      />
    </div>
  );
}

export default memo(Player);
