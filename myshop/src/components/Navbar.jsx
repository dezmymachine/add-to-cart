import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-evenly items-center">
      <Link to="/">Home</Link>
      <Link to="/basket">Cart</Link>
    </div>
  );
};

export default Navbar;
