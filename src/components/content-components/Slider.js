import React, {useEffect, useState} from 'react';
import SliderItem from './SliderItem';
import API_KEY from '../../key';
import Movie from '../movie-seat-components/Movie';

const Slider = ({category, movieID}) => {
    const [movies, setMovies] = useState([]);

    const categoryTitleHandler = (category) => {
        switch(category){
            case 'latest': return 'Latest';
            case 'now_playing': return 'Now Playing';
            case 'popular': return 'Popular';
            case 'top_rated': return 'Top Rated';
            case 'upcoming': return 'Upcoming';
            default: return '';
        }
    }

    useEffect(() => {
        getMovies(category);
        console.log(category);
        console.log(movies);
    }, []);

    const getMovies = (category) => {
        console.log('fetch API');
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
            console.log('MOVIES:'+movies);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <div className='slider-wrap'>
            <h1>{categoryTitleHandler(category)}</h1>
            <div className="slider">
                {movies.map((movie) => (
                    <SliderItem key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    );
}

export default Slider;