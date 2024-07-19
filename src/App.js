import React, { useState } from 'react';
import { motion } from "framer-motion";
import './App.css';


function App() {

  const [toggle, setToggle] = useState(false);
  const colorAndNumber = toggle ? { border: "#6FCF", color: "#6FCF97", number: 29 } : { border: "#FFFFFF", color: "#FFFFFF", number: 28 };

  const variants = {
    initial: {scale: 1},
    hover: {scale: 1.02},
  };

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      
      <motion.div className="upvote_svg flex flex-col justify-center items-center px-8 py-4 border-2 bg-white rounded-xl hover:shadow-custom-border hover:border-custom-green-medium"
        initial="initial"
        whileHover="hover"
        variants={variants}
        onClick={handleClick} 
         >

        <svg className="svg-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect 
            width="40" 
            height="40" 
            rx="20" 
            fill="#FFFFFF"
            />

            <path 
            d="M29.375 20.2604L20 10.8854L10.625 20.2604H15.8333V29.1146H24.1667V20.2604H29.375Z" 
            fill={colorAndNumber.color}
            stroke="#00AA45" 
            stroke-width="1.25" 
            stroke-linejoin="round"/>
        </svg>

        <h1 className='mt-1 text-xl font-JetBrains text-green-900'>{colorAndNumber.number}</h1>

      </motion.div>

    </div>
  );
}

export default App;
