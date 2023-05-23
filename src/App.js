import React from "react"
import Header from "./components/header/header"
import Main from "./components/main/main"
import { createGlobalStyle } from "styled-components";
import NavComponent from "./components/navbar/navbar";
import CarouselComponent from "./components/carousel/carousel";
import Filmes from "./components/filmes/filmes"
import Footer from "./components/footer/footer"
import SeriesCarouselComponent from "./components/series/SeriesCarousel"
import SeriesMain from "./components/series/SeriesMain"
import { BrowserRouter } from "react-router-dom";
export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`


export default function App (){
  return(
    <>
      <Header />
     {/* <SeriesMain/>*/} 
      <Main/>
      <NavComponent/>
   {/*   <SeriesCarouselComponent/>*/}
   <CarouselComponent/>
      <Filmes/> 
    
   {/*  <Series/>*/}
    <Footer/>
    <GlobalStyle/>
    </>
  )
}
