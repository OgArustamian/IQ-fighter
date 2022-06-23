import React from 'react';
import MainNavbar from '../Navbar/MainNavbar';
import './AboutPage.css';

function AboutPage() {
  return (
    <>
      <MainNavbar />
      <div className="about-container">
        <h1 className="about-title">Правила</h1>
        <p className="about-description">
          В игре участвуют 2 игрока.
          Игроки ходят по очереди. Атакующий игрок выбирает область тела противника для атаки,
          после чего появляется вопрос с 4-я вариантами ответов. Если оба игрока ответили
          правильно - ход переходит к следующему игроку.
          Если правильно ответил атакующий - у противника отнимаются
          {' '}
          <span>ОЗ</span>
          {' '}
          (очки здоровья).
          Если правильно ответил защищающийся - наносится контратака и
          {' '}
          <span>ОЗ</span>
          {' '}
          теряет игрок,
          который атаковал.
          Проигрывает тот игрок, у которого первым закончатся
          {' '}
          <span>ОЗ.</span>
        </p>
      </div>
    </>
  );
}

export default AboutPage;
