import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Profile extends Component {
  static propTypes = {
    getdata: PropTypes.func.isRequired,
    content: PropTypes.shape({
      movies: PropTypes.array.isRequired,
    }).isRequired,
  }

  // app 會把 content 傳進來，所以寫 defaultProps 沒用，沒辦法改善 map of undefined 的 error
  // static defaultProps = {
  //   content: {
  //     movies: [],
  //     a: 1,
  //   },
  // }


  // componentWillMount() {
  //   const i = this;
  //   fetch('http://www.mocky.io/v2/595346bc270000c300b2a9f0', {
  //     method: 'get',
  //     cors: true,
  //   }).then(response => response.json()).then((json) => {
  //     i.setState({
  //       content: {
  //         ...json,
  //         movies: json.movies.map((movie, index) => ({
  //           id: index + 1,
  //           name: movie,
  //         })),
  //       },
  //       loading: false,
  //     });
  //   });
  // }

  handleClick = () => {
    this.props.getdata();
  };

  renderLoading() {
    return (
      <p>Loading...</p>
    );
  }

  renderMovieList() {
    if (this.props.content.movies) { // this.props.content.movies是父組件App傳進來的
      const listItems = this.props.content.movies.map(movie => (
        <li key={movie.id}>
          {movie}
        </li>
      ));
      return (
        <ul>{listItems}</ul>
      );
    }
  }

  render() {
    // console.log('state: ', this.state.content);
    // console.log('Have movie list?: ', Array.isArray(this.state.content.movies));
    // if (this.state.loading) {
    //   console.log('here');
    //   return this.renderLoading();
    // }
    // const movieList = this.renderMovieList(this.props.content.movies);
    return (
      <div>
        <p>
          name:{this.props.content.name}
          <br />gender:{this.props.content.gender}
          <br />job:{this.props.content.job}
          <br />relationship:{this.props.content.relationship}
        </p>
        <button onClick={this.handleClick}>Hot Movies</button>
        {this.renderMovieList()}
      </div>
    );
  }
}


export default Profile;
