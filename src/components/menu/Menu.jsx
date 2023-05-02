import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Link to={"/"}>Anecdotes</Link>

      <Link to={"/create"}>Create New</Link>
      <Link to={"/create"}>Create New</Link>
      <Link to={"/about"}>About</Link>
    </div>
  );
};

export default Menu;
