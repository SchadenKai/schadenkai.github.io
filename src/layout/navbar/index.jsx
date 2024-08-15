import { Component, useEffect, useState } from "react";
import { navLinks } from "../../data";
import "./index.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavbarLayout() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary w-100 px-4">
      <Navbar.Brand className="text-white" href="#home">
        Kai Noah | Portfolio
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto flex gap-3">
          {navLinks.map((data) => (
            <Nav.Link key={data.name} href={data.url}>
              {data.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
