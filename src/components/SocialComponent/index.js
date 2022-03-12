import React from "react";
import { Row } from "react-bootstrap";
import social1 from "../../images/social1.png";
import social2 from "../../images/social2.png";
import social3 from "../../images/social3.png";
import social4 from "../../images/social4.png";
import {
  SocialButton,
  SocialCol,
  SocialContainer,
  SocialImg,
  SocialText,
  SocialTitle,
  Squig1,
  Squig2,
} from "./SocialElements";
import squig1 from "../../images/squig.png";
import squig2 from "../../images/squig1.png";

const SocialPost = () => {
  return (
    <>
      <SocialContainer fluid>
        <Row>
          <SocialTitle>Social Posts</SocialTitle>
        </Row>
        <Row style={{ padding: "20px" }}>
          <SocialCol lg={3} md={6} sm={12}>
            <SocialImg src={social1} />
            <SocialText>How to rock the lip look that turns heads</SocialText>
          </SocialCol>
          <Squig1 src={squig1} />
          <SocialCol lg={3} md={6} sm={12}>
            <SocialImg src={social2} />
            <SocialText>Find the perfect shade for the season</SocialText>
          </SocialCol>
          <SocialCol lg={3} md={6} sm={12}>
            <SocialImg src={social3} />
            <SocialText>The 5 eye shadow secrets you never knew</SocialText>
          </SocialCol>
          <Squig2 src={squig2} />
          <SocialCol lg={3} md={6} sm={12}>
            <SocialImg src={social4} />
            <SocialText>The pro-tips for at home hair dying</SocialText>
          </SocialCol>
        </Row>
        <Row>
          <div style={{ textAlign: "center" }}>
            <SocialButton>FOLLOW US ON INSTAGRAM</SocialButton>
          </div>
        </Row>
      </SocialContainer>
    </>
  );
};

export default SocialPost;
