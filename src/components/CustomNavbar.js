import React from "react";
// import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../components/CustomNavbarStyle.css";

const CustomNavbar = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        bg="dark"
        variant="dark"
        expand="lg"
        style={{
          backgroundImage: "linear-gradient(180deg, #D8381A 3%, #BF0B5E 91%)",
          height: 60,
        }}
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #D8381A 3%, #BF0B5E 91%)",
              }}
            >
              <Nav.Link className="navItem" href="/">
                Home
              </Nav.Link>
              <NavDropdown title="About Us" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/aboutus/introduction">
                  Introduction
                </NavDropdown.Item>
                <NavDropdown.Item href="/aboutus/history">
                  History
                </NavDropdown.Item>
                <NavDropdown.Item href="/aboutus/vision&mission">
                  Vision & Mission
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Organiztional Structure"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="/organizational-structure">
                  Executive committee
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Publication" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/publication/magzines">
                  {" "}
                  Magzines{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/publication/question-papers">
                  Question papers for schools
                </NavDropdown.Item>
                <NavDropdown
                  title="Books"
                  id="collasible-nav-dropdown"
                  style={{ padding: "4px 8px" }}
                >
                  <NavDropdown.Item href="/publication/prakashan-books">
                    Prakashan Books
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/publication/mbsm-books">
                    MBSM
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/publication/bsm-books">
                    BSM
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Item href="/research-papers">
                  Research Papers
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="navItem" href="/activity">
                Activity
              </Nav.Link>
              <Nav.Link className="navItem" href="/gallery/photogallery">
                Photo Gallery
              </Nav.Link>
              <Nav.Link className="navItem" href="/join-mbsm">
                Join MBSM
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
