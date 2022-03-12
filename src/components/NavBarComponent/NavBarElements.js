import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

export const Topbar = styled.img`
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  z-index: 1;
  top: 0px;
`;

export const ReactNavbar = styled(Navbar)`
  padding: 0;
  padding-top: 2px;
`;

export const Navbarbrand = styled(Navbar.Brand)``;

export const NavBarImage = styled.img`
  width: 65px;
  height: 54px;
  margin-left: 55px;
  @media screen and (max-width: 840px) {
    margin-left: 20px;
  }

`;

export const NavBarTitle = styled.p`
  display: inline-block;
  font-size: 22px;
  margin: 0px 0 0 10px;
  letter-spacing: 0.28em;
  font-weight: 900;
  color: #000000;
`;

export const Navlink = styled(Nav.Link)`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.16em;
  font-style: normal;
  color: #000;
  margin: 0 10px;
  white-space: nowrap;
  @media screen and (max-width: 840px) {
    margin: 0 3px;
  }
`;

export const NavButton = styled.button`
  width: 7rem;
  margin 0 30px;
  height: 2.3rem;
  background-color: #fff;
  border-radius: 2rem;
  padding: 0 10px;
  text-align: center;

  @media screen and (max-width: 840px) {
      margin: 0 ;
  }
`;
