import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Modal, ModalBody } from 'reactstrap';
import './GameOverModal.css';
import winnerLogo from './img/WINNER.png';
import looserLogo from './img/LOOSER_img.png';
import { useWsContext } from '../Context/Context';

function GameOverModal() {
  const { isWinner } = useSelector((state) => state.player);
  const { gameOverModal, setgameOverModal } = useWsContext();

  useEffect(() => {
    setTimeout(() => {
      setgameOverModal(false);
    }, 5000);
  }, [gameOverModal]);

  return (
    <div>
      <Modal fullscreen="lg" centered className="quiz-modal game-over" isOpen={gameOverModal}>
        <ModalBody className="game-over_modal">
          {isWinner ? (
            <>
              <p className="gameover-msg">ВЫ ВЫИГРАЛИ</p>
              <img className="winner-logo" src={winnerLogo} alt="game over img" />
            </>
          )
            : (
              <>
                <p className="gameover-msg">ВЫ ПРОИГРАЛИ</p>
                <img className="looser-logo" src={looserLogo} alt="game over img" />
              </>
            )}
        </ModalBody>
      </Modal>
    </div>
  );
}

export default GameOverModal;
