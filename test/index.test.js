import React from 'react';
import { shallow } from 'enzyme';

import { Hello, Example } from '../lib/index';

describe('Hello component', () => {
  it('Should render a simple greeting', () => {
    const wrapper = shallow(<Hello />);

    expect(wrapper.text()).toEqual("Hi!");
  });
});

describe('Example component', () => {
  it('1 should be sad and 2 should be happy when button is not clicked', () => {
    const wrapper = shallow(<Example />);

    expect(wrapper.find('> div').at(0).text()).toEqual("No I am sad. :(");
    expect(wrapper.find('> div').at(1).text()).toEqual("No I am happy! :)");
  });

  it('1 should be sad and 2 should be happy when button is not clicked', () => {
    const wrapper = shallow(<Example />);

    wrapper.find('button').simulate('click');

    expect(wrapper.find('> div').at(0).text()).toEqual("I am very happy!");
    expect(wrapper.find('> div').at(1).text()).toEqual("I am very sad!");
  });
});
