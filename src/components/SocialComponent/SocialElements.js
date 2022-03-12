import { Col, Container } from "react-bootstrap";
import styled from "styled-components";

export const SocialContainer = styled(Container)`
  background-color: #f5f8ff;
  margin-top: 1rem;
`;

export const SocialTitle = styled.p`
  text-align: center;
  font-family: "DM Serif Text";
  margin-top: 3rem;
  font-size: 44px;
  margin-bottom: 2.5rem;
  line-height: 56px;
`;

export const SocialCol = styled(Col)`
  text-align: center;
  padding: 10px;
  position: relative;
  z-index: 2;
`;

export const SocialImg = styled.img`
  width: 100%;
`;

export const SocialText = styled.p`
  text-align: left;
  margin-top: 10px;
  font-family: "DM Sans";
  font-size: 20px;
  line-height: 34px;
`;

export const SocialButton = styled.button`
  margin-top: 2.5rem;
  width: 15rem;
  padding: 10px;
  border-radius: 2rem;
  border: none;
  background-color: #ef8094;
  color: #fff;
  font-size: 12px;
  letter-spacing: 1.5px;
  margin-bottom: 2rem;
`;

export const Squig1 = styled.img`
  position: absolute;
  width: 8rem;
  top: 450%;
  right: 22%;
  z-index: 1;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const Squig2 = styled.img`
  position: absolute;
  width: 8rem;
  top: 400%;
  left: 20%;
  z-index: 1;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;
