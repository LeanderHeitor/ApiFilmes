import React from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";
import { createGlobalStyle } from "styled-components";
import NavComponent from "./components/navbar/navbar";
import CarouselComponent from "./components/carousel/carousel";
import Filmes from "./components/filmes/filmes";
import Footer from "./components/footer/footer";
import SeriesCarouselComponent from "./components/series/SeriesCarousel";
import SeriesMain from "./components/series/SeriesMain";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SApp from "./components/series/SApp";
import FApp from "./components/ComponenteFilmes/FApp"
export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    h1{
      font: normal normal bold 27px/35px Open Sans;
    }
  }
`;

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyle />
      <Routes>
        <Route path="/filmes" element={<FApp />} />
        <Route path="/series" element={<SApp />} />
        <Route path="/"element={<FApp/>}/>
      </Routes>
    </BrowserRouter>
  );
}
