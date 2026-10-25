import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo font-minecraft">JM</a>
        
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <a href="#home" className="navbar-link" onClick={() => setIsOpen(false)}>Inicio</a>
          <a href="#about" className="navbar-link" onClick={() => setIsOpen(false)}>Sobre Mí</a>
          <a href="#projects" className="navbar-link" onClick={() => setIsOpen(false)}>Proyectos</a>
          <a href="#contact" className="navbar-link" onClick={() => setIsOpen(false)}>Contacto</a>
        </nav>
      </div>
    </header>
  );
}