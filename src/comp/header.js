import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import "../theme.css";
// LEVEL2
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="myheader">
      <header className="hide-when-mobile sahar">
        <h1>
          <Link to="/">ATLASY</Link>
        </h1>
        <button
          onClick={() => {
            toggleTheme(theme === "Light" ? "Dark" : "Light");
          }}
          className="theme-btn"
        >
          {theme}
        </button>

        <ul className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="/product">
            PRODUCTS

            </NavLink>
            <ul className="sub-ul">
              <li>
                <a href="">Bitbucket

</a>
              </li>
              <li>
                <a href="">Trello

</a>
              </li>
              <li>
                <a href="">View all products



</a>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/Resource">
            RESOURCES
            </NavLink>
            <ul className="sub-ul">
              <li>
                <a href="">Technical Support

</a>
              </li>
              <li>
                <a href="">Marketplace

</a>
              </li>
              <li className="Our-projects">
                <a href="">mini projects&nbsp; + </a>
                <ul className="sub-sub-ul">
                  <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/Expand">
            EXPAND & LEARN

            </NavLink>
            <ul className="sub-ul sub-of-js">
              <li>
                <a href="">coming soon🔥</a>
              </li>
            </ul>
          </li>
        </ul>
      </header>
</div>
  )}

export default Header;
