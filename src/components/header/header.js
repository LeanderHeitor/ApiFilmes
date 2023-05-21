import React, { useEffect, useState } from "react"
import styled from "styled-components";
import logo from "../../assets/Grupo 569@2x.png";
import Lupa from "../filmes/image.png"
import { GlobalStyle } from "../../App";

export const HeaderStyle = styled.header`
position:fixed;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(30px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 99.7%;
  height: 10vh;

  input{
    
  }

  nav {
    width: 99%;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    width:100%
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
  }
  li {
 
    color: white;
    width:15%;
    input{

    }
  }
  div {
    display: flex;
    width:20%;
    justify-content: space-evenly;
  }
`;
export const LogoImg = styled.img`
`;

export const FiltroSection = styled.section`
display:flex;
justify-content:space-evenly;
align-items:center;
width:35%;

img{
  width:2vw;
  cursor:pointer;
}
`
export const SearchInput = styled.input`
  display: ${(props) => props.show};
  height:2vh;
  width:7vw;
    align-items:center;
`;

export default function Header() {
  const [filtro, setFiltro] = useState('');
  const [mostrarInput, setMostrarInput]= useState(false);
  

  const handleInputChange = (event) => {
    setFiltro(event.target.value);
  };

  const handleLupaClick = () => {
    setMostrarInput(!mostrarInput);
  };

  return (
    <HeaderStyle>
      <nav>
        <ul>
          <li>
            <LogoImg src={logo} alt=""></LogoImg>
          </li>
          <div>
            <li>
              <h3>Filmes</h3>
            </li>

            <li>
              <h3>Series</h3>
            </li>
          </div>

          <FiltroSection>
            <li>
              
              <img 
              src={Lupa} 
              alt="filtro"
              onClick={()=>setMostrarInput(!mostrarInput)}
            />
            </li>
            <li>
              <SearchInput
              show={mostrarInput===false?'none':'initial'}
              placeholder="Procure seu filme aqui"
              value={filtro}
              onChange={handleInputChange}
              />
            </li>
            <li>
              <h3>Filtro</h3>
            </li>
            <li>
              <h3>Login</h3>
            </li>
          </FiltroSection>
        </ul>
      </nav>
    </HeaderStyle>
  );
}
