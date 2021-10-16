import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand py-4 navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Insert Team Name Here
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/problem" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/problem">
                  Problem
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/solution" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/solution">
                  Solution
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/game" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/game">
                  Game
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/About" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/About">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
