import React, { useState } from 'react';
import {Login} from './login';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Navegación</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img src="img/unimet/logo.png" alt="Unimet Store" style={{ height: '40px' }} />
          </a>
          <span className="navbar-title" style={{ marginLeft: '10px', fontSize: '18px', fontWeight: 'bold' }}>
            Unimet Store / Identity & Coffee Bar
          </span>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll" onClick={() => scrollToSection('about')}>Sobre Nosotros</a>
            </li>
            <li>
              <a href="#features" className="page-scroll" onClick={() => scrollToSection('features')}>Productos</a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll" onClick={() => scrollToSection('portfolio')}>Galería</a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll" onClick={() => scrollToSection('testimonials')}>Testimonios</a>
            </li>
            <li>
              <a href="#contact" className="page-scroll" onClick={() => scrollToSection('contact')}>Contáctanos</a>
            </li>
            <li>
              <a onClick={togglePopup} className="page-scroll">Iniciar Sesión</a>
            </li>
          </ul>
        </div>
      </div>
      {isOpen && <Login setIsOpen={setIsOpen} />}
    </nav>
  );
};
