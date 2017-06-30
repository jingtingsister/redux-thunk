import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Hello from './Hello';
import Change from './Change';
import { changeText, buttonClick, mythunk } from '../actions';
// import Profile from './ProfileWithoutRedux';
import Profile from './Profile';

class App extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      changeText: PropTypes.func.isRequired,
      buttonClick: PropTypes.func.isRequired,
    }).isRequired,
    text: PropTypes.string.isRequired,
  }

  render() {
    // const { actions, text } = this.props;
    const actions = this.props.actions;
    const text = this.props.text;
    const contentB = this.props.contentA;

    return (
      <div>
        <Hello actions={actions} text={text} />
        <Change happyClick={actions.buttonClick} />
        <Profile getdata={actions.mythunk} content={contentB} />
      </div>
    );
  }
}

function mapStateToProps(state) { // connect之後App就可以拿到這些props，再把這些props塞到Profile組件
  return {
    text: state.text,
    contentA: state.content, // 有一個contentA的key,value是json檔裡面的content
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // fn: () => { dispatch(action); },
    // fn: bindActionCreators(action),
    // actions: bindActionCreators({
    //   changeText: changeText,
    //   buttonClick: buttonClick,
    // }, dispatch),
    actions: {
      // changeText: bindActionCreators(changeText, dispatch),
      changeText: () => { dispatch(changeText()); },
      // changeText: function changeText3() { dispatch(changeText()); },
      // buttonClick: bindActionCreators(buttonClick, dispatch),
      buttonClick: () => { dispatch(buttonClick()); },
      // buttonClick: function buttonClick3() { dispatch(changeText()); },
      mythunk: () => { dispatch(mythunk()); },
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

