import FrameComponent from "./FrameComponent";
import "./Login.css";

const Login = () => {
  return (
    <form className="inicio-sesin">
      <div className="inicio-sesin-child" />
      <div className="inicio-sesin-inner">
        <div className="rectangle-parent">
          <div className="frame-child" />
          <h1 className="iniciar-sesin">Iniciar Sesión</h1>
        </div>
      </div>
      <FrameComponent />
      <section className="password-field">
        <div className="contrasea-parent">
          <input className="contrasea" placeholder="Contraseña" type="text" />
          <div className="password-field-background" />
        </div>
        <div className="remember-checkbox-parent">
          <div className="remember-checkbox" />
          <div className="recordarme">Recordarme</div>
        </div>
      </section>
      <section className="frame-section">
        <div className="frame-parent">
          <div className="primary-button-wrapper">
            <button className="primary-button">
              <b className="ingresar">INGRESAR</b>
            </button>
          </div>
          <div className="or-wrapper">
            <b className="or">OR</b>
          </div>
          <div className="image-4-wrapper">
            <img
              className="image-4-icon"
              loading="lazy"
              alt=""
              src="/image-4@2x.png"
            />
          </div>
          <div className="no-tienes-cuenta-container">
            <span className="no-tienes">{`¿No tienes `}</span>
            <b className="cuenta">cuenta</b>
            <span className="span">?</span>
          </div>
        </div>
      </section>
      <div className="primary-button-container">
        <button className="primary-button1">
          <b className="registro">REGISTRO</b>
        </button>
      </div>
    </form>
  );
};

export default Login;
