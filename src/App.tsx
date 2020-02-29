import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import ContainerSt from './App.css';

interface IProps {
  name?: string
}

const defaultTheme = {};

const App = ({ name }: IProps) => (
  <ThemeProvider theme={defaultTheme}>
    <ContainerSt>
      <h1>
        {name} is a Rabbit!
      </h1>
    </ContainerSt>
    <GlobalStyle />
  </ThemeProvider>
);


export default App;
