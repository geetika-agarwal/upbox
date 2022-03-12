import styled from "styled-components";

export const PYPTitle = styled.h1`
  text-align: center;
  font-size: 48px;
  line-height: 56px;
  margin-top: 3.5rem;
  font-family: "DM Serif Text";
`;

export const PYPMarker = styled.img`
  width: 15rem;
  margin: 0rem auto 3rem auto;
`;

export const PYPCard = styled.div`
  margin: 0rem 3rem;
  height: 100%;
  border: 3px solid #c4c4c4;

  @media screen and (max-width: 1024px) {
    margin: 0rem 1rem;
  }
`;

export const CardTitle = styled.h3`
  text-align: center;
  font-family: "DM Serif";
  font-size: 36px;
  line-height: 49.36px;
  vertical-align: top;
  font-weight: 600;
  margin-top: 1.7rem;
`;

export const CardPrice = styled.h1`
  margin: 0.8rem auto;
  text-align: center;
  font-family: "DM Sans";
  font-size: 44px;
  letter-spacing: 3px;
`;

export const CardButton = styled.button`
  margin: 1rem auto;
  margin-top: 10px;
  text-align: center;
  width: 10.5rem;
  padding: 10px 8px;
  font-size: 13px;
  color: white;
  font-family: "DM Sans"
  font-weight: bold;
  line-height:20.83px;
  letter-spacing: 2px;
  background-color: #EF8094;
  border: none;
  border-radius: 2rem;
`;

export const PYPDisclaimer = styled.p`
  margin-top: 3.8rem;
  text-align: center;
  font-size: 18px;
  font-family: "DM Sans";
  margin-bottom: 2rem;
`;
