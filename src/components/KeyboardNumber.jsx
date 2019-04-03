import React from 'react';
import PropTypes from 'prop-types';

import Button from '@kiwicom/orbit-components/lib/Button';
import { css, withStyles, withStylesPropTypes } from '../theme/withStyles';

const propTypes = {
  ...withStylesPropTypes,
  number: PropTypes.string.isRequired,
  letters: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

function KeyboardNumber({ styles, number, letters, handleClick }) {
  return (
    <div {...css(styles.col4)}>
      <Button onClick={handleClick} block type="secondary" size="large">
        <div {...css(styles.innerWrapper)}>
          <div>{number}</div>
          {letters && <div {...css(styles.letters)}>{letters}</div>}
        </div>
      </Button>
    </div>
  );
}

KeyboardNumber.propTypes = propTypes;

export default withStyles(() => ({
  col4: {
    width: '33.3%',
    display: 'inline-block',
    padding: '10px',
    boxSizing: 'border-box',
  },
  innerWrapper: {
    display: 'block',
  },
  letters: {
    fontWeight: '400',
    fontSize: '15px',
  },
}))(KeyboardNumber);
