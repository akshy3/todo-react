import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="Header">
      <div className="logo">
        <h1>todo</h1>
      </div>
      <div className="line-container">
        <div className="line"></div>
      </div>
    </div>
  );
}

export default Header;
