/* eslint-disable prefer-const */
import React, { useEffect, useState, useRef } from 'react';
import { useWsContext } from '../Context/Context';

function CountdownTimer() {
  const { modal, setModal } = useWsContext();
  let [timer, setTimer] = useState(5);
  const timerId = useRef(null);

  function clear() {
    window.clearInterval(timerId.current);
  }

  useEffect(() => {
    timerId.current = window.setInterval(() => {
      setTimer(timer -= 1);
    }, 1000);
    return () => clear();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setModal(!modal);
      clear();
    }
  }, [timer]);

  return (
    <div className="timer">
      {timer}
    </div>
  );
}

export default CountdownTimer;
