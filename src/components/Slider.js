import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import SliderItem from './SliderItem';
import {categoryTitleHandler} from './CommonFunctions';
import API_KEY from '../key';

const Slider = ({category, movieID}) => {
    const [movies, setMovies] = useState([]);
    // //when the user is on movie details page and click on similar movie
    useEffect(() => {
        getMovies(category);
        if(document.querySelector('.slider'))
        document.querySelector('.slider').scrollLeft = 0;
    },[movieID]);

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

    const [disableClick, setDisableClick] = useState(false);

    const [isDown, setIsDown] = useState(false);
    useEffect(()=>{
        if(isDown){
            document.addEventListener ('mouseup', mouseUpHandler, true);
            document.addEventListener ('mousemove', mouseMoveHandler, true);
        }
    },[isDown])

    const mouseDownHandler = (e) => {
        e.preventDefault ();
        setIsDown(true);
    }

    const mouseUpHandler = (e) => {
        setIsDown(false);
        document.removeEventListener ('mouseup', mouseUpHandler, true);
        document.removeEventListener ('mousemove', mouseMoveHandler, true);
        //after 100ms enable the click event for slider item
        setTimeout(() => setDisableClick(false), 100);
    }

    const mouseMoveHandler = (e) => {
        if(!isDown) return;
        e.preventDefault();
        setDisableClick(true);
        //when the user move the slider, and release the item, it is needed to disable the click event, 
        //to not be able to click on slider item where user stop moving the slider
        e.target.scrollLeft -= e.movementX * 3;
    }

    const scrollHandler = (direction) => (e) => {
        const slider = e.target.parentElement;
        direction === 'left' ? slider.scrollLeft -= 1000 : slider.scrollLeft += 1000;
    }

    return (
        <>
            {movies.length !== 0 && 
                <div className='slider-wrap'>
                    <Link className={category === 'similar' ? 'disable' : ''} to={category !== 'similar' ? `/category/${category}` : '#'}>
                        <h1>{categoryTitleHandler(category)}</h1> 
                    </Link>
                    <div onMouseDown={mouseDownHandler} className='slider'>
                        <i onClick={scrollHandler('left')} className="left-arrow carousel-control-prev-icon"></i>

                        {movies.map((movie) => (
                            <SliderItem key={movie.id} movie={movie} setMovies={setMovies} disableClick={disableClick}/>
                        ))}
                        
                        <i onClick={scrollHandler('right')} className="right-arrow carousel-control-next-icon"></i>

                    </div>
                </div>
            }
        </>
    );
}

export default Slider;