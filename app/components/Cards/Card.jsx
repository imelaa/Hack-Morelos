// components/FeaturedCard.js
"use client";
import { useRef } from "react";
import Image from "next/image";
import { useState } from "react";
// import cat from "../assets/cat.jpg";

const Card = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const audioSrc = props.audio

  const handleClick = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Detiene la reproducción del audio
    } else {
      audioRef.current.play(); // Inicia la reproducción del audio
    }
    setIsPlaying(!isPlaying); // Cambia el estado de reproducción
  };

  return (
    <div
      className={`bg-white shadow-lg rounded-lg p-4 w-max ${
        isPlaying ? "bg-blue-100" : ""
      }`}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <audio ref={audioRef} src={audioSrc}></audio>
      <Image
        src={props.imageUrl}
        alt="Placeholder"
        width={300}
        height={200}
        className="rounded-lg w-40 h-40"

      />
      <p className="text-color-6">{props.textoDialecto}</p>
      <p className="text-color-6">{props.textoIngles}</p>
    </div>
  );
};

export default Card;