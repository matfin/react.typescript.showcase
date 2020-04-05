import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'common/styles';
import ConnectedList from './components/list/ConnectedList';
import ConnectedStory from './components/story/ConnectedStory';
import ContainerSt, {
  FooterSt,
  HeaderSt,
  HeadingSt,
  MainSt,
} from './App.css';

const App = () => (
  <ThemeProvider theme={{}}>
    <ContainerSt>
      <HeaderSt>
        <Link to="/">
          <HeadingSt>
            Ben
          </HeadingSt>
        </Link>
      </HeaderSt>
      <MainSt>
        <Switch>
          <Route path="/" exact component={ConnectedList} />
          <Route path="/story/:slug">
            <ConnectedStory />
          </Route>
        </Switch>
      </MainSt>
      <FooterSt />
    </ContainerSt>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
