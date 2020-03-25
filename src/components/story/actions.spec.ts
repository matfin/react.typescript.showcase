import {
  FETCH_STORY_PENDING,
  FETCH_STORY_SUCCESS,
  FETCH_STORY_FAILURE,
  RESET_STORY,
} from './types';
import { createMockStore } from 'common/utils';
import * as api from 'common/utils/api';
import { IStory } from 'common/interfaces';
import { fetchStory, resetStory } from './actions';

describe('story actions', () => {
  let store: any;

  beforeEach(() => {
    store = createMockStore({});
  });

  it('should fetch the story with success', async(done) => {
    const story: IStory = { id: '1', title: 'One', content: 'Story one' };
    const expectedActions = [
      { type: FETCH_STORY_PENDING },
      { type: FETCH_STORY_SUCCESS, payload: { story } }
    ];

    jest.spyOn(api, 'getStory').mockResolvedValue(story);
    await(store.dispatch(fetchStory('1')));
    expect(store.getActions()).toEqual(expectedActions);

    done();
  });

  it('should fail to fetch a story', async(done) => {
    const error: any = { dummy: 'error' };
    const expectedActions = [
      { type: FETCH_STORY_PENDING },
      { type: FETCH_STORY_FAILURE, error: error }
    ];

    jest.spyOn(api, 'getStory').mockRejectedValue(error);
    await(store.dispatch(fetchStory('1')));
    expect(store.getActions()).toEqual(expectedActions);

    done();
  });

  it('should reset the story', async() => {
    const expectedActions = [
      { type: RESET_STORY },
    ];

    await(store.dispatch(resetStory()));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
