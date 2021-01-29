import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  return (
    <div>
      <nav className="nav">
        <ul className="list">
          <li className="list-item">
            <NavLink to="home" className="nav__icon">
              <i class="fas fa-home fa-2x"></i>
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="search" className="nav__icon">
              <i class="fas fa-search fa-2x"></i>
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="add" className="nav__icon">
              <i class="fas fa-plus-circle fa-2x"></i>
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="like" className="nav__icon">
              <i class="fas fa-heart fa-2x"></i>
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="profile" className="nav__icon">
              <i class="fas fa-user-alt fa-2x"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
