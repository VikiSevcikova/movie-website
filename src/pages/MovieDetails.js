import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import '../scss/MovieDetails.scss';
import Slider from '../components/content-components/Slider';
import API_KEY from '../key';

const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const [video, setVideo] = useState({});
    const [director, setDirector] = useState([]);
    const [actors, setActors] = useState([]);			 
    const [similarMovies, setSimilarMovies] = useState([]);

    const { movieID } = useParams();
    const clickHandler = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        getMovie(movieID);
        getVideo(movieID);
        getDirectorAndCast(movieID);		   
        getSimilarMovies(movieID);
    }, []);

    useEffect(() => {
        getMovie(movieID);
        getVideo(movieID);
        getDirectorAndCast(movieID);		   
        getSimilarMovies(movieID);
    }, [movieID]);

    const formatDate = (date) => {
        const d = new Date(date);
        return d.getFullYear().toString();
    }

    const getMovie = (id) => {
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
            setMovie(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    const getDirectorAndCast = (id) => {
        const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
        fetch(url)
        .then(response => {
            if(response.status !== 200){
                console.log('There is an issue. Status code:' + response.status);
                return;
            }
            return response.json();
        })
        .then(data => {
            const {cast, crew} = data;
            const filteredCast = cast.filter(member => member.known_for_department === 'Acting');
            const filteredCrew = crew.filter(member => member.job === 'Director');
            setActors(filteredCast);
            setDirector(filteredCrew);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    const getSimilarMovies = (id) => {
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

    const getVideo = (id) => {
        console.log('fetch similar'+id);
        const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
        fetch(url)
        .then(response => {
            if(response.status !== 200){
                console.log('There is an issue. Status code:' + response.status);
                return;
            }
            return response.json();
        })
        .then(data => {
            if(data.results){
                const youtubeVideos = data.results.filter(v => v.site === 'YouTube');
                setVideo(youtubeVideos[0]);
                console.log(youtubeVideos[0].key);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
  return (
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
                            <span> <i className='fa fa-calendar-day'></i> <strong>{formatDate(movie.release_date)}</strong></span>
                            <span> <i className='fa fa-clock-o'></i> <strong>{movie.runtime} minutes</strong></span>
                        </div>
                        <div>
                            {movie.genres ? 
                                movie.genres.map((genre, i) => (
                                `${genre.name} ${i !== (movie.genres.length - 1) ? '|' : '' } `)) 
                                : ''}
                        </div>
                        {video ? 
                            <div className='trailer-link'>
                                <a onClick={clickHandler} href='#' data-bs-toggle="modal" data-bs-target="#trailer" >
                                    <i className='fa fa-play-circle'></i> Trailer
                                </a>
                                <div id="trailer" className="modal fade">
                                    <div className="modal-dialog">
                                        <div className="video modal-content">
                                            <div className="modal-header">
                                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                            <div className="embed-responsive embed-responsive-16by9">
                                                <iframe id="cartoonVideo" className="embed-responsive-item" width="560" height="315" src={`https://www.youtube.com/embed/${video.key}`} allowFullScreen></iframe>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : ''    
                        }
                    </div>
                    </div>
                <div className='col'>
                    <Link to={`/movie/${movie.id}/movie-seat`} className='tickets-btn btn btn-primary'>
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
                        {director.map((d, i) => (`${d.name} ${i !== (director.length - 1) ? ', ' : ''} `))}
                    </p>
                </div>
                <div className='col-12'>
                    <h2>Cast</h2>
                    <p>
                        {actors.map((a, i) => (`${a.name} ${i !== (actors.length - 1) ? ', ' : ''} `))}
                    </p>
                </div>
            </div>
          </div>
          <div className='slider-wrap'>
            <h2>Related Movies</h2>
            <Slider category='similar' movieID={movieID}/>
          </div>
      </div>
  );
}

export default MovieDetails;
