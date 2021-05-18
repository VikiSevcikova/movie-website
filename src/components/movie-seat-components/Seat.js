import React from 'react';

const Seat = ({seat, seats, setSeats, selectedSeats, setSelectedSeats}) => {
    const seatClickHandler = () => {
        //only if the status is different from occupied then proceed in executing
        if(seat.status !== 'occupied'){
            setSeats(seats.map((row)=>{
                return row.map((s) => {
                    //if the seat has the same id as the seat the user clicked then return the seat with the new status
                    if(s.id === seat.id){
                        let changedStatus = statusChangeHandler(s);
                        return {
                            ...s, status : changedStatus
                        }
                    }
                    return s;
                }
                )}
            ))
        }
    };

    const statusChangeHandler = (s) => {
        //if the seat has status empty and is not in array of selectedSeats then add id to selectedSeats array and return status 'selected'
        if(s.status === '' && !selectedSeats.some(selected => selected === s.id)){
            setSelectedSeats([...selectedSeats, s.id]);
            return 'selected';
        }else{
            //set selectedSeats to array without seat id which was clicked and set status to empty ''
            setSelectedSeats(selectedSeats.filter(selected => selected !== s.id));
            return '';
        }
    }

    return(
        <div onClick={seatClickHandler} className={`seat ${seat.status}`}>
            <span className="seat-text">{seat.id}</span>
        </div>
    );
};
export default Seat;