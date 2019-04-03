import React from 'react';
import { shallow } from 'enzyme';

import App from '../src/App';

describe('<App />', () => {
  test('should render valid', () => {
    expect(React.isValidElement(<App />)).toBeTruthy();
  });

  test('should call handleChange()', () => {
    const wrapper = shallow(<App />).dive();

    wrapper.instance().handleChange('1234');
    expect(wrapper.state('numbers')).toEqual('1234');
  });

  test('should call handleClick()', () => {
    const wrapper = shallow(<App />).dive();

    wrapper.setState({ numbers: '32' });
    wrapper.instance().handleClick('4');
    expect(wrapper.state('numbers')).toEqual('324');
  });

  test('should call handleClear()', () => {
    const wrapper = shallow(<App />).dive();

    wrapper.setState({
      numbers: '32',
      phonewords: ['ad', 'ae', 'af', 'bd'],
    });

    wrapper.instance().handleClear();
    expect(wrapper.state('numbers')).toEqual('');
    expect(wrapper.state('phonewords')).toEqual([]);
  });
});
