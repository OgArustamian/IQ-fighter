
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './GamePage.css';
import maleChar from '../Player/img/male-mage.png';
import femaleChar from '../Player/img/female-mage.webp';
import { useWsContext } from '../Context/Context';
import { wsChangeBtn } from '../../Redux/Actions/gameAction';
import { messageFind } from '../../Redux/Actions/wsAction';
/* eslint-disable max-len */
import Player from '../Player/Player';
import { femaleMageModel, maleMageModel } from '../Player/playersModels';

function GamePage() {
  const dispatch = useDispatch();
  const body = document.querySelector('body');
  body.style.backgroundImage = 'none';
  const room = useSelector((state) => state.ws);

  const ws = useWsContext();
  const { id } = useSelector((state) => state.users);

  function showAlert(value) {
    ws.send(JSON.stringify({ type: 'changeBtnTest', params: { room } }));
  }

  function leaveFromRoom(value) {
    ws.send(JSON.stringify({ type: 'leave', params: { room } }));
  }

  ws.onmessage = function (event) {
    console.log(event.data, 'Game Page');
    const { type } = JSON.parse(event.data);
    if (type === 'activChangeBtn') {
      const alert = document.querySelector('.alert-msg');
      alert.classList.toggle('hidden');
    }
  };

  useEffect(() => {
    console.log('useEffect true');
    // ws.onopen = function (e) {
    // console.log('onopen true');
    dispatch(messageFind(ws));
    // console.log('dispatch true');
    // };
  }, []);

//   return (
//     <div className="game-page-container">
//       <p className="alert-msg hidden">вы нажали на кнопку</p>
//       <div>
//         <FirstPlayer url={femaleChar} />
//         <button onClick={() => showAlert(room)} className="mt-5" type="button">ПРОСТО КНОПКА</button>
//       </div>
//       <div>
//         <SecondPlayer url={maleChar} />
//         <button onClick={() => leaveFromRoom(room)} type="button">КНОПКА ЛИВНУТЬ</button>
//       </div>
  return (
    <div className="game-page-container">
      <Player url={femaleChar} player={femaleMageModel} width={250} imgWidth={865} />
      <Player url={maleChar} player={maleMageModel} width={600} imgWidth={820} />
    </div>
  );
}

export default GamePage;
