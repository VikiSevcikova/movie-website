import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import '../scss/MovieDetails.scss';
import Slider from '../components/Slider';
import API_KEY from '../key';

const MovieInfo = () => {
    const [movie, setMovie] = useState({});
    const [video, setVideo] = useState({});
    const [directors, setDirectors] = useState([]);
    const [actors, setActors] = useState([]);			 
    console.log('render movie details');

    const { movieID } = useParams();
    //when the user is on movie details page and click on similar movie
    useEffect(() => {
        getMovie(movieID);
        getVideo(movieID);
        getDirectorAndCast(movieID);	
    }, []);

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
            setDirectors(filteredCrew);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    const getVideo = (id) => {
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
            if(data && data.results){
                const youtubeVideos = data.results.filter(v => v.site === 'YouTube');
                setVideo(youtubeVideos[0]);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    const stopVideoHandler = () => {
        const trailer = document.getElementById('trailer-video');
        trailer.src = `https://www.youtube.com/embed/${video.key}`;
    }
  return (
      <div className='container content'>
          <div id='bg-fade'>
            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : ''} className="" alt={movie.title}/>
          </div>
          <div className='row movie-image-info'>
            <div className='col-xs-12 col-sm-3 col-md-3 image-lg-dev'>
                <img className='card-img-top' src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : ''} alt={movie.title}/>
            </div>
            <div className='col-xs-12 col-lg-7'>
                    <div className='col-12'>
                            <h1>{movie.title}</h1>
                    </div>
                <div className='row'>
                 
                    <div className='col-5 image-sm-dev'>
                        <img className='card-img-top' src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : ''} alt={movie.title} />
                    </div>
                    <div className='col-7 movie-info'>
                        <div className='mbottom'>
                            <span> <i className='fa fa-calendar-day'></i> <strong>{formatDate(movie.release_date)}</strong></span>
                            <span> <i className='fa fa-clock-o'></i> <strong>{movie.runtime} minutes</strong></span>
                        </div>
                        <div className='mbottom'>
                            {movie.genres ? 
                                movie.genres.map((genre, i) => (
                                `${genre.name} ${i !== (movie.genres.length - 1) ? '|' : '' } `)) 
                                : ''}
                        </div>
                        {video ? 
                            <div className='mbottom'>
                                <a className='trailer-link' href='' data-bs-toggle="modal" data-bs-target="#trailer" >
                                    <i className='fa fa-play-circle'></i> Trailer
                                </a>
                                <div id="trailer" className="modal fade">
                                    <div className="modal-dialog">
                                        <div className="video modal-content">
                                            <div className="modal-header">
                                                <button onClick={stopVideoHandler} type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                            <div className="embed-responsive embed-responsive-16by9">
                                                <iframe id="trailer-video" className="embed-responsive-item" width="560" height="315" src={`https://www.youtube.com/embed/${video.key}`} allowFullScreen></iframe>
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
                        {directors.map((d, i) => (`${d.name} ${i !== (directors.length - 1) ? ', ' : ''} `))}
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
      </div>
  );
}

export default MovieInfo;



// import React, {useState, useEffect} from 'react';
// import {useParams, Link} from 'react-router-dom';
// import '../scss/MovieDetails.scss';
// import Slider from '../components/Slider';
// import API_KEY from '../key';

// const MovieDetails = () => {
//     console.log('render movie details');

//     const [movie, setMovie] = useState({});
//     const [video, setVideo] = useState({});
//     const [directors, setDirectors] = useState([]);
//     const [actors, setActors] = useState([]);	

//     const { movieID } = useParams();

//     // useEffect(() => {
//     //     getMovie(movieID);
//     //     getVideo(movieID);
//     //     getDirectorAndCast(movieID);	
//     // },[]);

//     //when the user is on movie details page and click on similar movie
//     useEffect(() => {
//         // getMovie(movieID);
//         // getVideo(movieID);
//         // getDirectorAndCast(movieID);	
//         Promise.all([
//             fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`),
//             fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${API_KEY}&language=en-US`),
//             fetch( `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${API_KEY}&language=en-US`)
//         ]).then(async([m, v, c]) => {
//             const mm = await m.json();
//             const vv = await v.json();
//             const cc = await c.json();
//             return [mm,vv,cc]
//         }).then((response) => {
//             if(response[0]){
//                 setMovie(response[0]);
//             }
//             if(response[1] && response[1].results){
//                 const youtubeVideos = response[1].results.filter(v => v.site === 'YouTube');
//                 setVideo(youtubeVideos[0]);
//             }
//             if(response[2]){
//                 const {cast, crew} = response[2];
//                 const filteredCast = cast.filter(member => member.known_for_department === 'Acting');
//                 const filteredCrew = crew.filter(member => member.job === 'Director');
//                 setActors(filteredCast);
//                 setDirectors(filteredCrew);
//             }
//           }).catch((err) => {
//             console.log(err);
//           });
//     }, [movieID]);

//     const formatDate = (date) => {
//         const d = new Date(date);
//         return d.getFullYear().toString();
//     }

//     const getMovie = (id) => {
//         const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
//         fetch(url)
//         .then(response => {
//             if(response.status !== 200){
//                 console.log('There is an issue. Status code:' + response.status);
//                 return;
//             }
//             return response.json();
//         })
//         .then(data => {
//             setMovie(data);
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
//     }

//     const getDirectorAndCast = (id) => {
//         const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
//         fetch(url)
//         .then(response => {
//             if(response.status !== 200){
//                 console.log('There is an issue. Status code:' + response.status);
//                 return;
//             }
//             return response.json();
//         })
//         .then(data => {
//             const {cast, crew} = data;
//             const filteredCast = cast.filter(member => member.known_for_department === 'Acting');
//             const filteredCrew = crew.filter(member => member.job === 'Director');
//             setActors(filteredCast);
//             setDirectors(filteredCrew);
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
//     }

//     const getVideo = (id) => {
//         const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
//         fetch(url)
//         .then(response => {
//             if(response.status !== 200){
//                 console.log('There is an issue. Status code:' + response.status);
//                 return;
//             }
//             return response.json();
//         })
//         .then(data => {
//             if(data && data.results){
//                 const youtubeVideos = data.results.filter(v => v.site === 'YouTube');
//                 setVideo(youtubeVideos[0]);
//             }
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
//     }

//     const stopVideoHandler = () => {
//         const trailer = document.getElementById('trailer-video');
//         trailer.src = `https://www.youtube.com/embed/${video.key}`;
//     }
//   return (
//       <div className='container content'>
//           <div id='bg-fade'>
//             <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : ''} className="" alt={movie.title}/>
//           </div>
//           <div className='row movie-image-info'>
//             <div className='col-xs-12 col-sm-3 col-md-3 image-lg-dev'>
//                 <img className='card-img-top' src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : ''} alt={movie.title}/>
//             </div>
//             <div className='col-xs-12 col-lg-7'>
//                     <div className='col-12'>
//                             <h1>{movie.title}</h1>
//                     </div>
//                 <div className='row'>
                 
//                     <div className='col-5 image-sm-dev'>
//                         <img className='card-img-top' src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : ''} alt={movie.title} />
//                     </div>
//                     <div className='col-7 movie-info'>
//                         <div className='mbottom'>
//                             <span> <i className='fa fa-calendar-day'></i> <strong>{formatDate(movie.release_date)}</strong></span>
//                             <span> <i className='fa fa-clock-o'></i> <strong>{movie.runtime} minutes</strong></span>
//                         </div>
//                         <div className='mbottom'>
//                             {movie.genres && 
//                                 movie.genres.map((genre, i) => (
//                                 `${genre.name} ${i !== (movie.genres.length - 1) ? '|' : '' } `)) 
//                             }
//                         </div>
//                         {video && 
//                             <div className='mbottom'>
//                                 <a className='trailer-link' href='' data-bs-toggle="modal" data-bs-target="#trailer" >
//                                     <i className='fa fa-play-circle'></i> Trailer
//                                 </a>
//                                 <div id="trailer" className="modal fade">
//                                     <div className="modal-dialog">
//                                         <div className="video modal-content">
//                                             <div className="modal-header">
//                                                 <button onClick={stopVideoHandler} type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
//                                             </div>
//                                             <div className="modal-body">
//                                             <div className="embed-responsive embed-responsive-16by9">
//                                                 <iframe id="trailer-video" className="embed-responsive-item" width="560" height="315" src={`https://www.youtube.com/embed/${video.key}`} allowFullScreen></iframe>
//                                             </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         }
//                     </div>
//                     </div>
//                 <div className='col'>
//                     <Link to={`/movie/${movie.id}/movie-seat`} className='tickets-btn btn btn-primary'>
//                         Get Tickets
//                     </Link>
//                 </div>
//             </div>
//           </div>
//           <div className='border-line'></div>
//           <div className='row'>
//             <div className='col-md-6 col-xs-12'>
//                 <h2>Overview</h2>
//                 <p>
//                     {movie.overview}
//                 </p>
//             </div>
//             <div className='col-md-6 col-xs-12'>
//                 <div className='col-12'>
//                     <h2>Director</h2>
//                     <p>
//                         {directors.map((d, i) => (`${d.name} ${i !== (directors.length - 1) ? ', ' : ''} `))}
//                     </p>
//                 </div>
//                 <div className='col-12'>
//                     <h2>Cast</h2>
//                     <p>
//                         {actors.map((a, i) => (`${a.name} ${i !== (actors.length - 1) ? ', ' : ''} `))}
//                     </p>
//                 </div>
//             </div>
//                 <Slider category='similar' movieID={movieID}/>
//           </div>
//       </div>
//   );
// }

// export default MovieDetails;