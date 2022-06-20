import React, { useState } from 'react';
import ImageMapper from 'react-image-mapper';
import attackCursor from './img/sword-attack-icon .png';

function Player({
  url, player, width, imgWidth, active,
}) {
  const [isHover, setIsHover] = useState(false);

  const body = document.querySelector('body');
  if (isHover) {
    body.style.cursor = `url(${attackCursor}), auto`;
  } else {
    body.style.cursor = 'default';
  }

  return (
    <div>
      <ImageMapper
        // active={active}
        src={url}
        map={player}
        width={width}
        imgWidth={imgWidth}
        onClick={()}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      />
    </div>
  );
}

export default Player;
