import React from 'react';
import {
  Button, Form, FormGroup, Input, Label, NavLink,
} from 'reactstrap';
import './Registration.css';

export default function Registration() {
  return (
    <div className="auth-size-woindow">
      <Form inline className="mt-5   login-form">
        <FormGroup floating>
          <Input
            id="exampleUserName"
            name="UserName"
            placeholder="UserName"
            type="text"
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
          Зарегистрироваться
        </Button>
      </Form>
    </div>
  );
}
