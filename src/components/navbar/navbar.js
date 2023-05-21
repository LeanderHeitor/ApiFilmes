import React from "react";
import styled from "styled-components"

export const NavBar = styled.nav`
border: solid green;
display:flex;
justify-content:space-evenly;
background-color:#000000;
`

export const NavUl = styled.ul`
border: solid black;
display:flex;
justify-content:space-evenly;
width:91.5%;
`

export const NavItem = styled.li`
list-style:none;
color:white;
`

export const NavSearch = styled.input`
width:20px;
`
export default function NavComponent(){
    return(
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
            </NavUl>
            <NavSearch/>
        </NavBar>
        </>
    )
}

const SearchBar = ()=>{
    return <NavSearch/>
}