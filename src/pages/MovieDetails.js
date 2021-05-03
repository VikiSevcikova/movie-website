import {React, useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import '../scss/MovieDetails.scss';
import mk from '../images/mk.jpg';
import banner from '../images/mk-banner.jpg';
import Slider from '../components/content-components/Slider';
import API_KEY from '../key';

const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const [similarMovies, setSimilarMovies] = useState([]);

    const { movieID } = useParams();
    console.log(movieID);
    const clickHandler = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        getMovie(movieID);
        getSimilarMovies(movieID);
    }, []);

    useEffect(() => {
        getMovie(movieID);
        getSimilarMovies(movieID);
    }, [movieID]);

    const getMovie = (id) => {
        console.log('fetch API');
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        fetch(url)
        .then(response => {
            if(response.status !== 200){
                console.log('There is an issue. Status code:' + response.status);
                return;
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            setMovie(data);
            console.log('MOVIES:'+movie);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    const getSimilarMovies = (id) => {
        console.log('fetch similar'+id);
        const url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US`
        fetch(url)
        .then(response => {
            if(response.status !== 200){
                console.log('There is an issue. Status code:' + response.status);
                return;
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            setSimilarMovies(data.results ? data.results : [data]);
            console.log('Similar MOVIES:'+similarMovies);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

  return (
      <>
      <div className='container content'>
          <div id='bg-fade'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="" alt={movie.title}/>
          </div>
          <div className='row movie-image-info'>
            <div className='col-xs-12 col-sm-3 col-md-3 image-lg-dev'>
                <img className='card-img-top' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            </div>
            <div className='col-xs-12 col-md-7 col-md-6 pad-lr-20'>
                    <div className='col-12'>
                            <h1>{movie.title}</h1>
                    </div>
                <div className='row'>
                 
                    <div className='col-5 image-sm-dev'>
                        <img className='card-img-top' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    </div>
                    <div className='col-7'>
                        <div>
                            <span><strong>{movie.release_date}</strong></span>
                        </div>
                        <div>
                            <span><i className='fa fa-clock-o'></i> <strong>{movie.runtime} minutes</strong></span>
                        </div>
                        <div>
                            {/* {movie.genres.map((genre) => (
                                <span>genre.name</span>
                            ))} */}
                        </div>
                        <div>
                            <a href='#' data-bs-toggle="modal" data-bs-target="#ratingsWarnings">
                                <i className='fa fa-info-circle'></i> Ratings & Warnings
                            </a>
                            <div class="modal fade" id="ratingsWarnings" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="ratingsWarningsLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="staticBackdropLabel">Ratings & Warnings</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ...
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='trailer-link'>
                            <a onClick={clickHandler} href='#' data-bs-toggle="modal" data-bs-target="#trailer" data-src="https://www.youtube.com/embed/Jfrjeg26Cwk">
                                <i className='fa fa-play-circle'></i> Trailer
                            </a>
                            <div id="trailer" class="modal fade">
                                <div class="modal-dialog">
                                    <div class="video modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                        <div class="embed-responsive embed-responsive-16by9">
                                            <iframe id="cartoonVideo" class="embed-responsive-item" width="560" height="315" src="//www.youtube.com/embed/YE7VzlLtp-4" allowfullscreen></iframe>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                    </div>
                    </div>
                <div className='col'>
                    <Link to='/movie-seat' className='tickets-btn btn btn-primary'>
                        Get Tickets
                    </Link>
                </div>
            </div>
          </div>
          <div className='border-line'></div>
          <div className='row'>
            <div className='col-md-6 col-xs-12'>
                <h2>Overview</h2>
                <p>
                    {movie.overview}
                </p>
            </div>
            <div className='col-md-6 col-xs-12'>
                <div className='col-12'>
                    <h2>Director</h2>
                    <p>
                        First Last
                    </p>
                </div>
                <div className='col-12'>
                    <h2>Cast</h2>
                    <p>
                        List of names, List of names,List of names,List of names,List of names,List of names,List of names,List of names,List of names,List of names,List of names,List of names,List of names
                    </p>
                </div>
            </div>
          </div>
          <div className='slider-wrap'>
            <h2>Related Movies</h2>
            <Slider category='similar' movieID={movieID}/>
          </div>
      </div>
      </>
  );
}

export default MovieDetails;
