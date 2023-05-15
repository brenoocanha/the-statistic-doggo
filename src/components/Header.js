import React from 'react';
import styled from 'styled-components';

import doggoLogo from '../assets/doggoLogo.png';

export default function MenuLayout() {

  const HeaderContainer = styled.div`
  background-color: #e87a43;
  padding: 10px;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 16px;
    font-family: 'Nova Flat';
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

  return (
    <HeaderContainer className="header-container">
      <MenuIcon className="menu-icon">
        <img src={doggoLogo} style={{width: "50px", height: "50px"}} alt="Ícone" />
        <p>The Statistic Doggo</p>
      </MenuIcon>
      
      <div className="menu-buttons">
        <button onClick={() => handlePageChange('pagina1')}>Página 1</button>
        <button onClick={() => handlePageChange('pagina2')}>Página 2</button>
        <button onClick={() => handlePageChange('pagina3')}>Página 3</button>
      </div>
      <div className="menu-search">
        <div className="search-icon">
          {/* Inserir o código para o ícone */}
          <img src="caminho_do_icone.png" alt="Ícone" />
        </div>
        <input type="text" placeholder="Pesquisar..." />
      </div>
    </HeaderContainer>
  );
}

function handlePageChange(page) {
  // Lógica para a mudança de página
  console.log(`Navegando para ${page}`);
}

