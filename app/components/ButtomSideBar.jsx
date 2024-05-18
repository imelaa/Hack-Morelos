import React from 'react';
import Image from 'next/image';

const ButtonSidebar = ({ elemento }) => {
  return (
    <a
      href={elemento.href}
      className="flex flex-col items-center bg-customGreen text-white font-bold py-2 px-2 rounded-3xl w-80 m-2 h-70 mx-2 transition-transform duration-300 transform hover:scale-110"
    >
      <Image
        src={elemento.image}
        alt="Button Image"
        width={70}
        height={70}
        className="w-40 h-40 flex flex-col items-center "
      />
      <span>{elemento.text}</span>
    </a>
  );
};

export default ButtonSidebar;
