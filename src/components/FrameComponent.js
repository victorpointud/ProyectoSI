import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`frame-parent9 ${className}`}>
      <div className="frame-parent10">
        <div className="frame-wrapper6">
          <div className="frame-parent11">
            <div className="admin-wrapper">
              <a className="admin">Admin</a>
            </div>
            <div className="iconswith-off-parent">
              <img
                className="iconswith-off"
                loading="lazy"
                alt=""
                src="/iconswithoff@2x.png"
              />
              <div className="user-icon-background" />
            </div>
            <div className="cliente-wrapper">
              <b className="cliente">Cliente</b>
            </div>
          </div>
        </div>
        <div className="nombre-de-usuario">
          Nombre de Usuario / Carnet o correo institucional
        </div>
      </div>
      <div className="user-field-background" />
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
