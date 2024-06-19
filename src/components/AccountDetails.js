import UserIcon from "./UserIcon";
import EnvelopeAlt from "./EnvelopeAlt";
import PropTypes from "prop-types";
import "./AccountDetails.css";

const AccountDetails = ({ className = "" }) => {
  return (
    <div className={`account-details ${className}`}>
      <div className="input-fields1">
        <div className="register-button">
          <div className="vector-group">
            <img className="frame-child3" alt="" src="/rectangle-74.svg" />
            <h1 className="registrar-usuario">Registrar Usuario</h1>
          </div>
        </div>
        <div className="instructions">
          <div className="introduce-los-siguientes">
            {" "}
            Introduce los siguientes datos:
          </div>
        </div>
        <div className="username-password">
          <div className="nombre-de-usuario1">Nombre de Usuario</div>
          <div className="input-values">
            <div className="input-values-child" />
            <UserIcon user1="/user.svg" />
          </div>
        </div>
        <div className="email-input-parent">
          <div className="email-input1">
            <div className="correo-institucional">Correo Institucional</div>
          </div>
          <div className="rectangle-parent2">
            <div className="frame-child4" />
            <EnvelopeAlt />
          </div>
        </div>
        <div className="i-d-input-wrapper">
          <div className="i-d-input">
            <input
              className="i-d-input-child"
              placeholder="Carnet Institucional"
              type="text"
            />
            <div className="vector-container">
              <img className="frame-child5" alt="" src="/rectangle-78.svg" />
              <img className="icon" alt="" src="/icon.svg" />
            </div>
          </div>
        </div>
        <div className="username-password1">
          <input className="contrasea1" placeholder="Contraseña" type="text" />
          <div className="rectangle-parent3">
            <div className="frame-child6" />
            <img className="horn-icon" alt="" src="/horn.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

AccountDetails.propTypes = {
  className: PropTypes.string,
};

export default AccountDetails;
