import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader,
} from 'reactstrap';
import './QuizModal.css';

function QuizModal() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [answer, setAnswer] = useState('');

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
                <input className="answer-checkbox" type="radio" name="answer" value="some value" onChange={(e) => setAnswer(e.target.value)} />
                Aadsadasdasda
              </div>
              <div className="col-md-6 d-flex justify-content-start mt-2">
                <input className="answer-checkbox" type="radio" name="answer" value="some value222" onChange={(e) => setAnswer(e.target.value)} />
                A
              </div>
              <div className="col-md-6 d-flex justify-content-start mt-2">
                <input className="answer-checkbox" type="radio" name="answer" value="some value3" onChange={(e) => setAnswer(e.target.value)} />
                Answer3
              </div>
              <div className="col-md-6 d-flex justify-content-start mt-2">
                <input className="answer-checkbox" type="radio" name="answer" value="some value4" onChange={(e) => setAnswer(e.target.value)} />
                Answer4
              </div>
            </div>
          </Form>
        </ModalBody>
        <ModalFooter><Button color="success" onClick={toggle}>Send answer</Button></ModalFooter>
      </Modal>
    </div>
  );
}

export default QuizModal;
