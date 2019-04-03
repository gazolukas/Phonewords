import React from 'react';
import { shallow } from 'enzyme';

import Button from '@kiwicom/orbit-components/lib/Button';
import KeyboardRemove from '../../src/components/KeyboardRemove';

const props = {
  handleClear: jest.fn(),
};

describe('<KeyboardRemove />', () => {
  test('should render valid', () => {
    expect(React.isValidElement(<KeyboardRemove {...props} />)).toBeTruthy();
  });

  test('should call handleClear', () => {
    const wrapper = shallow(<KeyboardRemove {...props} />).dive();
    const button = wrapper.find(Button).dive();

    button.simulate('click');
    expect(props.handleClear).toHaveBeenCalled();
  });
});
