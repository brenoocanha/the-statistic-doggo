import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import doggoLogo from "../assets/doggoLogo.png";
import { Box } from "@chakra-ui/react";
import "../styles/Home.css";

import { Text } from "@chakra-ui/react";
const HomeBackground = styled.div`
  background-color: white;
  height: calc(100vh);
  width: 55%;
  float: left;
  margin: auto;
  h1 {
    font-size: 4.75rem;
    font-family: "DM Sans";
    text-align: center;
    vertical-align: middle;
    margin-top: 25%;
    font-weight: bold;
  }
`;
const HomeDoggoBackground = styled.div`
  background-color: #fe502d;
  height: calc(100vh);
  width: 45%;
  height: calc(100vh);
  float: right;
  margin: auto;
  img {
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 28%;
  }
`;

const CalculateButton = styled.button`
  display: flex;
  justify-content: center;
  margin: auto;
  font-family: "DM Sans";
  padding: 10px 20px;
  font-size: 28px;
  border: 2px solid black;
  margin-top: 20px;
`;

const larguraMonitor = window.innerWidth;

function Home() {
  const breakpoints = {
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    "2xl": "96em", // 1536px
  };

  if (larguraMonitor <= 768) {
    return (
      <Box>
        <div className="mobile-home-background">
          <img
            src={doggoLogo}
            style={{ width: "50%", height: "50%", margin: "auto" }}
            alt="doggoImage"
          />
        </div>
        <div className="second-section-mobile">
          <h1 className="home-title-mobile">Olá</h1>
        </div>
      </Box>
    );
  } else {
    return (
      <Box>
        <HomeBackground>
          <Box>
            <Text className="home-text">
              Come
              <br className="pula-linha" />{" "}
              <span className="whitespace">calculate with</span>{" "}
              <br className="pula-linha" /> The Doggo!
            </Text>
            <CalculateButton className="calculate-button">
              <Link to="/statistic">CALCULATE!</Link>
            </CalculateButton>
          </Box>
        </HomeBackground>
        <HomeDoggoBackground>
          <Box className="doggo-image">
            <img
              src={doggoLogo}
              style={{ width: "400px", height: "400px" }}
              alt="doggoImage"
            />
          </Box>
        </HomeDoggoBackground>
      </Box>
    );
  }
}

export default Home;
