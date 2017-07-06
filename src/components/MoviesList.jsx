import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { mythunk } from '../actions';
import MovieInfo from './MovieInfo';

class MoviesList extends Component {

  handlecontent = () => {
    this.props.actions.mythunk();
  }

  componentWillMount() {
    this.handlecontent();
  }

  renderMovieList() {
    // 跑map前要先檢查mythunk抓到資料沒，不然會報錯
    if (this.props.contentA.movies) {
      const listItems = this.props.contentA.movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/moviesInfo/${movie.id}`}>
            {movie.name}
          </Link>
        </li>
      ));
      return (
        <ul>{listItems}</ul>
      );
    }
  }
  render() {
    return (

      <div>
        <div>{this.renderMovieList()}</div>

        <Route path={'/movies/moviesInfo/:movieId'} component={MovieInfo} />
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

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);

