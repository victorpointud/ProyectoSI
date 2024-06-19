import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Component.css";

const Component = ({
  className = "",
  propPosition,
  propTop,
  propLeft,
  propWidth,
  propHeight,
}) => {
  const component1Style = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
      height: propHeight,
    };
  }, [propPosition, propTop, propLeft, propWidth, propHeight]);

  return (
    <div className={`component-1 ${className}`} style={component1Style}>
      <div className="component-1-child" />
      <div className="parent4">
        <b className="b">
          <p className="p2">+</p>
          <p className="p3">-</p>
        </b>
        <div className="separator-wrapper">
          <div className="separator6" />
        </div>
      </div>
      <div className="label">
        <div className="price">1</div>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
};

export default Component;
