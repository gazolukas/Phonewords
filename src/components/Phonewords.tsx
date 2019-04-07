import React from 'react';

import Alert from '@kiwicom/orbit-components/lib/Alert';
import { css, withStyles } from '../theme/withStyles';

interface WithStylesProps {
  css(...styles: any[]): any;
  styles: any;
}

type Props = {
  phonewords: string[];
};

function Phonewords({ styles, phonewords }: Props & WithStylesProps) {
  return (
    <div {...css(styles.outerWrapper)}>
      <Alert title="Phonewords">
        {phonewords.map((word: String) => (
          <div {...css(styles.innerWrapper)} key={word}>
            {word}
          </div>
        ))}
      </Alert>
    </div>
  );
}

export default withStyles(() => ({
  outerWrapper: {
    padding: '10px 0 0',
  },
  innerWrapper: {
    padding: '0 10px',
    display: 'inline-block',
  },
}))(Phonewords);
