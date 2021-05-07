import React, {useState, useEffect} from 'react';
import MovieSelector from '../components/movie-seat-components/MoviesSelector';
import Showcase from '../components/movie-seat-components/Showcase';
import Seats from '../components/movie-seat-components/Seats';
import TotalPrice from '../components/movie-seat-components/TotalPrice';
import '../css/MovieSeat.css';

const MovieSeat = () => {
  const movieList = [{ id: 1, name: 'Mortal Kombat', price: 12 },
    { id: 2, name: 'Raya and the Last Dragon', price: 10 },
    { id: 3, name: 'Godzilla vs Kong', price: 12 },
    { id: 4, name: 'Black Widow', price: 14 },
    { id: 5, name: 'Shang-chi and the Legend of the Ten Rings', price: 14 }
  ];
  
  const [selectedMovie, setSelectedMovie] = useState(1);
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
  }

  //get the status of seat, if the id is in selectedSeats array then return 'selected', if it is inside occupiedSeats array then return 'occupied' else return empty '' 
  const statusHandler = (id) => {
    if(selectedSeats.some(selected => selected === id)){
      return 'selected';
    }else if(occupiedSeats.some(occupied => occupied === id)){
      return 'occupied';
    }else{
      return '';
    }
  }

//get selected movie and selected seats from local storage
  const getLocalSelectedMovieSeats = () => {
    if(localStorage.getItem('selectedMovie') === null){
      localStorage.setItem('selectedMovie', JSON.stringify(selectedMovie));
    }else{
      let selectedMovieLocal = JSON.parse(localStorage.getItem('selectedMovie'));
      setSelectedMovie(selectedMovieLocal);
    }

    if(localStorage.getItem('selectedSeats') === null){
      localStorage.setItem('selectedSeats', JSON.stringify([]));
    }else{
      let selectedSeatsLocal = JSON.parse(localStorage.getItem('selectedSeats'));
      setSelectedSeats(selectedSeatsLocal);
    }
  }

  //save selected movie in local storage
  const saveLocalSelectedMovie = () => {
    localStorage.setItem('selectedMovie', JSON.stringify(selectedMovie));
  }

  //save selected movie in local storage
  const saveLocalSelectedSeats = () => {
    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
  }

  //when the page is loaded get the data from local storage
  useEffect(() => {
    getLocalSelectedMovieSeats();
  }, []);

  //if the selectedMovie is changed the save the new price and save the movie in local storage 
  useEffect(() => {
    saveLocalSelectedMovie();
  }, [selectedMovie]);

  //if the selectedSeats are changed, load the seats, because some of the statuses can be different and save the selectedSeats in local storage
  useEffect(() => {
    loadSeats();
    saveLocalSelectedSeats();
  }, [selectedSeats]);

  return (
    <div className="movie-seat">
        <MovieSelector selectedMovie={selectedMovie}/>

        <Showcase />

        <Seats seats={seats} setSeats={setSeats} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}/>

        <TotalPrice selectedSeats={selectedSeats} totalPrice={totalPrice}/>
    </div>
  );
}

export default MovieSeat;
