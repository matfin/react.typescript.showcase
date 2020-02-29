import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import App from './App';
import Container from './App.css';

describe('App', () => {
  it('should render', () => {
    const wrapper = mount(<App name="TestName" />);

    expect(wrapper).toBeDefined();
    expect(wrapper.find(Container).text()).toEqual('TestName is a Rabbit!');
  });

  describe('styling', () => {
    it('has the correct responsive styles', () => {
      const wrapper = mount(<Container />);

      expect(wrapper).toHaveStyleRule('background-color', 'yellow');
      expect(wrapper).toHaveStyleRule('background-color', '#000', {
        media: '(min-width: 320px)',
      });
      expect(wrapper).toHaveStyleRule('background-color', '#fff', {
        media: '(min-width: 768px)',
      });
      expect(wrapper).toHaveStyleRule('background-color', '#ff0000', {
        media: '(min-width: 1024px)',
      });
      expect(wrapper).toHaveStyleRule('background-color', '#00ff00', {
        media: '(min-width: 1280px)',
      });
      expect(wrapper).toHaveStyleRule('background-color', '#0000ff', {
        media: '(min-width: 1440px)',
      });
    });
  });
});
