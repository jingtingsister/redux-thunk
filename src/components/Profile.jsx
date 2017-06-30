import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Profile extends Component {
  static propTypes = {
    getdata: PropTypes.func.isRequired,
  }

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

  renderLoading() {
    return (
      <p>Loading...</p>
    );
  }

  renderMovieList() {
    if (this.props.content.movies) {
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

  handleClick = () => {
    this.props.getdata();
  };

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
