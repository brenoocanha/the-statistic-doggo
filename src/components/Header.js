import React from 'react';
import styled from 'styled-components';
import bootstrap from 'bootstrap'

import doggoLogo from '../assets/doggoLogo.png';


export default function MenuLayout() {

  const HeaderContainer = styled.div`
  background-color: #e87a43;
  padding: 10px;
  border-bottom: 2px solid #000028;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 16px;
    font-family: 'Nova Flat';
    color: #000028;
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
    background-color: #fef7e1;
    border-radius: 8px;
    border: 1px solid #000028;
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
          <button onClick={() => handlePageChange('pagina1')}>Página 1</button>
          <button onClick={() => handlePageChange('pagina2')}>Página 2</button>
          <button onClick={() => handlePageChange('pagina3')}>Página 3</button>
        </OptionsHeader>
        <div className="menu-search">
          <div className="search-icon">
            {/* Inserir o código para o ícone */}
            <img src="caminho_do_icone.png" alt="Ícone" />
          </div>
          <input type="text" placeholder="Pesquisar..." />
        </div>
      </HeaderContainer>
    </div>
  );
}

function handlePageChange(page) {
  // Lógica para a mudança de página
  console.log(`Navegando para ${page}`);
}

