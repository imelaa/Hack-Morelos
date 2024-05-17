// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bottom-0 bg-white text-white w-full ">
      <div className="container mx-auto text-center text-stone-500">
        <p>&copy; {new Date().getFullYear()} Culturas conectadas. Todos los derechos reservados.</p>
        <ul className="flex justify-center space-x-4 mt-2 mb-2">
          <li><a href="/about" className="hover:underline">Sobre nosotros</a></li>
          <li><a href="/contact" className="hover:underline">Contacto</a></li>
          <li><a href="/privacy" className="hover:underline">Política de privacidad</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
