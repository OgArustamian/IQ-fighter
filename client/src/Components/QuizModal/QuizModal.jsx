/* eslint-disable max-len */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Button, Form, Modal, ModalBody, ModalFooter, ModalHeader,
} from 'reactstrap';
import { useWsContext } from '../Context/Context';
import './QuizModal.css';

function QuizModal() {
  const { modal, setModal } = useWsContext();
  const toggle = () => setModal(!modal);

  const { question } = useSelector((state) => state);
  const [userAnswer, setUserAnswer] = useState();

  return (
    <div>
      <Button onClick={toggle}>Open modal</Button>
      <Modal fullscreen="lg" centered className="quiz-modal" isOpen={modal} toggle={toggle}>
        <ModalHeader>Quiz theme</ModalHeader>
        <ModalBody>
          <p className="quiz-question">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quasi, tempore
            pariatur iure a
            recusandae eaque quaerat ullam ipsam ea nisi quidem omnis suscipit voluptatum magni
            facere l
          </p>
          <Form className="mt-3">
            <div className="row">
              <div className="col-md-6 d-flex justify-content-start mt-2">
                <input className="answer-checkbox" type="radio" name="answer" value="answerID" onChange={(e) => setUserAnswer(e.target.value)} />
                Aadsadasdasda
              </div>
              <div className="col-md-6 d-flex justify-content-start mt-2">
                <input className="answer-checkbox" type="radio" name="answer" value="answerID" onChange={(e) => setUserAnswer(e.target.value)} />
                A
              </div>
              <div className="col-md-6 d-flex justify-content-start mt-2">
                <input className="answer-checkbox" type="radio" name="answer" value="some value3" onChange={(e) => setUserAnswer(e.target.value)} />
                Answer3
              </div>
              <div className="col-md-6 d-flex justify-content-start mt-2">
                <input className="answer-checkbox" type="radio" name="answer" value="some value4" onChange={(e) => setUserAnswer(e.target.value)} />
                Answer4
              </div>
            </div>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggle}>Send answer</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default QuizModal;

// <Modal fullscreen="lg" centered className="quiz-modal" isOpen={modal}>
// {/* <ModalHeader>Quiz theme</ModalHeader> */}
// <ModalBody>
//   <p id={question.questionID} className="quiz-question">
//     {question.question}
//   </p>
//   <Form className="mt-3">
//     {question.answers.map((answer) => (
//       <div className="row">
//         <div className="col-md-6 d-flex justify-content-start mt-2">
//           <input key={answer.id} className="answer-checkbox" type="radio" name="answer" value={`${answer.id}`} onChange={(e) => setUserAnswer(e.target.value)} />
//           {answer.answer}
//         </div>
//       </div>
//     ))}
//   </Form>
// </ModalBody>
// <ModalFooter><Button color="success" onClick={toggle}>Отправить ответ</Button></ModalFooter>
// </Modal>
