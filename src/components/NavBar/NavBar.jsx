import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top p-4 fw-bold text-uppercase">
      <div className="container">
        <NavLink className="navbar-brand fs-2 fw-bold text-white" to="/">
          start framework
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mx-3">
            <li className="nav-item mx-2">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                about
              </NavLink>
            </li>

            <li className="nav-item mx-2">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                portfolio
              </NavLink>
            </li>

            <li className="nav-item mx-2">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
