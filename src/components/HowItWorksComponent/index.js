import React from "react";
import { Container, Row } from "react-bootstrap";
import underline from "../../images/underline.png";
import { PYPMarker } from "../PickYourPlanComponent/PYPElements";
import img1 from "../../images/img1.png";
import img3 from "../../images/img3.png";
import { FaAngleRight } from "react-icons/fa";
import {
  HIWButton,
  HIWCol,
  HIWImage,
  HIWImage3,
  HIWImg2,
  HIWMainTitle,
  HIWText,
  HIWText2,
  HIWText3,
  HIWTitle,
  HIWTitle2,
  HIWTitle3,
  Img2,
} from "./HIWElements";

const HowItWorks = () => {
  return (
    <>
      <Container>
        <Row>
          <HIWMainTitle className="hero-title">How it works?</HIWMainTitle>
          <PYPMarker src={underline} />
        </Row>
        <Row>
          <HIWCol md={5}>
            <HIWImage src={img1} />
          </HIWCol>
          <HIWCol md={7}>
            <HIWTitle>Setup your profile & preferences</HIWTitle>
            <HIWText>
              Once you create an account, you can start to tell us your likes
              and dislikes so we can tailor the experience just for you.
            </HIWText>
          </HIWCol>
        </Row>
        <Row>
          <HIWCol md={6}></HIWCol>
          <HIWCol md={6}>
            <HIWImg2>
              <Img2 />
              <HIWTitle2>Review your custom box</HIWTitle2>
              <HIWText2>
                Once we get to know you, we will show you the box we’ve crafted.
                This is your chance to approve it before we ship it to your
                house.
              </HIWText2>
            </HIWImg2>
          </HIWCol>
        </Row>
        <Row>
          <HIWCol md={6}>
            <HIWImage3 src={img3} />
          </HIWCol>
          <HIWCol md={6}>
            <HIWTitle3>Try it on at home</HIWTitle3>
            <HIWText3>
              Your box will arrive within 3-5 days (usually sooner) and you get
              the joy to unbox your Upbox. Try it all on and send back whatever
              you’re not in love with.
            </HIWText3>
          </HIWCol>
        </Row>
        <Row>
          <div style={{ textAlign: "center" }}>
            <HIWButton>
              TRY IT YOURSELF <FaAngleRight />
            </HIWButton>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default HowItWorks;
