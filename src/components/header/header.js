import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../assets/Grupo 569@2x.png";
import Lupa from "../filmes/image.png";
import { GlobalStyle } from "../../App";
import SApp from "../series/SApp"
import App from "../../App"
import { Link } from "react-router-dom";

export const HeaderStyle = styled.header`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(30px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 99.7%;
  height: 10vh;
  input {
  }

  nav {
    width: 99%;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
  }
  li {
    color: white;
    width: 80%;
    cursor: pointer;
    font: normal normal normal Open Sans;
  }
  div {
    display: flex;
    width: 20%;
    justify-content: space-evenly;
  }
`;
export const LogoImg = styled.img`
align-items:left;
`

export const FiltroSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 35%;

  img {
    width: 2vw;
    cursor: pointer;
  }
`;
export const SearchInput = styled.input`
  display: ${(props) => props.show};
  height: 2vh;
  width: 7vw;
  align-items: center;
`;

export const RouteButton = styled.button`
  border: none;
  background: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  height:2vh;
  font: normal normal normal Open Sans;
`;

export default function Header() {
  const [filtro, setFiltro] = useState("");


  return (
    <HeaderStyle>
      <nav>
        <ul>
          <div>
          <li>
            <LogoImg src={logo} alt=""></LogoImg>
          </li>
          </div>
          <div>
            <li>
              <Link to ="/filmes"><RouteButton>Filmes</RouteButton></Link>
            </li>

            <li>
              <Link to="/series"><RouteButton>Series</RouteButton></Link>
            </li>
          </div>

          <FiltroSection>
            <li>
              <img
                src={Lupa}
                alt="filtro"
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
