import React from "react";
import styled from "styled-components";
import lupa from "../filmes/image.png";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-evenly;
  background-color: #000000;
  cursor: pointer;
`;

export const NavUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 91.5%;
`;

export const NavItem = styled.li`
  list-style: none;
  color: white;
  margin-top:20px;
  margin-bottom:20px;
  font: normal normal normal Open Sans;
  font-size:1.1rem;
`;

export const NavSearch = styled.input`
  width: 20px;
`;
export default function NavComponent() {
  return (
    <>
      <NavBar>
        <NavUl>
          <NavItem>Popular</NavItem>
          <NavItem>Drama</NavItem>
          <NavItem>Ação</NavItem>
          <NavItem>Aventura</NavItem>
          <NavItem>Comédia</NavItem>
          <NavItem>Crime</NavItem>
          <NavItem>Fantasia</NavItem>
          <NavItem>Familia</NavItem>
          <img src={lupa} style={{ height:'5vh', width: "3vw" }} />
        </NavUl>
       
      </NavBar>
    </>
  );
}

const SearchBar = () => {
  return <NavSearch />;
};
