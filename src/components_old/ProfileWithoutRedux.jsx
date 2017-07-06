import React, { Component } from 'react';

class Profile extends Component {

  state = {
    loading: true,
    content: {},
  }

  // componentWillMount() {
  //   console.log('before this.getData()');
  //   this.prepareData();
  //   console.log('after this.getData()');
  // }

  // async getData() {
  //   console.log('getData() start');
  //   try {
  //     const response = await fetch(
  //       'http://www.mocky.io/v2/595346bc270000c300b2a9f0',
  //       {
  //         method: 'get',
  //         cors: true,
  //       },
  //     );
  //     const json = await response.json();
  //     console.log('getData() finish');
  //     return json;
  //   } catch (err) {
  //     console.log('Errorrrrrr: ', err.message);
  //   }
  // }

  // async prepareData() {
  //   const json = await this.getData();
  //   this.setState({
  //     content: {
  //       ...json,
  //       movies: json.movies.map((movie, index) => ({
  //         id: index + 1,
  //         name: movie,
  //       })),
  //     },
  //     loading: false,
  //   });
  // }

  renderLoading() {
    return (
      <p>Loading...</p>
    );
  }

  renderMovieList(props) {
    const listItems = props.map(movie => (
      <li key={movie.id}>
        {movie.name}
      </li>
    ));
    return (
      <ul>{listItems}</ul>
    );
  }

  render() {
    console.log('state: ', this.state.content);
    console.log('Have movie list?: ', Array.isArray(this.state.content.movies));
    if (this.state.loading) {
      console.log('here');
      return this.renderLoading();
    }

    return (
      <div>
        <p>
          name:{this.state.content.name}
          <br />gender:{this.state.content.gender}
          <br />job:{this.state.content.job}
          <br />relationship:{this.state.content.relationship}
        </p>
        <h2>Movies</h2>
        {this.renderMovieList(this.state.content.movies)}
      </div>
    );
  }
}

export default Profile;
