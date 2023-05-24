import React from "react";
import Header from "../header/header";
import Main from "../main/main";
import NavComponent from "../navbar/navbar";
import Carousel from "../carousel/carousel";
import Footer from "../footer/footer";
import Filmes from "../filmes/filmes";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function FApp() {
  return (
    <>
      <Header />
      <Main />
      <NavComponent />
      <Carousel />
      <Filmes/>
      <Footer />
      <GlobalStyle />
    </>
  );
}