import React from 'react';
import JellyTag from './JellyTag.js';
import HeaderBack from '../BaseComponents/headerBack.js';


function JellyTagHome() {

  return (
    <div>

        <HeaderBack />

        <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-Playfair mb-12 text-slate-900">What's your favorite thing to do on a lazy Sunday?</h1>
            <div className="flex flex-wrap gap-4">
                <JellyTag title="Nap" />
                <JellyTag title="Read"/>
                <JellyTag title="Walk"/>
                <JellyTag title="Cook"/>
                <JellyTag title="Draw"/>
                <JellyTag title="Knit"/>
                <JellyTag title="Sing"/>
                <JellyTag title="Swim"/>
                <JellyTag title="Dance"/>
                <JellyTag title="Paint"/>
                <JellyTag title="Gardening"/>
                <JellyTag title="Yoga"/>
                <JellyTag title="Pottery"/>
                <JellyTag title="Coding"/>
                <JellyTag title="Hiking"/>
                <JellyTag title="Baking"/>
            </div>
        </div>

    </div>
  );
}

export default JellyTagHome;
