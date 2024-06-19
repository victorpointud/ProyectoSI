import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent = ({
  className = "",
  whatsAppImage20210523At15,
  redBull,
  propPadding,
  propPadding1,
  propMinWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const redBullStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`wrapper-whatsapp-image-2021-05-parent10 ${className}`}
      style={frameDivStyle}
    >
      <div className="wrapper-whatsapp-image-2021-0518">
        <img
          className="whatsapp-image-2021-05-23-at-131"
          loading="lazy"
          alt=""
          src={whatsAppImage20210523At15}
        />
      </div>
      <div className="frame-wrapper31" style={frameDiv1Style}>
        <div className="redbull-parent">
          <b className="redbull1" style={redBullStyle}>
            {redBull}
          </b>
          <div className="bebida-energizante-sabor-container">
            <p className="bebida-energizante-sabor">{`Bebida energizante sabor `}</p>
            <p className="sanda">Sandía</p>
          </div>
          <div className="energy-quantity-details">
            <div className="energy-quantity-label">$4</div>
            <div className="qty-110">Qty: 1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  whatsAppImage20210523At15: PropTypes.string,
  redBull: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propPadding1: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default FrameComponent;
