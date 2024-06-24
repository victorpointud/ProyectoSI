import React, { useState } from 'react';
import { Login } from './login';
import { Profile } from './profile';
import { ChangePassword } from './changePassword';
import { auth } from './firebase';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const Navigation = ({ user, setUser }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);

  const toggleLoginPopup = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const toggleProfilePopup = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      setUser(null);
      setIsProfileOpen(false);
    }).catch((error) => {
      console.error("Error al cerrar sesión:", error);
    });
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
          <div className="navbar-brand-container">
            <a className="navbar-brand page-scroll" href="#page-top">
              <img src="img/unimet/logo.png" alt="Logo" className="navbar-logo" />
            </a>
            <a className="navbar-text page-scroll" href="#page-top"> Unimet Store / Identity & Coffee Bar
            </a>
          </div>
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
            {user ? (
              <li>
                <a className="page-scroll" onClick={toggleProfilePopup}>Perfil</a>
              </li>
            ) : (
              <li>
                <a onClick={toggleLoginPopup} className="page-scroll">Iniciar Sesión</a>
              </li>
            )}
          </ul>
        </div>
      </div>
      {isLoginOpen && <Login setIsOpen={setIsLoginOpen} setUser={setUser} />}
      {isProfileOpen && <Profile user={user} setUser={setUser} setProfileOpen={setIsProfileOpen} setChangePasswordOpen={setIsChangePasswordOpen} />}
      {isChangePasswordOpen && <ChangePassword user={user} setIsOpen={setIsChangePasswordOpen} />}
    </nav>
  );
};
