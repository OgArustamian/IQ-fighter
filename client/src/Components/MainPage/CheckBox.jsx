import React from 'react';
import useSound from 'use-sound';
import { Button } from 'reactstrap';
import soundUrl from '../../now-thats.mp3';

function Demo() {
  const [playbackRate, setPlaybackRate] = React.useState(1);

  const [play] = useSound(soundUrl, {
    playbackRate,
    volume: 10.5,
  });

  const handleClick = () => {
    setPlaybackRate(playbackRate);
    play();
  };

  return (
    <Button onClick={handleClick} BUTTON>
      <span role="img" aria-label="Heart" />
    </Button>
  );
}

export default Demo;
