import React from 'react';
import MusicPlay from '../MusicPlay/music.js';
import HeaderBack from '../BaseComponents/headerBack.js';


function MusicHome() {

  return (
    <div>

        <HeaderBack />

        <div className="max-w-5xl mx-auto flex justify-center my-24">
            <MusicPlay />
        </div>

    </div>
  );
}

export default MusicHome;
