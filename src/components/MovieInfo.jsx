import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class MovieInfo extends Component {

  render() {
    // MoviesList有可能還沒將store中的state更新，所以要先檢查(ex：網址直接進入 MovieInfo 的時候)
    if (this.props.movieInfo) {
      return (
        <div>
          <p>id:{this.props.match.params.movieId}</p>
          <p>name:{this.props.movieInfo.name}</p>
          <p>rate:{this.props.movieInfo.rate}</p>
        </div>
      );
    }

    return (<div>Loading...</div>);
  }
}

// ownProps: MovieInfo這個元件自己擁有的參數（react router 給的 match）
function mapStateToProps(state, ownProps) {
  console.log(state.content);
  const movieList = state.content.movies || [];
  console.log(movieList);
  console.log(ownProps.match.params);
  return {
    movieInfo: movieList
    .filter(m => m.id === parseInt(ownProps.match.params.movieId, 10))[0] || null,
  };
}

export default connect(mapStateToProps)(MovieInfo);

