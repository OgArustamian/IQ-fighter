import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, ModalBody } from 'reactstrap';
import './GameOverModal.css';
import { useNavigate } from 'react-router-dom';
import winnerLogo from './img/WINNER.png';
import looserLogo from './img/LOOSER_img.png';
import forceGameover from './img/force-gameover-pic.png';
import { useWsContext } from '../Context/Context';
import { showSpinner } from '../../Redux/Actions/wsAction';
import { clearAnsweredQuestions } from '../../Redux/Actions/questionAction';

function GameOverModal() {
  const { isWinner, forceGameOver } = useSelector((state) => state.player);
  const { gameOverModal, setgameOverModal } = useWsContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(forceGameOver);
  useEffect(() => {
    if (gameOverModal) {
      setTimeout(() => {
        setgameOverModal(false);
        navigate('/');
        dispatch(showSpinner(false));
        dispatch(clearAnsweredQuestions());
      }, 5000);
    }
  }, [gameOverModal]);

  return (
    <div>
      <Modal fullscreen="lg" centered className="quiz-modal game-over" isOpen={gameOverModal}>
        <ModalBody className="game-over_modal">
          {forceGameOver && isWinner
            ? (
              <>
                <p className="gameover-msg">ПРОТИВНИК ПОКИНУЛ ИГРУ. ЛЁГКАЯ ПОБЕДА.</p>
                <img className="looser-logo" src={forceGameover} alt="game over img" />
              </>
            ) : null}

          {isWinner && !forceGameOver ? (
            <>
              <p className="gameover-msg">ВЫ ВЫИГРАЛИ</p>
              <img className="winner-logo" src={winnerLogo} alt="game over img" />
            </>
          ) : null}

          {!isWinner
            ? (
              <>
                <p className="gameover-msg">ВЫ ПРОИГРАЛИ</p>
                <img className="looser-logo" src={looserLogo} alt="game over img" />
              </>
            ) : null}
        </ModalBody>
      </Modal>
    </div>
  );
}

export default GameOverModal;
