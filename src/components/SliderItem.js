import React from 'react';
import {Link} from 'react-router-dom';

const SliderItem = ({movie, disableClick}) => {
    return (
        <div className='item'>
            <Link to={`/movie/${movie.id}`} className={`${disableClick ? 'disable' : '' }`}>
                {movie.poster_path ? 
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                    :
                    <div className='no-img'>{movie.title}</div>
                }
            </Link>
        </div>
    );
}

export default SliderItem;