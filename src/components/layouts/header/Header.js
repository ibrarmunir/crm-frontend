import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "assets/images/logo.png";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const logout = (event) => {
    // event.stopPropagation();
    history.push("/");
  };

  return (
    <Navbar collapseOnSelect bg="info" expand="lg">
      <Navbar.Brand>
        <img src={logo} alt="CRM Logo" width={60} height={60} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto links">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
          <Link className="nav-link" to="/tickets">
            Tickets
          </Link>
          <Nav.Link onClick={logout}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
