import './HealthBar.css';
import React from 'react';
import healthBorder from './img/healthborder-modified.png';

function HealthBar({ hp }) {
  console.log(hp);
  return (
    <div className="progress-container">
      <progress max="100" value={hp} />
      <img className="health-border" src={healthBorder} alt="hp border" />
    </div>
  );
}

export default HealthBar;
