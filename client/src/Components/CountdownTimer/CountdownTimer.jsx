/* eslint-disable prefer-const */
import React, {
  useEffect, useState, useRef, useCallback, memo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendAnswer } from '../../Redux/Actions/answersAction';
import { useWsContext } from '../Context/Context';
import styles from './CountdownTimer.module.css';

function CountdownTimer({ answerID }) {
  const { modal, setModal, ws } = useWsContext();
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.users);
  const { turnID } = useSelector((state) => state.player);
  const room = useSelector((state) => state.ws);

  let [timer, setTimer] = useState(30);
  const timerId = useRef(null);
  const circle = useRef();
  const circleRing = useRef();

  function startBlinking() {
    if (timer === 20) {
      circleRing.current.style.stroke = '#f8b700';
    } else if (timer === 10) {
      circleRing.current.style.stroke = 'red';
      circle.current.classList.add(styles.blink);
    }
  }

  function clear() {
    window.clearInterval(timerId.current);
  }

  useEffect(() => {
    clear();
    timerId.current = window.setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clear();
  }, []);

  useEffect(() => {
    startBlinking();
    if (timer === 0) {
      clear();
      setModal(!modal);
      dispatch(sendAnswer(ws, room, id, answerID, turnID));
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
