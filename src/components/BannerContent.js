import PropTypes from "prop-types";
import "./BannerContent.css";

const BannerContent = ({ className = "" }) => {
  return (
    <div className={`banner-content ${className}`}>
      <div className="banner-image-placeholder" />
      <b className="loin-of-vension2">{`Loin of Vension Black Pudding Pure & Jerk`}</b>
      <div className="title-separator">$12.5</div>
      <div className="plates-available1">11 Plates Available</div>
    </div>
  );
};

BannerContent.propTypes = {
  className: PropTypes.string,
};

export default BannerContent;
