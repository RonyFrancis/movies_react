import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * [MovieItem single movieitem render]
 * @param {[object]} props [movie obbject]
 */
const MovieItem = props => (
  <div className="Movieitem">
    <h1>
      <Link to="movie">{props.movie.id}</Link>
    </h1>
  </div>
);

/**
 * [propTypes movie is object props but react will shape not object]
 * @type {Object}
 */
MovieItem.propTypes = {
  movie: PropTypes.shape.isRequired,
};
export default MovieItem;
