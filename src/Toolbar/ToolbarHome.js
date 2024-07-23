import React from 'react';
import Toolbar from './Toolbar.js';
import HeaderBack from '../BaseComponents/headerBack.js';


function ToolbarHome() {

  return (
    <div>

        <HeaderBack />

        <div className="max-w-5xl mx-auto flex justify-center my-24">
            <Toolbar />
        </div>

    </div>
  );
}

export default ToolbarHome;
