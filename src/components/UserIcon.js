import { useMemo } from "react";
import PropTypes from "prop-types";
import "./UserIcon.css";

const UserIcon = ({
  className = "",
  user1,
  propHeight,
  propWidth,
  propPosition,
  propTop,
  propLeft,
}) => {
  const userIconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propHeight, propWidth, propPosition, propTop, propLeft]);

  return (
    <img
      className={`user-icon ${className}`}
      loading="lazy"
      alt=""
      src={user1}
      style={userIconStyle}
    />
  );
};

UserIcon.propTypes = {
  className: PropTypes.string,
  user1: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default UserIcon;
