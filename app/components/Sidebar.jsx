// components/Sidebar.js
import ButtonSidebar from "./ButtomSideBar";

const SidebarElements = [
  {
    id: 1,
    image: "/assets/cat.jpg",
    text: "Botoncito",
    href: "/",
  },
  {
    id: 2,
    image: "/icons/home.svg",
    text: "Botoncito",
    href: "/",
  },
  {
    id: 3,
    image: "/icons/home.svg",
    text: "Botoncito",
    href: "/",
  },
  {
    id: 4,
    image: "/icons/home.svg",
    text: "Botoncito",
    href: "/",
  },
  {
    id: 5,
    image: "/icons/home.svg",
    text: "Botoncito",
    href: "/",
  },
  {
    id: 6,
    image: "/icons/home.svg",
    text: "Botoncito",
    href: "/",
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
// components/Sidebar.js


