import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/orders">Orders</Link>
    </nav>
  );
};

export default Navbar;
