import React from 'react';
import ButtonSidebar from "./ButtomSideBar";

import social from "../assets/social.svg";
import trabajo from "../assets/trabajo.svg";
import comida from "../assets/comida.svg";
import escuela from "../assets/escuela.svg";
import numeros from "../assets/numeros.svg";
import direccion from "../assets/direccion.svg";
import salud from "../assets/salud.svg";



const SidebarElements = [
  {
    id: 1,
    image: social,
    text: "Social",
    href: "../../Renders/A6-Social",
  },
  {
    id: 2,
    image: trabajo,
    text: "Trabajo",
    href: "../../Renders/A7-Trabajo",
  },
  {
    id: 3,
    image: comida,
    text: "Comida",
    href: "../../Renders/A1-Comida",
  },
  {
    id: 4,
    image: escuela,
    text: "Escuela",
    href: "../../Renders/A4-Escuela",
  },
  {
    id: 5,
    image: numeros,
    text: "Numeros",
    href: "../../Renders/A2-Numeros",
  },
  {
    id: 6,
    image: direccion,
    text: "Direccion",
    href: "../../Renders/A3-Direccion",
  },
  {
    id: 6,
    image: salud,
    text: "Salud",
    href: "../../Renders/A5-Salud",
  },

];

const Sidebar = () => {
  return (

    <div className="sidebar flex flex-col items-center">
      {SidebarElements.map((elemento, index) => (
        <ButtonSidebar key={index} elemento={elemento} />
      ))}
    </div>
    
  );
}

export default Sidebar;