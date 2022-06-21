import './HealthBar.css';
import React from 'react';
import healthBorder from './img/healthborder-modified.png';
import { useWsContext } from '../Context/Context';

function HealthBar() {
  const {
    hero, enemy, firstPlayerHp, secondPlayerHp,
  } = useWsContext();
  console.log('healthbar comp ->>>>>>>>>>', firstPlayerHp, secondPlayerHp);

  return (
    <div>
      <progress max="100" value={hero ? firstPlayerHp : secondPlayerHp} />
    </div>
  );
}

export default HealthBar;
