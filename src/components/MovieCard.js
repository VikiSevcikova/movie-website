import React from 'react';
import {Link} from 'react-router-dom';

const MovieCard = ({movie}) => {
    return (
        <div className="card col-lg-3 col-md-6 col-sm-6 movie-card">
            <Link to={`/movie/${movie.id}`} className='card-img-top'>
                {movie.poster_path ? 
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                    :
                    <div className='no-img'>{movie.title}</div>
                }
            </Link>
        </div>
    );
}

export default MovieCard;