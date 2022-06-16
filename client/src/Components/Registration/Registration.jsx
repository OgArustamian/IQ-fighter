import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Input, Label, NavLink,
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import './Registration.css';
import { regUser } from '../../Redux/Actions/userAction';

export default function Registration() {
  const [inputs, setInputs] = useState();
  const dispatch = useDispatch;
  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(regUser(inputs));
    setInputs([]);
  };
  return (
    <div className="auth-size-woindow">
      <Form inline className="mt-5 login-form" onSubmit={submitHandler}>
        <FormGroup floating>
          <Input
            id="exampleUserName"
            name="UserName"
            placeholder="UserName"
            type="text"
            onChange={inputHandler}
            value={inputs.username || ''}
          />
          <Label for="exampleEmail">
            UserName
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
            Password
          </Label>
        </FormGroup>
        {' '}
        <Button className="BlizBtn mt-4" type="submit">
          Зарегистрироваться
        </Button>
      </Form>
    </div>
  );
}
