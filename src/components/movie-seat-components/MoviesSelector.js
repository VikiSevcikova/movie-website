import React from 'react';
import Movie from './Movie';

const MovieSelector = ({selectedMovie}) => {
    // const selectorHandler = (e) => {
    //     setSelectedMovie(parseInt(e.target.value));
    // };

    return(
        // <form className='movie-selector'>
        //     <label htmlFor='movies'>Choose movie:</label>
        //     <select onChange={selectorHandler} value={selectedMovie} id='movies' name='movielist'>
        //         {movieList.map(movie => (
        //                 <Movie key={movie.id} movie={movie}/>
        //             ))}
        //     </select>
        // </form>
        <h2>{selectedMovie.title}</h2>
    );
};

export default MovieSelector;