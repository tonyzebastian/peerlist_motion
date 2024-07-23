import React from "react";
import Upvote from './upvote/upvote.js';
import JellyTag from './JellyTags/JellyTag.js';
import MusicPlay from "./MusicPlay/music.js";
import './Homepage.css';
import Toolbar from "./Toolbar/Toolbar.js";

function Homepage() {
  return (
    <div>

      <div to="/" className='max-w-5xl mx-auto my-12 flex flex-row justify-between items-center' >
        <h1 className='text-2xl font-Playfair text-blue-500'>Interaction Lab</h1>
        <h1 className='font-Playfair text-slate-400'>made by <a href="https://bento.me/tonyzeb" target="_blank" className="text-slate-700 hover:underline underline-offset-1" rel="noopener noreferrer">Tony Sebastian</a></h1>
      </div>

      <div className="max-w-5xl mx-auto my-12 flex flex-wrap justify-center items-center gap-4">

        <div className="container-border-big rounded-lg flex-wrap">
          <MusicPlay />
        </div> 

        <div className=" relative container-border-big rounded-lg flex-wrap">
          <Toolbar/>
        </div> 

        <div className="flex flex-row gap-4">
          <div className="container-border rounded-lg flex flex-col">
            <Upvote />
          </div>

          <div className="container-border rounded-lg">
            <JellyTag />
          </div> 
        </div>

      </div>

    </div>
  );
}

export default Homepage;

