import React from "react";
import ReactLogo from "../assets/react-logo.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="header">
          <img src={ReactLogo} alt="test" width={40} />
          <h1 className="big-font">ReactFacts</h1>
        </div>
        <p>React Course - Project 1</p>
      </nav>
    </>
  );
};

export default Navbar;
