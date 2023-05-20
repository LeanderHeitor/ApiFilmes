import React from "react"
import Header from "./components/header/header"
import Main from "./components/main/main"

import { createGlobalStyle } from "styled-components";


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
      <Main/>
    </>
  )
}
