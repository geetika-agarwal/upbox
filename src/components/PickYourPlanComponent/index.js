import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import underline from "../../images/underline.png";
import {
  CardButton,
  CardPrice,
  CardTitle,
  PYPCard,
  PYPDisclaimer,
  PYPMarker,
  PYPTitle,
} from "./PYPElements";
import card1 from "../../images/pyp-card.svg";
import card2 from "../../images/pyp-card-2.svg";

const PickYourPlan = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <PYPTitle className="hero-title">Pick your plan</PYPTitle>
          <PYPMarker src={underline} />
        </Row>
        <Row>
          <Col md={6} className="mt-4">
            <PYPCard style={{ backgroundImage: `url(${card1})` }}>
              <CardTitle>Monthly</CardTitle>
              <CardPrice>$18/mo</CardPrice>
              <div style={{ textAlign: "center" }}>
                <CardButton>FIND YOUR BOX</CardButton>
              </div>
            </PYPCard>
          </Col>
          <Col md={6} className="mt-4">
            <PYPCard style={{ backgroundImage: `url(${card2})` }}>
              <CardTitle>Yearly</CardTitle>
              <CardPrice>$15/mo</CardPrice>
              <div style={{ textAlign: "center" }}>
                <CardButton>FIND YOUR BOX</CardButton>
              </div>
            </PYPCard>
          </Col>
        </Row>
        <Row>
          <PYPDisclaimer>
            Your plan auto-renews at the end of 30 days from the 1st day you
            signed-up.
          </PYPDisclaimer>
        </Row>
      </Container>
    </div>
  );
};

export default PickYourPlan;
