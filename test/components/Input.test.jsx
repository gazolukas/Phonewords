import React from 'react';
import { shallow } from 'enzyme';

import InputField from '@kiwicom/orbit-components/lib/InputField';
import Input from '../../src/components/Input';

const props = {
  value: '2',
  handleChange: jest.fn(),
};

describe('<Input />', () => {
  test('should render valid', () => {
    expect(React.isValidElement(<Input {...props} />)).toBeTruthy();
  });

  test('should call handleChange', () => {
    const wrapper = shallow(<Input {...props} />);
    const input = wrapper.find(InputField);

    input.simulate('change', { target: { ...props } });
    expect(props.handleChange).toHaveBeenCalled();
  });
});
