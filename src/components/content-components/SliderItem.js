import React from 'react';
import {Link} from 'react-router-dom';

import mk from '../../images/mk.jpg';


const SliderItem = ({movie}) => {
    return (
        <div className='item'>
            <Link to={`/movie/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.title}/>
            </Link>
        </div>
    );
}

export default SliderItem;