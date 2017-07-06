import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { changeText } from '../actions';

class Home extends Component {

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

function mapStateToProps(state) {
  return {
    text: state.text,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      changeText: bindActionCreators(changeText, dispatch),
    },
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);

