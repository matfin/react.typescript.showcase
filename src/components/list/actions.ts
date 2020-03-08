import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  FETCH_STORIES_PENDING,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_FAILURE,
} from './types';
import { getStories } from 'common/utils';
import { IListState, IStory } from 'common/interfaces';

export const fetchStories = (
): ThunkAction<void, IListState, unknown, Action<string>> => (dispatch: any) => {
  dispatch({
    type: FETCH_STORIES_PENDING,
  });

  return getStories()
    .then((response: IStory[]) => {
      dispatch({
        type: FETCH_STORIES_SUCCESS,
        payload: { stories: response },
      });
    })
    .catch((error: any) => {
      dispatch({
        type: FETCH_STORIES_FAILURE,
        error,
      });
    });
};

export default fetchStories;
