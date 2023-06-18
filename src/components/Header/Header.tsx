import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      Header - includes login logoff / logo / navbar
      <Link to="/">Home</Link>
      <Link to="/starships">starships</Link>
    </div>
  );
};

export default Header;
