import React from 'react';
import Upvote from './upvote.js';
import HeaderBack from '../BaseComponents/headerBack.js';


function UpvoteHome() {

  return (
    <div>
    
      <HeaderBack />

      <div className="max-w-5xl mx-auto flex justify-center items-center">
          <Upvote />
      </div>

    </div>
  );
}

export default UpvoteHome;
