import React from 'react';

const Movie = ({movie}) => {
    return(
        <option value={movie.id}>{movie.name} (${movie.price})</option>
    );
};

export default Movie;