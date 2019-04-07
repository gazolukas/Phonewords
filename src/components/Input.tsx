import React from 'react';

import InputField from '@kiwicom/orbit-components/lib/InputField';

type Props = {
  value: string;
  handleChange: (...args: any[]) => any;
};

function Input({ value, handleChange }: Props) {
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

export default Input;
