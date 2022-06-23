import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Alert,
  Button, Form, FormGroup, Input, Label, NavLink,
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userSignIn } from '../../Redux/Actions/userAction';
import './SignIn.css';
import MainNavbar from '../Navbar/MainNavbar';

export default function SignIn() {
  const [inputs, setInputs] = useState({});
  const { users } = useSelector((state) => state);
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
    <>
      <MainNavbar />
      <div className="auth-size-window">
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
              Ник-нейм
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
          {users.message
              && (
                <Alert color="danger">
                  Не верный ник-нейм или пароль
                </Alert>
              )}
          <Button className="BlizBtn mt-4" type="submit">
            Авторизоваться
          </Button>
          <Link to="/signup">
            <NavLink className="mt-4 auth-link">
              Пройти регистрацию.
            </NavLink>
          </Link>
        </Form>
      </div>
    </>
  );
}
