import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({
  className = "",
  conLeche,
  addAction,
  propPadding,
  propMinWidth,
}) => {
  const addCartButtonStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const addActionStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`caf-fro-con-leche-parent ${className}`}>
      <b className="caf-fro-con-leche-container">
        <p className="caf-fro1">Café Frío</p>
        <p className="con-leche">{conLeche}</p>
      </b>
      <div className="add-cart-button" style={addCartButtonStyle}>
        <div className="add-action" style={addActionStyle}>
          {addAction}
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  conLeche: PropTypes.string,
  addAction: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default FrameComponent2;
