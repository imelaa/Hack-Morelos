// components/FeaturedCard.js
"use client";
import { useRef } from "react";
import Image from "next/image";
// import cat from "../assets/cat.jpg";

const Card=(props)=> {
  
  const audioRef =useRef(null);
  
  const handleClick = () => {
    audioRef.current.play(); 
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-max" onClick={handleClick}>
        <audio ref={audioRef} src="/random-mp3.mp3"></audio>
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

export default Card;


