import './HealthBar.css';
import React from 'react';
import healthBorder from './img/healthborder-modified.png';
import { useWsContext } from '../Context/Context';

function HealthBar() {
  const { playerHp } = useWsContext();
  console.log('healthbar comp ->>>>>>>>>>', playerHp);

  return (
    <div>
      <progress max="100" value={playerHp} />
    </div>
  );
}

export default HealthBar;
