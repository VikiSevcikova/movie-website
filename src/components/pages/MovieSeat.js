import React, {useState, useEffect} from 'react';
import MovieSelector from '../movie-seat-components/MoviesSelector';
import Showcase from '../movie-seat-components/Showcase';
import Seats from '../movie-seat-components/Seats';
import TotalPrice from '../movie-seat-components/TotalPrice';
import './../../scss/MovieSeat.scss';

const MovieSeat = () => {
  const ticketTypes = [{ id: 1, name: 'Adult', price: 12 },
    { id: 2, name: 'Senior', price: 10 },
    { id: 3, name: 'Student', price: 8 },
    { id: 4, name: 'Kid', price: 6 }
  ];
  
  const [localMovieSeat, setLocalMovieSeat] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [occupiedSeats, setOccupiedSeats] = useState(['E4', 'E5', 'C9', 'C10']);
  const [totalPrice, setTotalPrice] = useState(10);
  const [seats, setSeats] = useState([]);

//dynamically load seats
  const loadSeats = () => {
    let numberOfSeatsInRow = 10;
    let rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

    let seatArray = Array.from(rows, () => []);

    for(let i = 0; i < rows.length; i++){
      for (let j = 0; j < numberOfSeatsInRow; j++) {
        let id = rows[i] + (j+1);
        seatArray[i][j] = {'id': id, 'status': statusHandler(id)};  
      }
    }
    setSeats(seatArray);
  };

  //get the status of seat, if the id is in selectedSeats array then return 'selected', if it is inside occupiedSeats array then return 'occupied' else return empty '' 
  const statusHandler = (id) => {
    if(selectedSeats.some(selected => selected === id)){
      return 'selected';
    }else if(occupiedSeats.some(occupied => occupied === id)){
      return 'occupied';
    }else{
      return '';
    }
  };

//get selected movie and selected seats from local storage
  const getLocalSelectedMovieSeats = () => {
    let selectedMovieLocal;
    if(localStorage.getItem('selectedMovie') === null){
      localStorage.setItem('selectedMovie', JSON.stringify(selectedMovie));
    }else{
      selectedMovieLocal = JSON.parse(localStorage.getItem('selectedMovie'));
      setSelectedMovie(selectedMovieLocal);
    }

    if(localStorage.getItem('movieSeats') === null){
      localStorage.setItem('movieSeats', JSON.stringify(localMovieSeat));
    }else{
      let moviesSeats = JSON.parse(localStorage.getItem('movieSeats'));
      setLocalMovieSeat(moviesSeats);
      if(moviesSeats.some(m => m.m === selectedMovieLocal.id)){
        setSelectedSeats(moviesSeats.find(m => m.m === selectedMovieLocal.id).s);
      }
    }
  };

  //when the page is loaded get the data from local storage
  useEffect(() => {
    getLocalSelectedMovieSeats();
  }, []);

  //if the selectedSeats are changed, load the seats, because some of the statuses can be different and save the selectedSeats in local storage
  useEffect(() => {
    loadSeats();
    if(!selectedMovie) return;
    if (!localMovieSeat.some(m => m.m === selectedMovie.id)){
      setLocalMovieSeat([...localMovieSeat, {m: selectedMovie.id, s: selectedSeats}]);
    }else{
      setLocalMovieSeat(localMovieSeat.map(m => {
        if(m.m === selectedMovie.id){
          return {...m, s: selectedSeats}
        }
        return m;
      }));
    }
  }, [selectedSeats]);

  useEffect(() => {
    localStorage.setItem('movieSeats', JSON.stringify(localMovieSeat));
  },[localMovieSeat]);

  return (
    <div className="movie-seat">
        <MovieSelector selectedMovie={selectedMovie}/>

        <Showcase />

        <Seats seats={seats} setSeats={setSeats} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}/>

        <TotalPrice selectedSeats={selectedSeats} totalPrice={totalPrice}/>

        <button className="btn btn-primary">Checkout</button>
    </div>
  );
}

export default MovieSeat;
