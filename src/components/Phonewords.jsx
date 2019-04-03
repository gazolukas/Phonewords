import React from 'react';
import PropTypes from 'prop-types';

import Alert from '@kiwicom/orbit-components/lib/Alert';
import { css, withStyles, withStylesPropTypes } from '../theme/withStyles';

const propTypes = {
  ...withStylesPropTypes,
  phonewords: PropTypes.arrayOf(PropTypes.node).isRequired,
};

function Phonewords({ styles, phonewords }) {
  return (
    <div {...css(styles.outerWrapper)}>
      <Alert title="Phonewords">
        {phonewords.map((word) => (
          <div {...css(styles.innerWrapper)} key={word}>
            {word}
          </div>
        ))}
      </Alert>
    </div>
  );
}

Phonewords.propTypes = propTypes;

export default withStyles(() => ({
  outerWrapper: {
    padding: '10px 0 0',
  },
  innerWrapper: {
    padding: '0 10px',
    display: 'inline-block',
  },
}))(Phonewords);
