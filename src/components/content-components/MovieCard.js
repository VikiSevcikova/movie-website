import React from 'react';
import {Link} from 'react-router-dom';
import mk from '../../images/mk.jpg';

const MovieCard = ({id, src}) => {
    return (
        <div className="card col-lg-2 col-md-4 col-sm-6 movie-card">
            <Link to={`/movie/${id}`}><img src={src ? src : mk} className="card-img-top" alt="Mortal Kombat"/></Link>
        </div>
    );
}

export default MovieCard;