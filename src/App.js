import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage.js"; 
import UpvoteHome from './upvote/upvoteHome.js';
import JellyTagHome from './JellyTags/JellyTagHome.js';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/upvote" element={<UpvoteHome />} />
      <Route path="/jellytag" element={<JellyTagHome />} />
    </Routes>
  </BrowserRouter>


  );
}

export default App;
