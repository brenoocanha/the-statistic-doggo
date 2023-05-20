import React from 'react';
import styled from 'styled-components';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import ProbabilidadeBinomial from '../components/ProbabilidadeBinomial';
import ProbabilidadePoisson from '../components/ProbabilidadePoisson';


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
        <StyledTab>Probabilidade Poisson</StyledTab>
        <StyledTab>Three</StyledTab>
      </TabList>
      <StyledTabPanels>
        <StyledTabPanel>

          <ProbabilidadeBinomial />

        </StyledTabPanel>
        <StyledTabPanel>
          <ProbabilidadePoisson />
        </StyledTabPanel>
        <StyledTabPanel>
          <p>three!</p>
        </StyledTabPanel>
      </StyledTabPanels>
    </StyledTabs>
  );
}

export default Statistic;
