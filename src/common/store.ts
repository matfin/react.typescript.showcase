/* istanbul ignore file */
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import listState from '../components/list/reducer';
import storyState from '../components/story/reducer';

const rootReducer = combineReducers({
  listState, storyState,
});

export const createStoreWithPreloadedState = (preloadedState?: any) => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunkMiddleware),
);

export default createStoreWithPreloadedState;
