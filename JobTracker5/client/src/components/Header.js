import React, { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { logout } from "../modules/authManager";

export default function Header({ isLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div class="bg-white bg-gradient text-light">
      <Navbar color="blue" light expand="md">
        <NavbarBrand tag={RRNavLink} className="app_Name text-dark" to="/">
          Job Tracker
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* When isLoggedIn === true, we will render the Home link */}
            {isLoggedIn && (
              <NavbarBrand>
                <NavLink className="Home text-dark" tag={RRNavLink} to="/">
                  Home
                </NavLink>
              </NavbarBrand>
            )}
          </Nav>
          <Nav className="mr-auto" navbar>
            {/* When isLoggedIn === true, we will render the Home link */}
            {isLoggedIn && (
              <NavbarBrand>
                <NavLink className="text-dark" tag={RRNavLink} to="/roles">
                  Roles
                </NavLink>
              </NavbarBrand>
            )}
          </Nav>
          <Nav navbar>
            {isLoggedIn && (
              <>
                <NavbarBrand>
                  <NavLink
                    onClick={logout}
                    tag={RRNavLink}
                    className="login text-dark"
                    to="/login"
                  >
                    Logout
                  </NavLink>
                </NavbarBrand>
              </>
            )}
            {!isLoggedIn && (
              <>
                <NavItem>
                  <NavLink className="text-light" tag={RRNavLink} to="/login">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/register">
                    Register
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
