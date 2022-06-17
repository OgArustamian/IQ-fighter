import React, { useState } from 'react';
import ImageMapper from 'react-image-mapper';
import attackCursor from './img/sword-attack-icon .png';

function SecondPlayer({ url }) {
  const [isHover, setIsHover] = useState(false);

  const body = document.querySelector('body');

  if (isHover) {
    body.style.cursor = `url(${attackCursor}), auto`;
  } else {
    body.style.cursor = 'default';
  }

  const BODY = {
    name: 'character',
    areas: [
      {
        name: 'head', shape: 'poly', coords: [429, 128, 449, 111, 451, 86, 456, 61, 434, 43, 408, 47, 395, 59, 398, 79, 411, 107], fillColor: 'rgba(255, 0, 0, 0.6)',
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
        width={600}
        imgWidth={800}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      />
    </div>
  );
}

export default SecondPlayer;
