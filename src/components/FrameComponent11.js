import PropTypes from "prop-types";
import "./FrameComponent11.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`rectangle-parent34 ${className}`}>
      <div className="frame-child51" />
      <div className="content-details">
        <div className="nested-content">
          <div className="deep-nested">
            <img
              className="screenshot-2024-04-29-at-7155"
              loading="lazy"
              alt=""
              src="/screenshot-20240429-at-715-1@2x.png"
            />
          </div>
          <a className="unimet-store-identity-container5">
            <p className="unimet-store5">Unimet Store</p>
            <p className="identity-coffee5">{`Identity Coffee & Bar`}</p>
          </a>
        </div>
      </div>
      <div className="navigation3">
        <div className="menu2">
          <div className="menu-button">
            <img
              className="home-icon1"
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
            <div className="home-label">
              <div className="inicio5">INICIO</div>
            </div>
          </div>
        </div>
        <div className="contact1">
          <div className="contact-button1">
            <div className="contact-label1">
              <img
                className="contact-label-child"
                loading="lazy"
                alt=""
                src="/group-7.svg"
              />
            </div>
            <div className="contacto4">CONTACTO</div>
          </div>
        </div>
        <div className="product">
          <div className="product-button">
            <div className="product-label1">
              <div className="product-icon3">
                <img
                  className="product-icon4"
                  loading="lazy"
                  alt=""
                  src="/vector-41.svg"
                />
              </div>
              <div className="productos6">PRODUCTOS</div>
            </div>
          </div>
          <div className="sale">
            <div className="sales-label">
              <img
                className="sale-icon"
                loading="lazy"
                alt=""
                src="/vector-22.svg"
              />
            </div>
            <img className="sale-child" alt="" src="/rectangle-6.svg" />
            <div className="ventas3">VENTAS</div>
          </div>
          <div className="order">
            <div className="order-button1">
              <img
                className="order-button-child"
                loading="lazy"
                alt=""
                src="/group-5.svg"
              />
              <div className="order-label">
                <div className="rdenes3">ÓRDENES</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
