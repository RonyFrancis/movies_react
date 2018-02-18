import React, { Component } from 'react';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/v1/movies/1')
      .then(response => response.json())
      .then((data) => { this.setState({ movie: data.movie }); })
      .catch(err => console.error(this.props, err.toString()));
  }

  render() {
    const movieDetail = (
      <div>
        <h1>
          { this.state.movie.id }
        </h1>
        <p>
          { this.state.movie.name }
        </p>
        <p>
          { this.state.movie.description }
        </p>
        <p>
          { this.state.movie.avg_rating }
        </p>
      </div>
    );
    return (
      <div>
        Movie
        { movieDetail }
      </div>
    );
  }
}

export default Movie;
