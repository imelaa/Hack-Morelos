// components/FeaturedCard.js
"use client";

import Image from "next/image";
import React from "react";

export default function Card(props) {
  const handleClick = () => {
    console.log("Aqui iria el audio");
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-max" onClick={handleClick}>
      <Image
        src={props.imageUrl}
        alt="Placeholder"
        width={300}
        height={200}
        className="rounded-lg"
      />
      <p className="text-color-6">{props.textoDialecto}</p>
      <p className="text-color-6">{props.textoIngles}</p>
    </div>
  );
}
