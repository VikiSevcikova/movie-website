import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import API_KEY from '../key';

const Carousel = () => {
    const [popular, setPopular] = useState([]);
    const numberOfSlides = 5;

    useEffect(()=>{
        getPopularMovies();
    },[])

    const getPopularMovies = () => {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        fetch(url)
        .then(response => {
            if(response.status !== 200){
                console.log('There is an issue. Status code:' + response.status);
                return;
            }
            return response.json();
        })
        .then(data => {
            data.results ? setPopular(data.results.slice(0,numberOfSlides+1)) : setPopular([data]);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <>
        { popular ? 
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {popular.map((p, i) => {
                        if(i===0){
                            return <button key={p.id} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={i} className="active" aria-current="true" aria-label={p.id}></button>
                        }else{
                            return <button key={p.id} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={i} aria-label={p.id}></button>
                        }
                    })}
                </div>
                <div className="carousel-inner">
                    {popular.map((p, i) => {
                        if(i===0){
                            return  <div key={p.id} className="carousel-item active">
                                        <div className='carousel-movie-info'>
                                            <h1>{p.title}</h1>
                                            <Link  to={`/movie-website/movie/${p.id}`} className='btn'> More Details </Link>
                                        </div>
                                        <img src={`https://image.tmdb.org/t/p/original${p.backdrop_path}`} className="d-block w-100" alt="..."/>
                                    </div>
                        }else{
                            return  <div key={p.id} className="carousel-item">
                                        <div className='carousel-movie-info'>
                                            <h1>{p.title}</h1>
                                            <Link to={`/movie-website/movie/${p.id}`} className='btn'> More Details </Link>
                                        </div>            
                                        <img src={`https://image.tmdb.org/t/p/original${p.backdrop_path}`} className="d-block w-100" alt={p.title}/>
                                    </div>
                        }
                    })}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        : ''
        }
    </>
    );
};

export default Carousel;