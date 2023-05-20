import React from 'react';
import styled from 'styled-components';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import ProbabilidadeBinomial from '../components/ProbabilidadeBinomial';
import ProbabilidadePoisson from '../components/ProbabilidadePoisson';
import '../styles/Statistic.css';
import PropriedadesProbabilidades from '../components/PropriedadesProbabilidades';


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
      <TabList mb='1em' className='statistic-tablist'>
        <StyledTab className='tab-item'>Propriedades de Probabilidade</StyledTab>
        <StyledTab className='tab-item'>Probabilidade Binomial</StyledTab>
        <StyledTab className='tab-item'>Probabilidade Poisson</StyledTab>
      </TabList>
      <StyledTabPanels>
        <StyledTabPanel>

          <PropriedadesProbabilidades />

        </StyledTabPanel>
        <StyledTabPanel>
          <ProbabilidadeBinomial />
          
        </StyledTabPanel>
        <StyledTabPanel>
          <ProbabilidadePoisson />
        </StyledTabPanel>
      </StyledTabPanels>
    </StyledTabs>
  );
}

export default Statistic;
