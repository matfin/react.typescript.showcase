import React from 'react';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'common/styles';
import listState from './components/list/reducer';
import storyState from './components/story/reducer';
import ConnectedList from './components/list/ConnectedList';
import ConnectedStory from './components/story/ConnectedStory';
import ContainerSt, {
  FooterSt,
  HeaderSt,
  HeadingSt,
  MainSt,
} from './App.css';

const rootReducer = combineReducers({ listState, storyState });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const App = () => (
  <Provider store={store}>
    <Router>
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
    </Router>
  </Provider>
);

export default App;
