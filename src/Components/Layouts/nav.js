import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './nav.css';

const Navigation = () => {
  return (
    <Navbar bg="dark" expand="lg" >
      <Navbar.Brand href="#home">A Plus Infology</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink className="nav-link" to="/home">Home</NavLink>
          <NavLink className="nav-link" to="/aboutUs">About</NavLink>
          <NavLink className="nav-link" to="/contactUs">Contact Us</NavLink>
          <NavLink className="nav-link" to="/service">Services</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
