import React from 'react';
import PropTypes from 'prop-types';

import InputField from '@kiwicom/orbit-components/lib/InputField';

const propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

function Input({ value, handleChange }) {
  return (
    <InputField
      type="number"
      label="Number"
      placeholder="Number"
      value={value}
      onChange={(e) => {
        handleChange(e.target.value);
      }}
    />
  );
}

Input.propTypes = propTypes;

export default Input;
