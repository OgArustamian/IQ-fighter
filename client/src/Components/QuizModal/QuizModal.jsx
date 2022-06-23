/* eslint-disable no-lone-blocks */
/* eslint-disable max-len */
import React, { useState, useRef, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button, Form, Modal, ModalBody, ModalFooter, ModalHeader,
} from 'reactstrap';
import { sendAnswer } from '../../Redux/Actions/answersAction';
import { useWsContext } from '../Context/Context';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import './QuizModal.css';

function QuizModal() {
  const { modal, setModal } = useWsContext();
  const toggle = () => setModal(!modal);

  const question = useSelector((state) => state.question);
  const { id } = useSelector((state) => state.users);
  const { turnID, turn } = useSelector((state) => state.player);
  const room = useSelector((state) => state.ws);

  const [userAnswer, setUserAnswer] = useState(0);

  const dispatch = useDispatch();
  const { ws } = useWsContext();

  function changeHandler(e) {
    const data = e.target.value;
    const elems = document.querySelectorAll('.answer-active');
    [].forEach.call(elems, (el) => el.classList.remove('answer-active'));
    e.target.closest('label').classList.toggle('answer-active');
    setUserAnswer(data);
  }

  function answerHandler() {
    if (userAnswer) {
      dispatch(sendAnswer(ws, room, id, userAnswer, turnID));
      toggle();
    }
  }

  return (
    <div>
      <Modal fullscreen="lg" centered className="quiz-modal" isOpen={modal}>
        <ModalHeader className="modal-header">
          <CountdownTimer answerID={userAnswer} />
        </ModalHeader>
        <ModalBody>
          <p id={question.questionID} className="quiz-question">
            {question.question}
          </p>
          <Form className="mt-3">
            <div className="row">
              {question.answers.map((answer) => (
                <div key={answer.id} className="col-md-6 d-flex justify-content-center mt-2 xs-2">
                  <label className="answer-label">
                    <input className="answer-checkbox" type="radio" name="answer" id="rad" value={`${answer.id}`} onChange={(e) => changeHandler(e)} />
                    {answer.answer}
                  </label>
                </div>
              ))}
            </div>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button className="answer-submit" color="primary" onClick={() => answerHandler()}>{turn ? 'АТАКОВАТЬ' : 'ПАРИРОВАТЬ'}</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default React.memo(QuizModal);
