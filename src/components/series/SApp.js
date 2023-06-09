import React from "react";
import Header from "../header/header";
import SeriesMain from "./SeriesMain";
import NavComponent from "../navbar/navbar";
import SeriesCarouselComponent from "./SeriesCarousel";
import Footer from "../footer/footer";
import Series from "./SeriesC";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function SApp() {
  return (
    <>
      <Header />
      <SeriesMain />
      <NavComponent />
      <SeriesCarouselComponent />
      <Series/>
      <Footer />
      <GlobalStyle />
    </>
  );
}