import React from 'react';
import {Link} from 'react-router-dom';

const SliderItem = ({movie, disableClick}) => {
    return (
        <div className='item'>
            <Link to={`/movie-website/movie/${movie.id}`} className={`${disableClick ? 'disable' : '' }`}>
                <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : ''} alt={movie.title}/>
            </Link>
        </div>
    );
}

export default SliderItem;