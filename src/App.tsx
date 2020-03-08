import React from 'react';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import ContainerSt from './App.css';
import ConnectedList from './components/list/ConnectedList';
import ConnectedStory from './components/story/ConnectedStory';
import listState from './components/list/reducer';
import storyState from './components/story/reducer';

const rootReducer = combineReducers({ listState, storyState });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const App = () => (
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={{}}>
        <ContainerSt>
          <nav>
            <Link to="/">List</Link>
          </nav>
          <Switch>
            <Route path="/" exact component={ConnectedList} />
            <Route path="/story/:id">
              <ConnectedStory />
            </Route>
          </Switch>
        </ContainerSt>
        <GlobalStyle />
      </ThemeProvider>
    </Router>
  </Provider>
);

export default App;
