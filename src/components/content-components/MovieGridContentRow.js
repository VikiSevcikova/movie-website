import React from 'react';
import MovieCard from './MovieCard';
import mk from '../../images/mk.jpg';
import wm from '../../images/wm.jpg';


const MovieGridTabsContentRow = () => {
    return (
        <div className="row movie-grid-row">
            <MovieCard id={1} src={mk}/>
            <MovieCard id={2} src={wm}/>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </div>
    );
}

export default MovieGridTabsContentRow;