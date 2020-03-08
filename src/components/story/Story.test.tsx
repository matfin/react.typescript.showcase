import React from 'react';
import { Route } from 'react-router-dom';
import { mountWithRouter } from '../../testutils';
import Story from './Story';
import StorySt, { TitleSt, ContentSt } from './Story.css';

describe('Story', () => {
  it('should render', () => {
    const wrapper = mountWithRouter(
      <Route>
        <Story />
      </Route>,
    );

    expect(wrapper).toBeDefined();
    expect(wrapper.find(StorySt)).toHaveLength(1);
    expect(wrapper.find(TitleSt)).toHaveLength(1);
    expect(wrapper.find(ContentSt)).toHaveLength(1);
  });
});
