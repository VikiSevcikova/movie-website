import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import SliderItem from './SliderItem';
import {categoryTitleHandler} from './CommonFunctions';
import API_KEY from '../key';

const Slider = ({category, movieID}) => {
    const [movies, setMovies] = useState([]);
    // const [isDown, setIsDown] = useState(false);
    const [disableClick, setDisableClick] = useState(false);
    
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

    useEffect(() => {
        getMovies(category);
        return () => setMovies([]);
    }, []);

    //when the user is on movie details page and click on similar movie
    useEffect(() => {
        getMovies(category);
        document.querySelector('.slider').scrollLeft = 0;
    }, [movieID]);

    let isDown = false;

    const mouseDownHandler = (e) => {
        e.preventDefault ();
        isDown = true;
        document.addEventListener ('mouseup', mouseUpHandler, true);
        document.addEventListener ('mousemove', mouseMoveHandler, true);
        console.log('down'+isDown);
    }

    const mouseUpHandler = (e) => {
        isDown = false;
        console.log('up'+isDown);
        setTimeout(() => setDisableClick(false), 100);
        document.removeEventListener ('mouseup', mouseUpHandler, true);
        document.removeEventListener ('mousemove', mouseMoveHandler, true);
        //after 100ms enable the click event for slider item
    }

    const mouseMoveHandler = (e) => {
        if(!isDown) return;
        e.preventDefault();
        //when the user move the slider, and release the item, it is needed to disable the click event, 
        //to not be able to click on slider item where user stop moving the slider
        setDisableClick(true);
        e.target.scrollLeft -= e.movementX * 3;
        console.log('move');
    }

    const scrollHandler = (direction) => (e) => {
        const slider = e.target.parentElement;
        direction === 'left' ? slider.scrollLeft -= 1000 : slider.scrollLeft += 1000;
    }

    return (
        <div className='slider-wrap'>
            <Link className={category === 'similar' ? 'disable' : ''} to={category !== 'similar' ? `/category/${category}` : '#'}>
                <h1>{categoryTitleHandler(category)}</h1> 
            </Link>
            <div onMouseDown={mouseDownHandler} className={`slider ${isDown ? 'grab' : ''}`}>
                <i onClick={scrollHandler('left')} className="left-arrow carousel-control-prev-icon"></i>

                {movies.map((movie) => (
                    <SliderItem key={movie.id} movie={movie} disableClick={disableClick}/>
                ))}
                
                <i onClick={scrollHandler('right')} className="right-arrow carousel-control-next-icon"></i>

            </div>
        </div>
    );
}

export default Slider;