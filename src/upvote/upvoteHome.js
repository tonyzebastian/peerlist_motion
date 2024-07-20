import React from 'react';
import { IoReturnUpBackOutline } from "react-icons/io5";
import Upvote from './upvote.js';


function UpvoteHome() {

  return (
    <div>
        <div className=''>
        <IoReturnUpBackOutline />
        <h1 className='font-Playfair'>Home</h1>
        </div>

        <div className="flex justify-center items-center">
            <Upvote />
        </div>

    </div>
  );
}

export default UpvoteHome;
