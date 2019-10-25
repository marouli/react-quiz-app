import React from 'react';
import { createGlobalStyle } from "styled-components";
import Header from './components/Header';
import QuizBoard from './components/QuizBoard/QuizBoard';
// import './App.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: #1b2c4b;
    @import url('https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,700&display=swap');
    font-family: 'Roboto Slab', serif;
  }
`;

const App = () => {
  
  return <>
      <GlobalStyle />
      <Header />
      <QuizBoard />
    </>
}

export default App;
