import React from 'react';



// const boton ={
//   imgUrl: "/assets/test.jpg"
//   texto: 
// }

const Sidebar = () => {
  return (

    
    <div className="fixed top-0 left-0 h-full w-64 bg-gray-760 text-white p-4 backdrop-blur rounded-lg border border-blue transition duration-300">
      <div className="py-4 px-6 ">
  
        <img src="../assets/test.jpg" alt="jgf" className="h-12 w-12 rounded-full" />
        </div>
      <nav className="mt-6">
        <ul>
          <div>
            <a href="../../Renders/A6-Social" className="sidebar-link btn block text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300">Social</a>
          </div>
          <li>
            <a href="../../Renders/A7-Trabajo" className="sidebar-link block text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300">Trabajo</a>
          </li>
          <li>
            <a href="../../Renders/A1-Comida" className="sidebar-link block text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300">Comida</a>
          </li>
          <li>
            <a href="../../Renders/A4-Escuela" className="sidebar-link block text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300">Escuela</a>
          </li>
          <li>
            <a href="../../Renders/A2-Numeros" className="sidebar-link block text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300">Numeros</a>
          </li>
          <li>
            <a href="../../Renders/A3-Direccion" className="sidebar-link block text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300">Direccion</a>
          </li>
          <li>
            <a href="../../Renders/A5-Preposiciones" className="sidebar-link block text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300">Preposiciones</a>
          </li>
        </ul>
      </nav>


      <div className="fixed top-0 left-0 h-full w-64 bg-gray-760 text-white p-4 backdrop-blur rounded-lg border border-blue transition duration-300">
      
    </div>
    </div>
    
  );
}

export default Sidebar;