import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Form, FormGroup, Input, Label, NavLink,
} from 'reactstrap';
import './SignIn.css';

export default function SignIn() {
  return (
    <div className="auth-size-woindow">
      <Form inline className="mt-5   login-form">
        <FormGroup floating>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
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
          />
          <Label for="examplePassword">
            Password
          </Label>
        </FormGroup>
        {' '}
        <Button className="BlizBtn mt-4">
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
