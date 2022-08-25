
import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <>
      <div id="main-container">
        <header>
          <div className="nav-bar">
            <div className="nav-bar-links">
              <ul className="nav-bar-links-list"></ul>
            </div>
            <div className="nav-bar-icons">
              <ul className="nav-bar-icons-list"></ul>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
