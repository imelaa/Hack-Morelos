// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-white fixed top-0 w-full text-color-6 p-4 z-50">
      <div className="container mx-auto flex flex-row">
        <h1 className="text-xl font-bold">Navbar</h1>
        <a href="" className='text-right' >Inicio</a>
        <a href="">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
