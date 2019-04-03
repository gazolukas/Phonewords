import React from 'react';

import Keyboard from '../../src/components/Keyboard';

const props = {
  handleClick: jest.fn(),
};

describe('<Keyboard />', () => {
  test('should render valid', () => {
    expect(React.isValidElement(<Keyboard {...props} />)).toBeTruthy();
  });
});
