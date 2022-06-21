/* eslint-disable max-len */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button, Form, Modal, ModalBody, ModalFooter, ModalHeader,
} from 'reactstrap';
import { sendAnswer } from '../../Redux/Actions/answersAction';
import { useWsContext } from '../Context/Context';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import './QuizModal.css';

function QuizModal() {
  const question = useSelector((state) => state.question);
  const { id } = useSelector((state) => state.users);
  const { turnID } = useSelector((state) => state.player);
  const room = useSelector((state) => state.ws);
  const [userAnswer, setUserAnswer] = useState();
  const dispatch = useDispatch();
  const { ws } = useWsContext();

  const { modal, setModal } = useWsContext();

  function toggle() {
    setModal(!modal);
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
        <ModalHeader>
          Quiz theme
          <CountdownTimer />
        </ModalHeader>
        <ModalBody>
          <p id={question.questionID} className="quiz-question">
            {question.question}
          </p>
          <Form className="mt-3">
            {question.answers.map((answer) => (
              <div key={answer.id} className="row">
                <div className="col-md-6 d-flex justify-content-start mt-2">
                  <input className="answer-checkbox" type="radio" name="answer" value={`${answer.id}`} onChange={(e) => setUserAnswer(e.target.value)} />
                  {answer.answer}
                </div>
              </div>
            ))}
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => answerHandler()}>Send answer</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default QuizModal;
