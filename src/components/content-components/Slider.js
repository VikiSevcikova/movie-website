import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import SliderItem from './SliderItem';
import {categoryTitleHandler} from '../CommonFunctions';
import API_KEY from '../../key';

const Slider = ({category, movieID}) => {
    const [movies, setMovies] = useState([]);
    
    const getMovies = (category) => {
        const url = `https://api.themoviedb.org/3/movie/${movieID ? movieID+'/' : ''}${category}?api_key=${API_KEY}&language=en-US&page=1`
        fetch(url)
        .then(response => {
            if(response.status !== 200){
                console.log('There is an issue. Status code:' + response.status);
                return;
            }
            return response.json();
        })
        .then(data => {
            data.results ? setMovies(data.results) : setMovies([data]);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    let isDown = false;

    useEffect(() => {
        getMovies(category);
        return () => setMovies([]);
    }, []);

    useEffect(() => {
        getMovies(category);
    }, [movieID]);

   

    const mouseDownHandler = () => {
        isDown = true;
        document.addEventListener ('mousemove', mouseMoveHandler, true);
        document.addEventListener ('mouseup', mouseUpHandler, true);
    }

    const mouseUpHandler = () => {
        isDown = false;
        document.removeEventListener ('mousemove', mouseMoveHandler, true);
    }

    const mouseMoveHandler = (e) => {
        if(!isDown) return;
        e.preventDefault();
        e.target.scrollLeft -= e.movementX * 10;
    }

    const scrollHandler = (direction) => (e) => {
        const slider = e.target.parentElement;
        direction === 'left' ? slider.scrollLeft -= 1000 : slider.scrollLeft += 1000;
    }

    return (
        <div className='slider-wrap'>
            <Link to={`/category/${category}`}> <h1>{categoryTitleHandler(category)}</h1> </Link>
            <div onMouseDown={mouseDownHandler} className='slider'>
                <i onClick={scrollHandler('left')} className="left-arrow carousel-control-prev-icon"></i>

                {movies.map((movie) => (
                    <SliderItem key={movie.id} movie={movie}/>
                ))}
                
                <i onClick={scrollHandler('right')} className="right-arrow carousel-control-next-icon"></i>

            </div>
        </div>
    );
}

export default Slider;