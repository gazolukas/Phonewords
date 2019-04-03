import React from 'react';
import PropTypes from 'prop-types';

import KeyboardNumber from './KeyboardNumber';
import BUTTONS from '../constants/keyboard';
import { css, withStyles, withStylesPropTypes } from '../theme/withStyles';

const propTypes = {
  ...withStylesPropTypes,
  handleClick: PropTypes.func.isRequired,
};

function Keyboard({ styles, handleClick }) {
  return (
    <div {...css(styles.wrapper)}>
      {BUTTONS.map((NUM) => (
        <KeyboardNumber
          key={NUM.NUMBER}
          number={NUM.NUMBER}
          letters={NUM.LETTERS}
          handleClick={() => {
            handleClick(NUM.NUMBER);
          }}
        />
      ))}
    </div>
  );
}

Keyboard.propTypes = propTypes;

export default withStyles(() => ({
  wrapper: {
    padding: '10px 0 0',
    margin: '0 -10px',
    display: 'flex',
    flexFlow: 'row wrap',
  },
}))(Keyboard);
