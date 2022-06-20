import React from 'react';
import './Spinner.css';
import spinnerimg from './img/fireball.png';

export default function Spinner() {
  return (
    <div className="centered">
      <img className="rot" src={spinnerimg} alt="#" />
    </div>
  );
}
