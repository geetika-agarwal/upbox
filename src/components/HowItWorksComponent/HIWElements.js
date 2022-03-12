import { Col } from "react-bootstrap";
import styled from "styled-components";
import img2 from "../../images/img2.jpg";
import img2sm from "../../images/img2-sm.jpg";

export const HIWMainTitle = styled.h1`
  text-align: center;
  font-family: "DM Serif Text";
  font-size: 48px;
  line-height: 56px;
  vertical-align: top;
  margin: 5rem 0 0 0;
`;

export const HIWCol = styled(Col)``;

export const HIWTitle = styled.p`
  font-family: "DM Serif Text";
  font-size: 36px;
  margin-right: 10rem;
  line-height: 44px;
  text-align: left;

  @media screen and (max-width: 993px) {
    margin-right: 2rem;
  }
`;

export const HIWText = styled.p`
  font-family: "DM Sans";
  text-align: left;
  font-size: 18px;
  margin-right: 16rem;

  @media screen and (max-width: 993px) {
    margin-right: 2rem;
  }
`;

export const HIWImage = styled.img`
  width: 24rem;
  position: relative;
  bottom: 40px;
  float: right;

  @media screen and (max-width: 767.5px) {
    margin: auto;
    float: left;
    position: relative;
    bottom: 0;
    right: 0;
    width: 100%;
  }
`;

export const HIWImg2 = styled.div`
  position: relative;
  bottom: 8rem;
  right: 5rem;

  @media screen and (max-width: 767.5px) {
    margin: auto;
    float: left;
    position: relative;
    bottom: 0;
    right: 0;
  }
`;

export const Img2 = styled.img`
  content: url(${img2});
  width: 30rem;

  @media screen and (max-width: 830px) {
    width: 25rem;
  }

  @media screen and (max-width: 768px) {
    content: url(${img2sm});
    width: 100%;
  }
`;

export const HIWTitle2 = styled.p`
  font-family: "DM Serif Text";
  text-align: left;
  font-size: 36px;
  margin-right: 10rem;

  @media screen and (max-width: 993px) {
    margin-right: -2rem;
  }

  @media screen and (max-width: 580px) {
    margin-right: 0;
  }
`;

export const HIWText2 = styled.p`
  font-family: "DM Sans";
  text-align: left;
  font-size: 18px;
  margin-right: 5rem;

  @media screen and (max-width: 993px) {
    margin-right: -2rem;
  }
  @media screen and (max-width: 580px) {
    margin-right: 0;
  }
`;

export const HIWImage3 = styled.img`
  width: 20rem;
  float: right;
  position: relative;
  right: 7rem;
  bottom: 10rem;

  @media screen and (max-width: 767.5px) {
    margin: auto;
    float: left;
    position: relative;
    bottom: 0;
    right: 0;
  }

  @media screen and (max-width: 320px) {
    width: 17rem;
  }
`;

export const HIWTitle3 = styled.p`
  position: relative;
  bottom: 5rem;
  right: 10rem;
  font-size: 36px;
  font-family: "DM Serif Text";
  line-height: 44px;
  text-align: left;

  @media screen and (max-width: 993px) {
    margin-right: 0rem;
    position: relative;
    right: 5rem;
  }

  @media screen and (max-width: 767.5px) {
    margin: auto;
    float: left;
    position: relative;
    bottom: 0;
    right: 0;
  }
`;

export const HIWText3 = styled.p`
  text-align: left;
  position: relative;
  bottom: 5rem;
  right: 10rem;
  font-size: 18px;
  font-family: "DM Sans";
  line-height: 23.44px;
  margin-right: 6rem;

  @media screen and (max-width: 993px) {
    margin-right: 0rem;
    position: relative;
    right: 5rem;
  }

  @media screen and (max-width: 767.5px) {
    margin: auto;
    float: left;
    position: relative;
    bottom: 0;
    right: 0;
  }
`;

export const HIWButton = styled.button`
  position: relative;
  bottom: 5rem;
  padding: 10px;
  width: 13rem;
  background-color: #fff;
  border-radius: 2rem;
  border: 3px solid #ef8094;
  color: #000;
  letter-spacing: 1.5px;
  font-family: "DM Sans";
  font-size: 12px;

  @media screen and (max-width: 767.5px) {
    margin: 2rem auto;
    position: relative;
    bottom: 0;
    right: 0;
  }
`;
