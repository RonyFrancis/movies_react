import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';

/**
 * [Movies: list all movies]
 * @extends Component
 */
class Movies extends Component {
  /**
   * [constructor: intialise state ]
   * @param {[object]} props [props value passed to the class]
   */
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      movies: [],
    };
  }

  /**
 * [componentDidMount fetches movies list from the api and assign it to state ]
 * @return {[object]} [states]
 */
  componentDidMount() {
    fetch('http://localhost:3000/v1/movies')
      .then(response => response.json())
      .then(data => { this.setState({ movies: data }); })
      .catch(err => console.error(this.props.name, err.toString()));
  }

  /**
   * [render: print html output ]
   * @return {[html]} [output of the class]
   */
  render() {
    const movies = this.state.movies.map((item) => {
      return (
        <MovieItem movie={item} />
      );
    });
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hello { this.state.name }
        </p>
        <button onClick={() => { this.setState({ name: 'tony' }); }}>
           change1
        </button>
        <div>
          {movies}
        </div>
      </div>
    );
  }
}

/**
 * [list of propTypes]
 * @type {object}
 */
Movies.propTypes = {
  name: PropTypes.string.isRequired, // name is required of string type
};
export default Movies;

// var Movies = createReactClass({
//
//   /**
//    * initialise state for react
//    * @return json [empty movies_list]
//    */
//   getInitialState() {
//     return { items: [] };
//   },
//
//   /**
//    * update movies list
//    * @return json [movielist]
//    */
//   componentDidMount() {
//     $.getJSON('/v1/movies', (response) => {
//       this.setState({ items: response });
//     });
//   },
//
//   /**
//    * render the list
//    * @return html [rendered output]
//    */
//   render: function () {
//     var movies = this.state.items.map(item => {
//       return (
//         <div className='Movieitem' key={item.id}>
//           <h1>
//              <a href={'/v1/movie/' + item.id}>{item.name} </a>
//           </h1>
//           <p>
//             {item.description}
//           </p>
//         </div>
//       );
//     });
//     return (
//       <div>
//         {movies}
//       </div>
//     );
//   },
// });
