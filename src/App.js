import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Detail from './views/detail/Detail';
import List from './views/list/List';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route component={List} exact path="/" />
          <Route component={Detail} path="/story" />
        </Switch>
      </Fragment>
    );
  }
}
