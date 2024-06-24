import React, { useState } from 'react';
import { auth } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";

export const Login = ({ setIsOpen, setUser }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [message, setMessage] = useState('');

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setMessage('Inicio de sesión exitoso');
        setUser({ ...user, password });
        setIsOpen(false);
      })
      .catch(error => {
        setMessage('Error al iniciar sesión: ' + error.message);
      });
  };

  const createUser = (email, password, username) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        updateProfile(user, {
          displayName: username
        }).then(() => {
          setMessage('Registro exitoso');
          setUser({ ...user, displayName: username, password });
          setIsOpen(false);
        }).catch(error => {
          setMessage('Error al actualizar el perfil: ' + error.message);
        });
      })
      .catch(error => {
        setMessage('Error al registrarse: ' + error.message);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.emailField.value;
    const password = e.target.passwordField.value;
    const username = e.target.userField ? e.target.userField.value : null;

    if (isRegister) {
      createUser(email, password, username);
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
          {isRegister && (
            <>
              <label htmlFor="userField">Usuario</label>
              <input type="text" id="userField" name="userField" required />
            </>
          )}
          <label htmlFor="emailField">Email</label>
          <input type="email" id="emailField" name="emailField" required />
          <label htmlFor="passwordField">Contraseña</label>
          <input type="password" id="passwordField" name="passwordField" required />
          {message && <p>{message}</p>}
          <button type="submit">{isRegister ? "Regístrate" : "Inicia sesión"}</button>
          <button className="toggle-button" type="button" onClick={() => {
            setIsRegister(!isRegister);
            setMessage(''); 
          }}>
            {isRegister ? "Iniciar sesión" : "Registrarse"}
          </button>
          <button type="button" onClick={() => {
            signOut(auth);
            setIsOpen(false);
          }}>Cerrar sesión</button>
        </form>
      </div>
    </div>
  );
};
