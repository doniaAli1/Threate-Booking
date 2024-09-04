import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Data } from '../../../core/data/Movies';
import "../style/ProductInfo.css"
import SeatAvailability from './SeatAvailability';

const ProductInfo = () => {
  const { id } = useParams();
  const selectedProduct = Data.find(item => item.id === parseInt(id, 10));
  const [showSeatAvailability, setShowSeatAvailability] = useState(false);
  const [bookedSeats, setBookedSeats] = useState(JSON.parse(localStorage.getItem("bookedSeats")) || []);

  const handleBookNow = () => {
    setShowSeatAvailability(true);
  };

  const handleSeatBooking = (seatNumber) => {
    if (bookedSeats.includes(seatNumber)) {
      return;
    }
    const updatedBookedSeats = [...bookedSeats, seatNumber];
    setBookedSeats(updatedBookedSeats);
    localStorage.setItem("bookedSeats", JSON.stringify(updatedBookedSeats));
  };

  if (!selectedProduct) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="container">
      <img className="product-image" src={selectedProduct.image} alt={selectedProduct.name} />
      <h2 className="product-name">The show Name: {selectedProduct.name}</h2>
      <h3 className="product-about">About the show: </h3>
      <p className="product-description">{selectedProduct.des}</p>
      <p className="product-price">{selectedProduct.price}</p>
      <button className="book-now-button" onClick={handleBookNow}>Book Now!</button>

      {showSeatAvailability && (
        <SeatAvailability
          seats={selectedProduct.seats}
          onSeatClick={handleSeatBooking}
          bookedSeats={bookedSeats}
        />
      )}
    </div>
  );
};

export default ProductInfo;