import React from 'react';
import styled from 'styled-components';

import doggoLogo from '../assets/doggoLogo.png';
import { Link } from 'react-router-dom';


export default function MenuLayout() {

  const HeaderContainer = styled.div`
  background-color: #fff;
  padding: 10px;
  border-bottom: 2px solid #000028;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 16px;
    font-family: 'Batangas';
    color: #fe502d;
  }
`;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  border: 1px solid black;
  padding: 5px 25px;
  margin: auto 20px;
  display: flex;
  justify-content: center;

  &:hover {
    text-decoration: underline;
  }
`;

const MenuIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  p {
    margin: 0;
    margin-left: 10px;
    white-space: nowrap;
    vertical-align: middle;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 20px;
    font-weight: bold;
  }
`;

const OptionsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    margin: 5px 10px;
    border-radius: 8px;
    min-width: 10rem;
    font-weight: bold;
  }
`

  return (
    <div className='container-fluid'>
      <HeaderContainer className="header-container">
        <MenuIcon className="menu-icon">
          <img src={doggoLogo} style={{width: "50px", height: "50px"}} alt="Ícone" />
          <p>The Statistic Doggo</p>
        </MenuIcon>
        
        <OptionsHeader>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/statistic">Statistic</StyledLink>
          <StyledLink to="/about">About</StyledLink>
        </OptionsHeader>
      </HeaderContainer>
    </div>
  );

}



