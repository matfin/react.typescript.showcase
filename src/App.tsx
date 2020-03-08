import React from 'react';
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import ContainerSt from './App.css';
import List from './components/list/List';
import Story from './components/story/Story';

const App = () => (
  <Router>
    <ThemeProvider theme={{}}>
      <ContainerSt>
        <nav>
          <Link to="/">List</Link>
        </nav>
        <Switch>
          <Route path="/" exact component={List} />
          <Route path="/story/:id">
            <Story />
          </Route>
        </Switch>
      </ContainerSt>
      <GlobalStyle />
    </ThemeProvider>
  </Router>
);

export default App;
