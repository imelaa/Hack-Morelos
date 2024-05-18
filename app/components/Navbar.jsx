import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-white fixed top-0 w-full text-color-6 p-3 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <a href="../" className="text-xl font-bold bg-customGreentext-white py-2 px-2 rounded-3xl w-80 m-2 h-70 mx-2 transition-transform duration-300 transform hover:scale-110">Logo-inicio</a>
        </div>
        <div className="flex-grow flex justify-center">
          <a href="../" className="text-xl font-bold bg-customGreentext-white py-2 px-2 rounded-3xl w-80 m-2 h-70 mx-2 transition-transform duration-300 transform hover:scale-110">Lenguas</a>
          <a href="./../Renders/RecoImg" className="text-xl font-bold bg-customGreentext-white py-2 px-2 rounded-3xl w-80 m-2 h-70 mx-2 transition-transform duration-300 transform hover:scale-110">Reconocimiento de imagenes</a>
        </div>
        <div className="flex-shrink-0">
          <a href="./../Renders/comunidad" className="text-xl font-bold bg-customGreentext-white py-2 px-2 rounded-3xl w-80 m-2 h-70 mx-2 transition-transform duration-300 transform hover:scale-110">Comunidad</a>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
