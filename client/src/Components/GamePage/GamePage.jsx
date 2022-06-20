import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './GamePage.css';
import maleChar from '../Player/img/male-mage.png';
import femaleChar from '../Player/img/female-mage.webp';
import { useWsContext } from '../Context/Context';
import { messageFind } from '../../Redux/Actions/wsAction';
/* eslint-disable max-len */
import Player from '../Player/Player';
import { femaleMageModel, maleMageModel } from '../Player/playersModels';
import Spinner from '../Spinner/Spinner';

function GamePage() {
  const { spinner } = useSelector((state) => state);
  console.log('======>WS', spinner);
  const dispatch = useDispatch();
  const body = document.querySelector('body');
  body.style.backgroundImage = 'none';

  const room = useSelector((state) => state.ws);
  const { turn } = useSelector((state) => state.player);
  const { ws } = useWsContext();
  const { id } = useSelector((state) => state.users);

  function leaveFromRoom(value) {
    ws.send(JSON.stringify({ type: 'leave', params: { room } }));
  }

  useEffect(() => {
    dispatch(messageFind(ws));
  }, []);

  return (
    <div>
      {spinner !== 'joinedRoom'
        ? <Spinner />
        : (
          <div className="game-page-container">
            <Player url={femaleChar} model={femaleMageModel} active={turn} width={250} imgWidth={865} />
            <Player url={maleChar} model={maleMageModel} active={!turn} width={600} imgWidth={820} />
          </div>
        )}
    </div>
  );
}

export default GamePage;
