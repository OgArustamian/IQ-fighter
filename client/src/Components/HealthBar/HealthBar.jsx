import './HealthBar.css';
import React from 'react';
import healthBorder from './img/healthborder-modified.png';

function HealthBar({ p }) {
  return (
    <div className="progress-container">
      <progress max="100" value={p} />
      <img className="health-border" src={healthBorder} alt="hp border" />
    </div>
  );
}

export default HealthBar;
