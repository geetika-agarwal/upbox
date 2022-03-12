import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const FooterContainer = styled(Container)`
  background-color: #eeeeee;
  margin: 1.5rem 1.5rem;
  width: 96%;
  border-radius: 5px;
  border: 2px solid #c4c4c4;

  @media screen and (max-width: 1000px) {
    width: 95%;
  }

  @media screen and (max-width: 640px) {
    width: 93%;
  }

  @media screen and (max-width: 465px) {
    width: 88%;
  }
`;

export const Logo = styled.img`
  width: 8rem;
  margin-top: 2rem;
  margin-left: 4rem;
  margin-bottom: 2rem;
`;

export const SocialCol = styled(Col)`
  text-align: right;
  margin-top: 2rem;
  padding-right: 4rem;

  @media screen and (max-width: 767.5px) {
    display: none;
  }
`;

export const Icon = styled.span`
  margin: 1rem;
  font-size: 1.5rem;
`;

export const LinkRow = styled(Row)`
  margin: 1rem 3rem;

  @media screen and (max-width: 991.5px) {
    margin: 1rem;
  }
`;

export const LinkCol = styled(Col)`
  @media screen and (max-width: 991.5px) {
    margin-top: 2rem;
  }
`;

export const Heading = styled.p`
  font-family: "DM Sans";
  font-size: 20px;
  font-weight: bold;
  line-height: 26.04px;
  letter-spacing: 2px;
`;

export const Subheading = styled.p`
  padding-left: 3px;
  font-size: 14px;
  font-weight: 600;
  font-family: "DM Sans";
  letter-spacing: 2px;
`;

export const FooterHr = styled.hr`
  width: 100%
  padding: 0;
  margin: 0;
`;

export const CopyrightCol = styled(Col)`
  margin: 1rem 0 1rem 0rem;
  font-size: 14px;
  text-align: center;
  font-family: "DM Sans";
  font-weight: 600;
  order: 1;

  @media screen and (max-width: 780px) {
    order: 2;
  }
`;

export const TermsCol = styled(Col)`
  margin: 1rem 0 1rem 0rem;
  font-size: 14px;
  text-align: center;
  font-family: "DM Sans";
  font-weight: 600;
  order: 2;

  @media screen and (max-width: 780px) {
    order: 1;
    text-align: left;
    padding-left: 2rem;
  }
`;
