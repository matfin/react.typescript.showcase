import {
  FETCH_STORIES_PENDING,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_FAILURE,
} from './types';
import { createMockStore } from 'common/utils';
import * as api from 'common/utils/api';
import { IStory } from 'common/interfaces';
import { fetchStories } from './actions';

describe('list actions', () => {
  let store: any;

  beforeEach(() => {
    store = createMockStore({});
  });

  it('should fetch stories with success', async(done) => {
    const stories: IStory[] = [
      { id: '1', title: 'One', content: 'Story one' },
      { id: '2', title: 'Two', content: 'Story two' },
      { id: '3', title: 'Three', content: 'Story three' },
    ];
    const expectedActions = [
      { type: FETCH_STORIES_PENDING },
      { type: FETCH_STORIES_SUCCESS, payload: { stories } },
    ];

    jest.spyOn(api, 'getStories').mockResolvedValue(stories);
    await store.dispatch(fetchStories());
    expect(store.getActions()).toEqual(expectedActions);

    done();
  });

  it('should fail to fetch stories', async(done) => {
    const error: any = { dummy: 'error' }
    const expectedActions = [
      { type: FETCH_STORIES_PENDING },
      { type: FETCH_STORIES_FAILURE, error },
    ];

    jest.spyOn(api, 'getStories').mockRejectedValue(error);
    await store.dispatch(fetchStories());
    expect(store.getActions()).toEqual(expectedActions);

    done();
  });
});
