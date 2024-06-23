import React from "react";
import {app} from "./firebase";

export const Login = (props) => {
  const [isRegister, setIsRegister] = React.useState(false);

  const createUser = (email, password) => {
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((firebaseUser) => {
        console.log("usuario creado:", firebaseUser);
        props.setUser(firebaseUser);
      });
  };

  const login = (email, password) => {
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((firebaseUser) => {
        console.log("sesión iniciada con:", firebaseUser.user);
        props.setUser(firebaseUser);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.emailField.value;
    const password = e.target.passwordField.value;

    if (isRegister) {
      createUser(email, password);
    }

    if (!isRegister) {
      login(email, password);
    }
  };

  const logOut = () => {
    app.auth().signOut();
  };

  
  return (
    <div>
      <h1> {isRegister ? "Regístrate" : "Inicia sesión"}</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="emailField"> Email </label>
        <input type="email" id="emailField" />
        <label htmlFor="passwordField"> Contraseña </label>
        <input type="password" id="passwordField" />
        <button type="submit">
          {" "}
          {isRegister ? "Regístrate" : "Inicia sesión"}{" "}
        </button>
      </form>
      <button onClick={() => setIsRegister(!isRegister)}>
        {isRegister
          ? "Iniciar sesión"
          : "Registrarse"}
      </button>
      <button onClick={logOut}>Cerrar Sesión</button>
    </div>
  );
};
  

export default Login;