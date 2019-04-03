import React from 'react';
import { shallow } from 'enzyme';

import Button from '@kiwicom/orbit-components/lib/Button';
import KeyboardNumber from '../../src/components/KeyboardNumber';

const props = {
  number: '2',
  letters: 'abc',
  handleClick: jest.fn(),
};

describe('<KeyboardNumber />', () => {
  test('should render valid', () => {
    expect(React.isValidElement(<KeyboardNumber {...props} />)).toBeTruthy();
  });

  test('should call handleClick', () => {
    const wrapper = shallow(<KeyboardNumber {...props} />).dive();
    const button = wrapper.find(Button).dive();

    button.simulate('click');
    expect(props.handleClick).toHaveBeenCalled();
  });
});
