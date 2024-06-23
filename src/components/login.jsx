import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  carnet: "",
};

export const Login = (props) => {
  const [{ name, email, carnet }, setState] = useState(initialState);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, carnet);

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <header>
        <button onClick={() => setIsOpen(true)}>Iniciar Sesión</button>
      </header>
      {isOpen && (
        <div className="login-popup">
          <div className="popup-content">
            <button onClick={() => setIsOpen(false)}>Cerrar</button>
            <h2>Iniciar Sesión</h2>
            <div className="container">
              <div className="col-md-8">
                <div className="row">
                  <div className="section-title">
                    <h2>Iniciar Sesión</h2>
                    <p>Inicie sesión para acceder a todas las opciones</p>
                  </div>
                  <form name="Iniciando" validate onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Nombre"
                            required
                            onChange={handleChange}
                          />
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            required
                            onChange={handleChange}
                          />
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea
                        name="carnet"
                        id="carnet"
                        className="form-control"
                        rows="4"
                        placeholder="Carnet"
                        required
                        onChange={handleChange}
                      ></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                    <div id="success"></div>
                    <button type="submit" className="btn btn-custom btn-lg">
                      Iniciar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
