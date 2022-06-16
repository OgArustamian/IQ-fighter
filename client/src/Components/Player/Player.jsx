/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './Player.css';
import ImageMapper from 'react-image-mapper';

function Player({ url }) {
  const MAP = {
    name: 'character',
    areas: [
      {
        name: 'head', shape: 'circle', coords: [425, 209, 103], preFillColor: '', fillColor: 'rgba(255, 0, 0, 0.6)',
      },
      {
        name: 'leftHand', shape: 'poly', coords: [32, 581, 110, 582, 175, 546, 206, 497, 254, 466, 306, 353, 318, 368, 298, 474, 280, 502, 249, 533, 205, 574, 153, 616, 120, 641, 60, 626, 26, 619, 17, 596, 15], fillColor: 'rgba(255, 0, 0, 0.6)',
      },
      {
        name: 'rightHand', shape: 'poly', coords: [530, 361, 569, 347, 624, 337, 674, 329, 715, 311, 750, 278, 788, 256, 777, 192, 752, 166, 710, 157, 660, 200, 682, 248, 609, 292, 584, 294, 557, 312, 507, 348, 516, 360], fillColor: 'rgba(255, 0, 0, 0.6)',
      },
      {
        name: 'body', shape: 'poly', coords: [339, 701, 344, 523, 281, 418, 304, 335, 503, 305, 538, 370, 498, 483, 504, 566, 560, 626, 465, 679], fillColor: 'rgba(255, 0, 0, 0.6)',
      },
      {
        name: 'legs', shape: 'poly', coords: [509, 653, 591, 767, 580, 841, 550, 958, 518, 1081, 508, 1191, 419, 1192, 432, 1175, 302, 810, 320, 711, 387, 694, 435, 677, 424, 683], fillColor: 'rgba(255, 0, 0, 0.6)',
      },
    ],
  };

  return (
    <div>
      <ImageMapper
        src={url}
        map={MAP}
        width={250}
        imgWidth={865}
      />
    </div>
  );
}

export default Player;
