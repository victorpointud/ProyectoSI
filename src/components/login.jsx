import React, { useState } from 'react';
import { auth } from './firebase';

export const Login = ({ setIsOpen }) => {
  const [isRegister, setIsRegister] = useState(false);

  const login = (email, password) => {
    auth.signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        console.log("Sesión iniciada con:", user);
        setIsOpen(false); 
      });
  };

  const createUser = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        console.log("Usuario registrado:", user);
        setIsOpen(false); 
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.emailField.value;
    const password = e.target.passwordField.value;
    if (isRegister) {
      createUser(email, password);
    } else {
      login(email, password);
    }
  };

  return (
    <div id="login-popup">
      <div className="login-content">
        <button className="close" onClick={() => setIsOpen(false)}>×</button>
        <form onSubmit={submitHandler}>
          <h1>{isRegister ? "Regístrate" : "Inicia sesión"}</h1>
          <label htmlFor="emailField">Email</label>
          <input type="email" id="emailField" name="emailField" required />
          <label htmlFor="passwordField">Contraseña</label>
          <input type="password" id="passwordField" name="passwordField" required />
          <button type="submit">{isRegister ? "Regístrate" : "Inicia sesión"}</button>
          <button className="toggle-button" type="button" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "Iniciar sesión" : "Registrarse"}
          </button>
          <button type="button" onClick={() => {
            auth.signOut();
            setIsOpen(false);
          }}>Cerrar sesión</button>
        </form>
      </div>
    </div>
  );
};
