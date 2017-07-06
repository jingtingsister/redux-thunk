import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Change extends Component {
  static propTypes = {
    happyClick: PropTypes.func.isRequired,
  }
  handleClick = () => {
    this.props.happyClick();
  }

  render() {
    return (
      <button onClick={this.handleClick}>change</button>
    );
  }
}

export default Change;
