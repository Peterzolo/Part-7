import React from "react";
import { Link } from "react-router-dom";

import "../../components/menu/Menu.css";

const Menu = () => {
  return (
    <div className="menu-wrap">
      <div className="menu-item">
        <Link to={"/"} className="item">
          Anecdotes
        </Link>
      </div>
      <div className="menu-item">
        <Link to={"/create"} className="item">
          Create New
        </Link>
      </div>
      <div className="menu-item">
        <Link to={"/about"} className="item">
          About
        </Link>
      </div>
    </div>
  );
};

export default Menu;
