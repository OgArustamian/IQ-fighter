/* eslint-disable no-lone-blocks */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button, Form, Modal, ModalBody, ModalFooter, ModalHeader,
} from 'reactstrap';
import { sendAnswer } from '../../Redux/Actions/answersAction';
import { useWsContext } from '../Context/Context';
import './QuizModal.css';

function QuizModal() {
  const { modal, setModal } = useWsContext();
  const toggle = () => setModal(!modal);

  const question = useSelector((state) => state.question);
  const { id } = useSelector((state) => state.users);
  const { turnID } = useSelector((state) => state.player);

  const room = useSelector((state) => state.ws);

  const [userAnswer, setUserAnswer] = useState();
  const dispatch = useDispatch();
  const { ws } = useWsContext();

  function answerHandler() {
    if (userAnswer) {
      dispatch(sendAnswer(ws, room, id, userAnswer, turnID));
      toggle();
    }
  }

  return (
    <div>
      <Modal fullscreen="lg" centered className="quiz-modal" isOpen={modal}>
        <ModalHeader>Quiz theme</ModalHeader>
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
