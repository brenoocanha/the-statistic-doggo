import React from 'react';
import styled from 'styled-components';

import doggoLogo from '../assets/doggoLogo.png';
import searchIcon from '../assets/search-icon.svg';
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

const SearchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  .search-header-icon {
    margin: auto 10px;
  }
  .search-header-input {
    margin: auto 10px;
    .input-search-bar {
      border-radius: 10px;
      border: 1px solid #000028;
      height: 20px;
      padding-left: 10px;
    }
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
          <button><Link to="/">Home</Link></button>
          <button><Link to="/statistic">Statistic</Link></button>
          <button><Link to="/about">About</Link></button>
        </OptionsHeader>
        <SearchHeader>
          <div className='search-header-icon'>
            <img src={searchIcon} style={{height: '20px', width: '20px', marginTop: '5px', marginBottom: 'auto', marginRight: '-10px'}} alt="Ícone" />
          </div>
          <div className='search-header-input'>
            <input type="text" placeholder="Pesquisar..." className='input-search-bar' />
          </div>
        </SearchHeader>
      </HeaderContainer>
    </div>
  );

}



