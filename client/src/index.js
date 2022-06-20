import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from 'reactstrap';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import storeR from './Redux/store';
import App from './App';
import Context from './Components/Context/Context';

axios.defaults.baseURL = process.env.REACT_APP_URL;
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
    <Container>
      <BrowserRouter>
        <Provider store={storeR}>
          <App />
        </Provider>
      </BrowserRouter>
    </Container>
  </Context>,
);
