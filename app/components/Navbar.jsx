
import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-white fixed top-0 w-full text-color-6 p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="../" className="text-xl font-bold">Logo-inicio</a>
        <a href="../" className="text-xl font-bold">Lenguas </a>
        <a href="./../Renders/comunidad" className="text-xl font-bold">Comunidad</a>
      </div>
    </div>
  );
};

export default Navbar;

