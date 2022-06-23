import React, { useState } from 'react';
import {
  Alert,
  Button, Form, FormGroup, Input, Label, NavLink,
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import './Registration.css';
import { regUser } from '../../Redux/Actions/userAction';
import MainNavbar from '../Navbar/MainNavbar';

export default function Registration() {
  const [inputs, setInputs] = useState({});
  const { users } = useSelector((state) => state);
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputs);
    dispatch(regUser(inputs));
    setInputs({});
  };
  return (
    <>
      <MainNavbar />
      <div className="auth-size-woindow">
        <Form inline className="mt-5 login-form" onSubmit={submitHandler}>
          <FormGroup floating>
            <Input
              id="exampleUsName"
              name="username"
              placeholder="username"
              type="text"
              onChange={inputHandler}
              value={inputs.username || ''}
            />
            <Label for="exampleEmail">
              Имя пользователя
            </Label>
          </FormGroup>
          {' '}
          <FormGroup floating>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
              onChange={inputHandler}
              value={inputs.email || ''}
            />
            <Label for="exampleEmail">
              Email
            </Label>
          </FormGroup>
          {' '}
          <FormGroup floating>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Password"
              type="password"
              onChange={inputHandler}
              value={inputs.password || ''}
            />
            <Label for="examplePassword">
              Пароль
            </Label>
          </FormGroup>
          {' '}
          {users.message === 'Этот email уже существует.'
              && (
                <Alert color="danger">
                  Такой email уже существует.
                </Alert>
              )}
          {users.message === 'Этот логин уже существует.'
              && (
                <Alert color="danger">
                  Этот Ник-нейм уже занят.
                </Alert>
              )}
          <Button className="BlizBtn mt-4" type="submit">
            Зарегистрироваться
          </Button>
        </Form>
      </div>
    </>
  );
}
