import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaSnapchatSquare,
  FaInstagram,
  FaFacebookSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import {
  CopyrightCol,
  FooterContainer,
  FooterHr,
  Heading,
  Icon,
  LinkCol,
  LinkRow,
  Logo,
  SocialCol,
  Subheading,
  TermsCol,
} from "./FooterElements";
import logo from "../../images/Logo_Footer.png";

const Footer = () => {
  return (
    <>
      <FooterContainer fluid>
        <Row>
          <Col md={6}>
            <Logo src={logo} />
          </Col>
          <SocialCol md={6}>
            <Icon>
              <FaInstagram />
            </Icon>
            <Icon>
              <FaFacebookSquare />
            </Icon>
            <Icon>
              <FaTwitterSquare />
            </Icon>
            <Icon>
              <FaSnapchatSquare />
            </Icon>
          </SocialCol>
        </Row>
        <LinkRow>
          <Col lg={3} xs={6}>
            <Heading>UPBOX</Heading>
            <Subheading>Upbox Bag</Subheading>
            <Subheading>Upbox Box Platinum</Subheading>
            <Subheading>Upbox Box VIP</Subheading>
            <Subheading>Deals</Subheading>
            <Subheading>Seasonal Items</Subheading>
            <Subheading>Upbox Promise</Subheading>
          </Col>
          <Col lg={3} xs={6}>
            <Heading>Find Us On</Heading>
            <Subheading>Instagram</Subheading>
            <Subheading>Facebook</Subheading>
            <Subheading>TikTok </Subheading>
            <Subheading>SnapChat</Subheading>
            <Subheading>Twitter</Subheading>
          </Col>
          <LinkCol lg={3} xs={6}>
            <Heading>Product</Heading>
            <Subheading>Get the App</Subheading>
            <Subheading>Loyality Program</Subheading>
            <Subheading>Affiliates</Subheading>
            <Subheading>Press</Subheading>
          </LinkCol>
          <LinkCol lg={3} xs={6}>
            <Heading>Help</Heading>
            <Subheading>Returns</Subheading>
            <Subheading>FAQ</Subheading>
            <Subheading>Contact</Subheading>
            <Subheading>Community</Subheading>
            <Subheading>Videos</Subheading>
          </LinkCol>
        </LinkRow>
        <FooterHr />
        <Row>
          <CopyrightCol lg={9}>
            © 2020 Quest AI. Upbox is a Sample Project and open source design
            project free for personal and commercial use.
          </CopyrightCol>
          <TermsCol lg={1} md={3}>
            Terms
          </TermsCol>
          <TermsCol lg={2} md={3}>
            Privacy Policy
          </TermsCol>
        </Row>
      </FooterContainer>
    </>
  );
};

export default Footer;
