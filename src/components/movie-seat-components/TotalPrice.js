import React from 'react';

const TotalPrice = ({selectedSeats, totalPrice}) => {
    return(
        <p className="total-price">You have selected <span className="highlighted-text">{selectedSeats.length}</span> seats for price of $<span className="highlighted-text">{selectedSeats.length * totalPrice}</span></p>
    );
};

export default TotalPrice;