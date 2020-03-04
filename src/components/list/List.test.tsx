import React from 'react';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';
import { mountWithRouter } from '../../testutils';
import List from './List';
import { IStory } from '../../interfaces/Story';

const defaultProps = {
  stories: [],
};

describe('List', () => {
  it('should render', () => {
    const wrapper = shallow(<List {...defaultProps} />);

    expect(wrapper).toBeDefined();
    expect(wrapper.find(Link)).toHaveLength(0);
  });

  it('should contain a list of links to stories', () => {
    const stories: IStory[] = [
      { id: '1', title: 'Test title one', content: 'Test content one' },
      { id: '2', title: 'Test title two', content: 'Test content two' },
    ];
    const wrapper = mountWithRouter(<List stories={stories} />);

    expect(wrapper.find(Link)).toHaveLength(2);
    expect(wrapper.find(Link).at(0).text()).toEqual('Test title one');
    expect(wrapper.find(Link).at(1).text()).toEqual('Test title two');
  });
});
