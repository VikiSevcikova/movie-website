import React from 'react';
import Seat from './Seat';

const Seats = ({seats, setSeats, selectedSeats, setSelectedSeats}) => {
    return(
        <div className="movie-seat-container">
            <div className="screen"></div>
            {seats.map((row, index)=>{
                return <div className="movie-seat-row" key={index}>
                    {row.map((seat) =>
                        <Seat key={seat.id} seat={seat} seats={seats} setSeats={setSeats} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}/>
                    )}
                </div>
            })}
            
        </div>
    );
};

export default Seats;