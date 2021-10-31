import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "assets/logo.png";

const Header = () => {
  return (
    <Navbar collapseOnSelect bg="info" expand="lg">
      <Navbar.Brand>
        <img src={logo} alt="CRM Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Dashboard</Nav.Link>
          <Nav.Link href="#link">Tickets</Nav.Link>
          <Nav.Link href="#link">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
