import './HealthBar.css';
import React from 'react';
import healthBorder from './img/healthborder-modified.png';
import { useWsContext } from '../Context/Context';

function HealthBar({ p }) {
  return (
    <div>
      {/* <img className="health-border" src={healthBorder} alt="hp border" /> */}
      <progress max="100" value={p} />
    </div>
  );
}

export default HealthBar;
