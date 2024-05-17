"use client";
import React from "react";
import Image from "next/image";

const ButtonSidebar = ({ elemento }) => {
  const handleClick = () => {
    console.log("Elemento seleccionado: ", elemento.id);
  };

  return (
    <a
      href={elemento.href}
      className="flex items-center space-x-2 bg-gray-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-52 m-2 h-52 mx-8"
      onClick={handleClick}
    >
      <Image src={elemento.image} alt="Button Image" width={24} height={24} className="w-6 h-6" />
      <span>{elemento.text}</span>
    </a>
  );
};

export default ButtonSidebar;
