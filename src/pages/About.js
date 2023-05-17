import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const AboutContainer = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  height: 100vh;
`
const StyledCard = styled(Card)`
  margin: 10% 10%;
  
`;


function About() {
  return (
    <div>
        <StyledCard>
          <CardHeader>Teste</CardHeader>
          <CardBody>Teste Teste Teste Teste</CardBody>
        </StyledCard>
    </div>
  );
}

export default About;
