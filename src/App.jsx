import React, { Component } from 'react';

import Input from './components/Input';
import Keyboard from './components/Keyboard';
import KeyboardRemove from './components/KeyboardRemove';
import Phonewords from './components/Phonewords';

import { css, withStyles, withStylesPropTypes } from './theme/withStyles';

const propTypes = {
  ...withStylesPropTypes,
};

class App extends Component {
  state = {
    numbers: '',
    phonewords: [],
    error: false,
  };

  componentWillUpdate = () => {
    clearInterval(this.timerID);
  }
        
  handleChange = (numbers) => {
    this.setState({ numbers }, this.fetchPhonewords);
  };

  handleClick = (number) => {
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
      this.timerID = setInterval(() => this.setState({ error: false }), 3000);
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

App.propTypes = propTypes;

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
