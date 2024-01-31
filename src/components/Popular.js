import React from 'react'
import Song from './Song'

import play from '../assets/play.png'

export default function Popular() {
  return (
    <>
      <div className='song-body'>
        <div className='flex-container align-left artist-options'>
          <img 
          className='play-img'
          src={play} alt="play" />
          <button className='btn-follow'>Following</button>
          <div className='dots'></div>
        </div>

        <h2>Popular</h2>
        <Song />
      </div>
    </>
  );
}
