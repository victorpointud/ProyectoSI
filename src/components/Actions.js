import PropTypes from "prop-types";
import "./Actions.css";

const Actions = ({ className = "" }) => {
  return (
    <div className={`actions1 ${className}`}>
      <div className="create-button">
        <button className="frame">
          <b className="crear">CREAR</b>
        </button>
      </div>
      <div className="separator">
        <b className="or1">OR</b>
      </div>
      <img
        className="divider-icon2"
        loading="lazy"
        alt=""
        src="/rectangle-75@2x.png"
      />
    </div>
  );
};

Actions.propTypes = {
  className: PropTypes.string,
};

export default Actions;
