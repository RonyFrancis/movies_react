import React from 'react';
import PropTypes from 'prop-types';

/**
 * [MovieItem single movieitem render]
 * @param {[object]} props [movie obbject]
 */
const MovieItem = props => (
  <div className="Movieitem">
    <h1>
      {props.movie.id}
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
