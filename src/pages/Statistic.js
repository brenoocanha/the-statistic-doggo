import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import ProbabilidadeBinomial from '../components/ProbabilidadeBinomial';


const StyledTabs = styled(Tabs)`
  margin: 50px;
`
const StyledTab = styled(Tab)`

`
const StyledTabPanels = styled(TabPanels)`
  
`

const StyledTabPanel = styled(TabPanel)`
label {
  font-size: 1rem;
  font-family: 'Trebuchet MS'
}
`

function Statistic() {



  return (
    <StyledTabs isFitted colorscheme='' size='lg'>
      <TabList mb='1em'>
        <StyledTab>Probabilidade Binomial</StyledTab>
        <StyledTab>Two</StyledTab>
        <StyledTab>Three</StyledTab>
      </TabList>
      <StyledTabPanels>
        <StyledTabPanel>

          <ProbabilidadeBinomial />

        </StyledTabPanel>
        <StyledTabPanel>
          <p>two!</p>
        </StyledTabPanel>
        <StyledTabPanel>
          <p>three!</p>
        </StyledTabPanel>
      </StyledTabPanels>
    </StyledTabs>
  );
}

export default Statistic;
