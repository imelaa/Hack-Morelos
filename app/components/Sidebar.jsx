import React from 'react';
import ButtonSidebar from "./ButtomSideBar";
import cat from "../assets/cat.jpg";



const SidebarElements = [
  {
    id: 1,
    image: cat,
    text: "Social",
    href: "../../Renders/A6-Social",
  },
  {
    id: 2,
    image: "/icons/home.svg",
    text: "Trabajo",
    href: "../../Renders/A7-Trabajo",
  },
  {
    id: 3,
    image: "/icons/home.svg",
    text: "Comida",
    href: "../../Renders/A1-Comida",
  },
  {
    id: 4,
    image: "/icons/home.svg",
    text: "Escuela",
    href: "../../Renders/A4-Escuela",
  },
  {
    id: 5,
    image: "/icons/home.svg",
    text: "Numeros",
    href: "../../Renders/A2-Numeros",
  },
  {
    id: 6,
    image: "/icons/home.svg",
    text: "Direccion",
    href: "../../Renders/A3-Direccion",
  },
  {
    id: 6,
    image: "/icons/home.svg",
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