import React, { useState } from 'react';
import './FirstPlayer.css';
import ImageMapper from 'react-image-mapper';

function SecondPlayer({ url }) {
  const [isHover, setIsHover] = useState(false);

  const body = document.querySelector('body');

  if (isHover) {
    body.style.cursor = 'pointer';
  } else {
    body.style.cursor = 'default';
  }

  const BODY = {
    name: 'character',
    areas: [
      {
        name: 'head', shape: 'circle', coords: [], fillColor: 'rgba(255, 0, 0, 0.6)',
      },
      {
        name: 'leftHand', shape: 'poly', coords: [], fillColor: 'rgba(255, 0, 0, 0.6)',
      },
      {
        name: 'rightHand', shape: 'poly', coords: [], fillColor: 'rgba(255, 0, 0, 0.6)',
      },
      {
        name: 'body', shape: 'poly', coords: [], fillColor: 'rgba(255, 0, 0, 0.6)',
      },
      {
        name: 'legs', shape: 'poly', coords: [], fillColor: 'rgba(255, 0, 0, 0.6)',
      },
    ],
  };

  return (
    <div>
      <ImageMapper
        src={url}
        map={BODY}
        width={250}
        // imgWidth={865}
        // onMouseEnter={() => setIsHover(true)}
        // onMouseLeave={() => setIsHover(false)}
      />
    </div>
  );
}

export default SecondPlayer;
