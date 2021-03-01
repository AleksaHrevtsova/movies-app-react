import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/movies">
              movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
