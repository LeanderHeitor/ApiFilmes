import React from "react";
import styled from "styled-components";
import logo from "../../assets/Grupo 569@2x.png";
import { GlobalStyle } from "../../App";
import { IoIosSearch } from "react-icons";

export const HeaderStyle = styled.header`
  border: solid black;

  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(30px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;

  nav {
    border: solid purple;
    width: 99%;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
  }
  li {
    color: white;
  }
  div{
    display:flex;
    border:solid blue;
    width:15%;
    justify-content:space-between;
  }

`
export const LogoImg = styled.img`
border:solid red;
`

export default function Header() {
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

          <div>
            <li>
              <h3>procurar</h3>
            </li>
            <li>
              <h3>Filtro</h3>
            </li>
            <li>
              <h3>Login</h3>
            </li>
          </div>
        </ul>
      </nav>
    </HeaderStyle>
  );
}
