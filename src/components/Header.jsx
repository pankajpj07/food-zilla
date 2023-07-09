import React from "react";
import Title from "./Title";

export default Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contract</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
