import React from 'react';

import Button from '@kiwicom/orbit-components/lib/Button';
import { css, withStyles } from '../theme/withStyles';

interface WithStylesProps {
  css(...styles: any[]): any;
  styles: any;
}

type Props = {
  handleClear: (...args: any[]) => any;
};

function KeyboardRemove({ styles, handleClear }: Props & WithStylesProps) {
  return (
    <div {...css(styles.wrapper)}>
      <Button onClick={handleClear} block circled type="secondary" size="large">
        Remove
      </Button>
    </div>
  );
}

export default withStyles(() => ({
  wrapper: {
    padding: '10px 0 10px',
  },
}))(KeyboardRemove);
