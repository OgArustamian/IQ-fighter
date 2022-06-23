import React from 'react';
import { useSelector } from 'react-redux';
import { Modal, ModalBody } from 'reactstrap';
import './GameOverModal.css';

function GameOverModal() {
  const { isWinner } = useSelector((state) => state.player);

  return (
    <div>
      <Modal fullscreen="lg" centered className="quiz-modal game-over" isOpen="false">
        <ModalBody className="game-over_modal">
          {isWinner ? (
            <>
              <p className="gameover-msg">ВЫ ВЫИГРАЛИ!</p>
              <img alt="game over img" />
            </>
          )
            : (
              <>
                <p className="gameover-msg">ВЫ ПРОИГРАЛИ</p>
                <img alt="game over img" />
              </>
            )}
        </ModalBody>
      </Modal>
    </div>
  );
}

export default GameOverModal;
