import React from "react";
import { FaAngleRight } from "react-icons/fa";
import heroMain from "../../images/hero.png";
import heroMarker from "../../images/marker.png";
import {
  HeroButton,
  HeroCol,
  HeroContainer,
  HeroMainImg,
  HeroMarker,
  HeroRow,
  HeroText,
  HeroTitle,
} from "./HeroElements";

const Hero = () => {
  return (
    <>
      <HeroContainer fluid>
        <HeroRow>
          <HeroCol md={6}>
            <HeroTitle className="hero-title">
              Look good without leaving your house.
            </HeroTitle>
            <HeroText>
              Upbox is the easiest way to look your best without having to hunt
              for the perfect makeup combination. Our stylists curate the latest
              trends and send them directly to your door every month.
            </HeroText>
            <HeroButton>
              SIGN UP <FaAngleRight />
            </HeroButton>
          </HeroCol>
          <HeroCol md={6}>
            <HeroMainImg src={heroMain} alt="Overflowing Box" />
            <HeroMarker src={heroMarker} alt="Marker" />
          </HeroCol>
        </HeroRow>
      </HeroContainer>
    </>
  );
};

export default Hero;
