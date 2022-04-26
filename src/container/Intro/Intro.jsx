import React, { useState, useRef } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'

import { meal } from '../../constants'
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const handlePlay = () => {
    setPlayVideo(prevState => !prevState);

    if(playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  return (
    <div className='app__video'>
      <video
        src={meal}
        ref={vidRef}
        loop
        type='video/mp4'
        controls={false}
        muted
      />
      <div className='app__video-overlay flex__center'>
        <div className='app__video-overlay_cricle flex__center' onClick={handlePlay}>
          {
            playVideo ?
              <BsPauseFill color='#fff' fontSize={47} />
            : <BsFillPlayFill color='#fff' fontSize={47} />
          }
        </div>
      </div>
    </div>
  )
};

export default Intro;
