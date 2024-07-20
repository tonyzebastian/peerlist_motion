import React from 'react';
import { Link } from 'react-router-dom';
import { IoReturnUpBackOutline } from "react-icons/io5";


function HeaderBack() {

  return (
    <Link to="/" className='max-w-5xl mx-auto my-12 flex flex-row items-center gap-2' >
        <IoReturnUpBackOutline style={{ color: '#3B82F6' }} />
        <h1 className='font-Playfair text-blue-500'>home</h1>
    </Link>
  );
}

export default HeaderBack;
