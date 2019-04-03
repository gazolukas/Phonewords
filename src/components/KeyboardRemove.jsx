import React from 'react';
import PropTypes from 'prop-types';

import Button from '@kiwicom/orbit-components/lib/Button';
import { css, withStyles, withStylesPropTypes } from '../theme/withStyles';

const propTypes = {
  ...withStylesPropTypes,
  handleClear: PropTypes.func.isRequired,
};

function KeyboardRemove({ styles, handleClear }) {
  return (
    <div {...css(styles.wrapper)}>
      <Button onClick={handleClear} block circled type="secondary" size="large">
        Remove
      </Button>
    </div>
  );
}

KeyboardRemove.propTypes = propTypes;

export default withStyles(() => ({
  wrapper: {
    padding: '10px 0 10px',
  },
}))(KeyboardRemove);
