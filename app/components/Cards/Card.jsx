// components/FeaturedCard.js
"use client";

import Image from "next/image";
import React from "react";

export default function Card(props) {
  const handleClick = async () => {
    console.log("hola bola");
    try {
      const audio = new Audio("../../../../app/assets/audios/cuak.mp3"); // Ruta correcta al archivo de audio
      await audio.play(); // await para manejar la promesa correctamente
    } catch (err) {
      console.log(err);
    }
    console.log("Adios bola");
  };

  return (
    <div
      className="bg-white shadow-lg rounded-lg p-4 w-max"
      onClick={handleClick}
    >
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
