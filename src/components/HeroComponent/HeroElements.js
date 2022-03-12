import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const HeroContainer = styled(Container)`
  background-color: #f5f8ff;
  height: 100%;
`;

export const HeroRow = styled(Row)`
  height: 32rem;

  @media screen and (max-width: 767px) {
    height: 100%;
  }
`;

export const HeroCol = styled(Col)``;

export const HeroTitle = styled.h1`
  margin-top: 8rem;
  margin-left: 4rem;
  font-weight: 900;
  font-size: 48px;
  line-height: 56px;

  @media screen and (max-width: 965px) {
    margin-top: 5rem;
    font-size: 40px;
    margin-left: 1rem;
    margin-right: 0;
  }
`;

export const HeroText = styled.h6`
  font-family: "DM Sans";
  margin-left: 4rem;
  margin-top: 1.1rem;
  margin-right: 3rem;
  font-size: 18px;
  line-height: 23px;

  @media screen and (max-width: 965px) {
    font-size: 14px;
    margin-left: 1.5rem;
    margin-top: 0.5rem;
  }
`;

export const HeroButton = styled.button`
  margin-top: 2rem;
  margin-left: 4rem;
  background-color: #fff;
  border-radius: 2rem;
  text-align: center;
  color: #000;
  letter-spacing: 2px;
  width: 9rem;
  height: 3rem;
  border: solid 4px #ef8094;
  font-weight: bold;
  font-size: 13px;
  font-family: "DM Sans";
`;

export const HeroMainImg = styled.img`
  width: 45rem;
  position: relative;
  float: right;
  left: 0.75rem;
  margin-top: 5rem;
  top: 0.875rem;
  z-index: 2;

  @media screen and (max-width: 975px) {
    width: 40rem;
    top: 3.6rem;
  }

  @media screen and (max-width: 868px) {
    width: 35rem;
    top: 6.5rem;
  }

  @media screen and (max-width: 767.5px) {
    margin-top: 1rem;
    top: 0rem;
    position: normal;
    float: left;
    width: 100%;
    background-color: #f5f8ff;
  }
`;

export const HeroMarker = styled.img`
  position: absolute;
  overflow-x: hidden;
  width: 15rem;
  z-index: 0;
  left: 80%;
  top: 5rem;

  @media screen and (max-width: 1196px) {
    left: 75%;
  }

  @media screen and (max-width: 975px) {
    display: none;
  }
`;
