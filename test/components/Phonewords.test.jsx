import React from 'react';

import Phonewords from '../../src/components/Phonewords';

const props = {
  phonewords: ['a', 'b', 'c'],
};

describe('<Phonewords />', () => {
  test('should render valid', () => {
    expect(React.isValidElement(<Phonewords {...props} />)).toBeTruthy();
  });
});
