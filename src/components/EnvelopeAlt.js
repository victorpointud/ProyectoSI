import PropTypes from "prop-types";
import "./EnvelopeAlt.css";

const EnvelopeAlt = ({ className = "" }) => {
  return (
    <div className={`envelope-alt ${className}`}>
      <img className="path-2-icon" loading="lazy" alt="" src="/path-2.svg" />
      <div className="icon-background" />
    </div>
  );
};

EnvelopeAlt.propTypes = {
  className: PropTypes.string,
};

export default EnvelopeAlt;
