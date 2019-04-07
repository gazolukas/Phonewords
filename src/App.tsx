import React from 'react';

import Input from './components/Input';
import Keyboard from './components/Keyboard';
import KeyboardRemove from './components/KeyboardRemove';
import Phonewords from './components/Phonewords';

import { css, withStyles } from './theme/withStyles';

interface WithStylesProps {
  css(...styles: any[]): any;
  styles: any;
}

type State = {
  numbers: string;
  phonewords: string[];
  error: boolean;
};

class App extends React.Component<State & WithStylesProps> {
  state = {
    numbers: '',
    phonewords: [],
    error: false,
  };

  handleChange = (numbers: State) => {
    this.setState({ numbers }, this.fetchPhonewords);
  };

  handleClick = (number: number) => {
    const { numbers } = this.state;
    if (isNaN(number)) return;
    this.setState({ numbers: numbers + number }, this.fetchPhonewords);
  };

  handleClear = () => {
    this.setState({
      numbers: '',
      phonewords: [],
    });
  };

  async fetchPhonewords() {
    const { numbers } = this.state;

    if (numbers === '#' || numbers === '') {
      this.setState({ phonewords: [] });
      return;
    }

    try {
      const response = await fetch(`/api/phonewords?numbers=${numbers}`);
      const phonewords = await response.json();
      this.setState({ phonewords });
    } catch (e) {
      this.setState({ error: true });
    }
  }

  render() {
    const { styles } = this.props;
    const { error, numbers, phonewords } = this.state;

    return (
      <div {...css(styles.wrapper)}>
        <Input value={numbers} handleChange={this.handleChange} />
        {error && <div {...css(styles.errorMsg)}>Uuups there was an error!</div>}
        <Keyboard handleClick={this.handleClick} />
        {numbers && <KeyboardRemove handleClear={this.handleClear} />}
        {phonewords.length > 0 && <Phonewords phonewords={phonewords} />}
      </div>
    );
  }
}

export default withStyles(() => ({
  wrapper: {
    width: '400px',
    margin: '0 auto',
  },
  errorMsg: {
    color: 'red',
    paddingTop: '20px',
  },
}))(App);
