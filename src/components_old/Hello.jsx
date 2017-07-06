import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hello extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    actions: PropTypes.shape({
      changeText: PropTypes.func.isRequired,
      buttonClick: PropTypes.func.isRequired,
    }).isRequired,
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.actions.changeText();
  }

  render() {
    return (
      <h1>
        <span role="presentation" onClick={this.handleClick}>
          { this.props.text }
        </span>
      </h1>
    );
  }
}

export default Hello;
