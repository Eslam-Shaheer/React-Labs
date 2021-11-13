import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class header extends Component {
  render() {
    return (
      <div>
        <div className="mb-3">
          <nav className="navbar navbar-expand-lg navbar-light text-light bg-secondary">
            <div className="container">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    activeclassname="active"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink
                    className="nav-link "
                    activeclassname="active"
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
