import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import topbar from "../../images/topbar.svg";
import {
  Navbarbrand,
  NavBarImage,
  NavBarTitle,
  NavButton,
  Navlink,
  ReactNavbar,
  Topbar,
} from "./NavBarElements";
import logo from "../../images/navbar-logo.jpg";
import { FaAngleRight } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <ReactNavbar collapseOnSelect expand="md" fixed="top">
        <Topbar src={topbar} alt="Topbar" fixed="top" />
        <Container fluid style={{ background: "#fff" }}>
          <Navbarbrand>
            <NavBarImage src={logo} />
            <NavBarTitle className="navbar-brand">UPBOX</NavBarTitle>
          </Navbarbrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="justify-content-end">
              <Navlink href="#" className="navbar-brand">
                THIS MONTH
              </Navlink>
              <Navlink href="#" className="navbar-brand">
                SKIN
              </Navlink>
              <Navlink href="#" className="navbar-brand">
                HAIR
              </Navlink>
              <Navlink href="#" className="navbar-brand">
                BATH
              </Navlink>
              <Navlink href="#" className="navbar-brand">
                SALE
              </Navlink>
              <NavButton>
                Log in <FaAngleRight />
              </NavButton>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </ReactNavbar>
    </>
  );
};

export default NavBar;
