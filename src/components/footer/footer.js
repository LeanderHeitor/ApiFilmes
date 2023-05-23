import React from "react";
import styled from "styled-components";

export const FooterSection = styled.footer`
  background-color: #000000;
  p {
    color: white;
  }
`;
export const FooterList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 7vh;
`;
export const ItemStyle = styled.li`
 
 display:flex;
 justify-content:space-evenly;
 width: 3.4vw;
  list-style: none;

`;

export const SelecItemStyle = styled.li`
  width: 3vw;
  list-style: none;
  button {
   
  }
`;

export const ButtonStyle = styled.button`
    width: 3vw;
    height: 5vh;
    border-radius: 50%;
    background-color: black;
    color: white;
    border-color: white;
    cursor: pointer;
`
export const SelecButtonStyle = styled.button`
  width: 3vw;
    height: 5vh;
    border-radius: 50%;
    background-color: white;
    color: black;
    cursor: pointer;
    
`
export const UltimoButtonStyle = styled.button`
  width: 4vw;
    height: 5vh;
    border-radius: 18%;
    background-color: black;
    color: white;
    cursor: pointer;
    border-color:white;
    
`

export default function Footer() {
  return (
    <FooterSection>
      <FooterList>
        <SelecItemStyle>
          <SelecButtonStyle>1</SelecButtonStyle>
        </SelecItemStyle>
        <ItemStyle>
          <ButtonStyle>2</ButtonStyle>
        </ItemStyle>
        <ItemStyle>
          <ButtonStyle>3</ButtonStyle>
        </ItemStyle>
        <ItemStyle>
          <ButtonStyle>4</ButtonStyle>
        </ItemStyle>
        <ItemStyle>
          <p>...</p>
        </ItemStyle>
        <ItemStyle>
          <ButtonStyle>322</ButtonStyle>
        </ItemStyle>
        <ItemStyle>
          <UltimoButtonStyle>Último</UltimoButtonStyle>
        </ItemStyle>
      </FooterList>
    </FooterSection>
  );
}
