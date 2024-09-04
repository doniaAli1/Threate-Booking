import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "../style/SeatAvailability.css";

const SeatAvailability = ({ seats }) => {
  const [selectedSeatIndexes, setSelectedSeatIndexes] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const storedSelectedSeatIndexes = JSON.parse(localStorage.getItem(`selectedSeats_${id}`));
    if (storedSelectedSeatIndexes !== null) {
      setSelectedSeatIndexes(storedSelectedSeatIndexes);
    }
  }, [id]);

  const handleSeatClick = (index) => {
    if (!seats[index].booked) {
      if (selectedSeatIndexes.includes(index)) {
        setSelectedSeatIndexes(selectedSeatIndexes.filter((i) => i !== index));
      } else {
        setSelectedSeatIndexes([...selectedSeatIndexes, index]);
      }
    }
  };

  const handleConfirmClick = () => {
    if (selectedSeatIndexes.length > 0) {
      const selectedSeats = selectedSeatIndexes.map((index) => seats[index]);
      localStorage.setItem(`selectedSeats_${id}`, JSON.stringify(selectedSeatIndexes));
      navigate(`/seat-confirmation-success/${id}`, { state: { seats: selectedSeats } });
    }
  };

  return (
    <div>
      <div className="seat-availability">
        {seats.map((seat, index) => (
          <div
            key={index}
            className={`seat ${seat.booked ? 'booked' : (selectedSeatIndexes.includes(index) ? 'selected' : 'available')}`}
            onClick={() => handleSeatClick(index)}
          ></div>
        ))}
      </div>
      {selectedSeatIndexes.length > 0 && (
        <div className="selected-seat-info">
          {selectedSeatIndexes.map((index) => (
            <p key={index}>{seats[index].date}</p>
          ))}
          <button className="confirm-button" onClick={handleConfirmClick}>
            Confirm Seats
          </button>
        </div>
      )}
    </div>
  );
};

export default SeatAvailability;
