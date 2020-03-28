/* istanbul ignore file */
import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  IListState,
  IStoryState,
} from 'common/interfaces';

export type IReduxStateType = IListState | IStoryState;

export const mountWithRouter = (children: any): any => mount(<Router>{children}</Router>);

export const createMockStore = (reduxStates: IReduxStateType[]) => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  return mockStore(reduxStates);
};

export default mountWithRouter;
