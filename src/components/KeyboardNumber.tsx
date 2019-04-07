import React from 'react';

import Button from '@kiwicom/orbit-components/lib/Button';
import { css, withStyles } from '../theme/withStyles';

interface WithStylesProps {
  css(...styles: any[]): any;
  styles: any;
}

type Props = {
  number: number;
  letters: string;
  handleClick: (...args: any[]) => any;
};

function KeyboardNumber({ styles, number, letters, handleClick }: Props & WithStylesProps) {
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
