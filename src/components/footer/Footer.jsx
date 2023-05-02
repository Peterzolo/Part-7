import React from "react";
import "../../components/footer/Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrap">
      Anecdote app for <a href="https://fullstackopen.com/">Full Stack Open</a>.
      See{" "}
      <a href="https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js">
        https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js
      </a>{" "}
      for the source code.
    </div>
  );
};

export default Footer;
