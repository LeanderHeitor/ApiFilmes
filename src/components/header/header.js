import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../assets/Grupo 569@2x.png";
import Lupa from "../filmes/image.png";
import { GlobalStyle } from "../../App";
import SApp from "../series/SApp"
import App from "../../App"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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
    width: 15%;
    cursor: pointer;
  }
  div {
    display: flex;
    width: 20%;
    justify-content: space-evenly;
  }
`;
export const LogoImg = styled.img``;

export const FiltroSection = styled.section`
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
`;

export default function Header() {
  const [filtro, setFiltro] = useState("");


  return (
    <BrowserRouter>
    <HeaderStyle>
      <nav>
        <ul>
          <li>
            <LogoImg src={logo} alt=""></LogoImg>
          </li>
          <div>
            <li>
              <Link to ="/"><RouteButton>Filmes</RouteButton></Link>
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
    <Routes>
      <Route path= "/filmes" element= {<App/>}/>
      <Route path="/series" element = {<SApp/>}/>
    </Routes>
    </BrowserRouter>
  );
}
