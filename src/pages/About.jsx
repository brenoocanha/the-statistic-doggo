import React from 'react';
import styled from 'styled-components';
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react';

const StyledBox = styled(Box)`
  margin: 10% 20%;
  border: 1px solid black;
  padding: 20px;
  border-radius: 5px;
`

function About() {
  return (

    <StyledBox>
        <Heading mb={4}>About The Statistic Doggo Project</Heading>
        <Text fontSize='xl'>
        The Statistic Doggo started as a college project made by two System Analysis and Development students called Breno and Marcos. This project is all about statistic, and it started in May 2023. The objective of this project is to create a statistic calculator and graphic drawer site, used for studies and projects. </Text>
    </StyledBox>
  );
}

export default About;
