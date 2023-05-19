import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import doggoLogo from '../assets/doggoLogo.png';
import { Box } from '@chakra-ui/react'

const HomeBackground = styled.div`
  background-color: white;
  height: calc(100vh);
  width: 55%;
  float: left;
  margin: auto;
  h1 {
    font-size: 4.75rem;
    font-family: 'DM Sans';
    text-align: center;
    vertical-align: middle;
    margin-top: 25%;
    font-weight: bold;
  }
`
const HomeDoggoBackground = styled.div`
  background-color: #fe502d;
  height: calc(100vh);
  width: 45%;
  float: right;
  margin: auto;
  img {
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 28%;
  }
`

const CalculateButton = styled.button`
  display: flex;
  justify-content: center;
  margin: auto;
  font-family: 'DM Sans';
  padding: 10px 20px;
  font-size: 28px;
  border: 2px solid black;
  margin-top: 20px;
`

function Home() {
  return (
    <Box>
      <HomeBackground>
        <h1>Come<br />calculate with <br />The Doggo!</h1>
        <CalculateButton><Link to="/statistic">CALCULATE!</Link></CalculateButton>
      </HomeBackground>
      <HomeDoggoBackground>
        <img src={doggoLogo} style={{width: "400px", height: "400px"}} alt="doggoImage" />
      </HomeDoggoBackground>
    </Box>
)}

export default Home;