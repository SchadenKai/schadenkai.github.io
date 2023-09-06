import { Component, useEffect, useState } from "react";
import { navLinks } from "../../data";
import "./index.css"

export default function Navbar() {
  return (
    <nav
      style={{ borderRadius: "0px" }}
      className="navbar w-100 glass1 px-4 justify-content-between align-items-center"
    >
      <a href="#home" className="navbar-brand p-2 rounded">
        Kai | Portfolio
      </a>
      <div className="d-flex align-item-center">
          <ul className="navbar-nav d-flex flex-row">
            {navLinks.map((link) => {
              return (
                <li key={link.name} className="nav-item text-center">
                  <a
                    style={{ fontSize: "1.2rem" }}
                    className="navbar-link px-3 py-2 rounded"
                    href={link.url}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
      </div>
    </nav>
  );
}
