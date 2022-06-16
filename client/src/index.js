import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Container } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Container>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </Container>,
);
