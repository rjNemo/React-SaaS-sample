import React, { useState } from "react";

import NavbarContainer from "./NavbarContainer";

import { Link } from "./../util/router.js";
import { useAuth } from "./../util/auth.js";
import * as ROUTES from "../global/routes";

const Navbar = ({ spaced, color, logo }) => {
  const auth = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer spaced={spaced} color={color}>
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to={ROUTES.HOME}>
              <img className="image" src={logo} alt="Logo" />
            </Link>
          </div>
          <div
            className={"navbar-burger burger" + (menuOpen ? " is-active" : "")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={"navbar-menu" + (menuOpen ? " is-active" : "")}>
          <div className="navbar-end">
            {auth.user && (
              <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link" to={ROUTES.HOME}>
                  Mon compte
                </Link>
                <div className="navbar-dropdown is-boxed">
                  <Link className="navbar-item" to={ROUTES.DASHBOARD}>
                    Dashboard
                  </Link>
                  <Link
                    className="navbar-item"
                    to={ROUTES.SIGNOUT}
                    onClick={(e) => {
                      e.preventDefault();
                      auth.signout();
                    }}
                  >
                    Déconnexion
                  </Link>
                </div>
              </div>
            )}

            {!auth.user && (
              <Link className="navbar-item" to={ROUTES.SIGNIN}>
                Connexion
              </Link>
            )}
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
