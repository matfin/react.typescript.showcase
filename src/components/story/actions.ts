import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  FETCH_STORY_PENDING,
  FETCH_STORY_SUCCESS,
  FETCH_STORY_FAILURE,
  RESET_STORY,
} from './types';
import { getStory } from 'common/utils';
import { IStory, IStoryState } from 'common/interfaces';

export const fetchStory = (
  id: string
) : ThunkAction<void, IStoryState, unknown, Action<string>> => (dispatch: any) => {
  dispatch({
    type: FETCH_STORY_PENDING
  });

  return getStory(id)
    .then((response: IStory) => {
      dispatch({
        type: FETCH_STORY_SUCCESS,
        payload: { story: response },
      });
    })
    .catch((error: any) => {
      dispatch({
        type: FETCH_STORY_FAILURE,
        error,
      });
    });
};

export const resetStory = (): Action => ({
  type: RESET_STORY
});

export default fetchStory;
