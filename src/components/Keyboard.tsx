import React from 'react';

import KeyboardNumber from './KeyboardNumber';
import BUTTONS from '../constants/keyboard';
import { css, withStyles } from '../theme/withStyles';

type WithStylesProps = {
  styles: any;
}

type Props = {
  handleClick: (...args: any[]) => any;
};

function Keyboard({ styles, handleClick }: Props & WithStylesProps) {
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

export default withStyles(() => ({
  wrapper: {
    padding: '10px 0 0',
    margin: '0 -10px',
    display: 'flex',
    flexFlow: 'row wrap',
  },
}))(Keyboard);
