/* eslint-disable prefer-const */
import React, {
  useEffect, useState, useRef, useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendAnswer } from '../../Redux/Actions/answersAction';
import { useWsContext } from '../Context/Context';
import styles from './CountdownTimer.module.css';

function CountdownTimer({ userAnswer }) {
  const { modal, setModal, ws } = useWsContext();
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.users);
  const { turnID } = useSelector((state) => state.player);
  const room = useSelector((state) => state.ws);

  let [timer, setTimer] = useState(10);
  const timerId = useRef(null);
  const circle = useRef();
  const circleRing = useRef();

  function clear() {
    window.clearInterval(timerId.current);
  }

  function startBlinking() {
    if (timer === 20) {
      circleRing.current.style.stroke = '#f8b700';
    } else if (timer === 10) {
      circleRing.current.style.stroke = 'red';
      circle.current.classList.add(styles.blink);
    }
  }

  useEffect(() => {
    timerId.current = window.setInterval(() => {
      setTimer(timer -= 1);
      startBlinking();
    }, 1000);

    return () => clear();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setModal(!modal);
      if (userAnswer > 0) {
        console.log('send answer ---->', userAnswer);
        dispatch(sendAnswer(ws, room, id, userAnswer, turnID));
      } else {
        dispatch(sendAnswer(ws, room, id, 0, turnID));
      }
      clear();
    }
  }, [timer]);

  return (
    <div ref={circle} className={styles['base-timer']}>
      <svg className={styles['base-timer__svg']} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g className={styles['base-timer__circle']}>
          <circle ref={circleRing} className={styles['base-timer__path-elapsed']} cx="50" cy="50" r="45" />
        </g>
      </svg>
      <span id="base-timer-label" className={styles['base-timer__label']}>
        {timer}
      </span>
    </div>
  );
}

export default CountdownTimer;
