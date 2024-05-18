// src/Footer.js
import React from 'react';
import './Footer.css'; // Importa los estilos del footer si los tienes en un archivo CSS separado

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.</p>
        <ul className="footer-links">
          <li><a href="/about">Sobre nosotros</a></li>
          <li><a href="/contact">Contacto</a></li>
          <li><a href="/privacy">Política de privacidad</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
