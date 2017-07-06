import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { mythunk } from '../actions';

class Profile extends Component {

  componentWillMount() {
    this.handlecontent();
  }

  handlecontent = () => {
    this.props.actions.mythunk();
  }

  // 空物件.name是undefined（不會報錯），undefined.name才會報錯
  // contentA可能是空物件或json，所以沒有寫if else直接取.name不會報錯
  render() {
    return (
      <div>
        <p>
          name:{this.props.contentA.name}
          <br />gender:{this.props.contentA.gender}
          <br />job:{this.props.contentA.job}
          <br />relationship:{this.props.contentA.relationship}
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contentA: state.content,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      mythunk: () => { dispatch(mythunk()); },
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
