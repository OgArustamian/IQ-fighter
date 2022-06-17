import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Form, FormGroup, Input, Label, NavLink,
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { userSignIn } from '../../Redux/Actions/userAction';
import './SignIn.css';

export default function SignIn() {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userSignIn(inputs));
    setInputs({});
  };
  return (
    <div className="auth-size-woindow">
      <Form inline className="mt-5 login-form" onSubmit={submitHandler}>
        <FormGroup floating>
          <Input
            id="exampleUserName"
            name="username"
            placeholder="Email"
            type="text"
            value={inputs.username || ''}
            onChange={inputHandler}
          />
          <Label for="exampleEmail">
            Имя пользователя
          </Label>
        </FormGroup>
        {' '}
        <FormGroup floating>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
            value={inputs.password || ''}
            onChange={inputHandler}
          />
          <Label for="examplePassword">
            Пароль
          </Label>
        </FormGroup>
        {' '}
        <Button className="BlizBtn mt-4" type="submit">
          Авторизоваться
        </Button>
        <Link to="/signup">
          <NavLink className="mt-4">
            Пройти регистрацию
          </NavLink>
        </Link>
      </Form>
    </div>
  );
}
