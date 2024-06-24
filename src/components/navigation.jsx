import React, { useState } from 'react';
import Login from './login';


export const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <li>
        <a href="#about" className="page-scroll" onClick={() => setIsOpen(true)}>
          Iniciar Sesión
        </a>
      </li>
      {<nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Navegación</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
          Unimet Store / Identity & Coffee Bar
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Productos
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Galería
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonios
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contáctanos
              </a>
            </li>
            <li>
              <a href="#login" className="page-scroll">
                Iniciar Sesión
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>}

      {isOpen && <Login setIsOpen={setIsOpen} />} 
    </nav>
  );
};

