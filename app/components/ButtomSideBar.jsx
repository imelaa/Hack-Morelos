"use client";
import React from "react";

const ButtonSidebar = (elemento) => {
  const handleClick = () => {
    console.log("Elemento seleccionado: ", elemento.elemento.id);
  };
  
  return (
    <button
      className="flex items-center space-x-2 bg-color-6 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-52 m-2 h-52 mx-8"
      onClick={handleClick}
    >
      <img src={elemento.image} alt="Button Image" className="w-6 h-6" />
      <span>{elemento.text}</span>
      <a href={elemento.href}></a>
    </button>
  );
};

export default ButtonSidebar;
