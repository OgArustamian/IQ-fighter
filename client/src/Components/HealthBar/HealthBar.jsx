import './HealthBar.css';
import React from 'react';
import healthBorder from './img/healthborder-modified.png';

function HealthBar() {
  return (
    <div className="barOuter">
      <span className="hpValue">100HP</span>
      <img className="healthBorder" src={healthBorder} width="110px" alt="healthbar" />
    </div>
  );
}

export default HealthBar;
