import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Data } from '../../../core/data/Movies';
import "../style/SeatConfirmationSuccess.css";

const SeatConfirmationSuccess = () => {
  const location = useLocation();
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const { id } = useParams();
  const selectedProduct = Data.find((item) => item.id === parseInt(id, 10));
  const facilityPrices = {
    Popcorn: {
      small: 15,
      large: 25,
    },
    pepsi: {
      small: 10,
      large: 15,
    },
  };

  useEffect(() => {
    const storedSelectedFacilities = JSON.parse(localStorage.getItem(`selectedFacilities_${id}`));
    if (storedSelectedFacilities) {
      setSelectedFacilities(storedSelectedFacilities);
    }
  }, [id]);

  const handleFacilitySelect = (facility, size) => {
    setSelectedFacilities((prevSelectedFacilities) => [
      ...prevSelectedFacilities,
      { facility, size },
    ]);
  };


  const calculateTotalPrice = () => {
    const facilitiesTotal = selectedFacilities.reduce((total, item) => {
      return total + facilityPrices[item.facility][item.size];
    }, 0);

    const totalPrice =
      facilitiesTotal + selectedProduct.prc * location.state.seats.length;
    return totalPrice;
  };



  const handleFacilityRemove = (facilityItem) => {
    setSelectedFacilities((prevSelectedFacilities) =>
      prevSelectedFacilities.filter((f) => f !== facilityItem)
    );
  };


  useEffect(() => {
    localStorage.setItem(`selectedFacilities_${id}`, JSON.stringify(selectedFacilities));
  }, [id, selectedFacilities]);

  if (!location.state || !location.state.seats) {
    return <p>Seat confirmation data not found.</p>;
  }

  const handleCancelBooking = () => {
    localStorage.removeItem(`selectedFacilities_${id}`);
    localStorage.removeItem(`selectedSeats_${id}`);
    window.location.href = '/';
  };

  return (
    <div className="confirmation-container">
      <h2>Seats Confirmed Successfully</h2>
      <center>
        <p className="cost">Your cost is: {selectedProduct.prc * location.state.seats.length}</p>
      </center>
      <h3>Select Optional Facilities:</h3>
      <button className="facility-button" onClick={() => handleFacilitySelect('Popcorn', 'small')}>
        Add Small Popcorn
      </button>
      <button className="facility-button" onClick={() => handleFacilitySelect('Popcorn', 'large')}>
        Add Large Popcorn
      </button>
      <button className="facility-button" onClick={() => handleFacilitySelect('pepsi', 'small')}>
        Add Small Pepsi
      </button>
      <button className="facility-button" onClick={() => handleFacilitySelect('pepsi', 'large')}>
        Add Large Pepsi
      </button>

      {selectedFacilities.length > 0 && (
        <div className="selected-facilities">
          <h4>Selected Facilities:</h4>
          <ul>
            {selectedFacilities.map((item, index) => (
              <li key={index}>
                {item.facility} - {item.size} - ${facilityPrices[item.facility][item.size]}
                <button
                  className="remove-button"
                  onClick={() => handleFacilityRemove(item)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <h3>Total Price: ${calculateTotalPrice()}</h3>
      <button className="ok-button">
        <Link to={'/'}  >Ok </Link>
      </button>

      <button className="cancel-button" onClick={handleCancelBooking}>
        Cancel Booking
      </button>
    </div>
  );
};

export default SeatConfirmationSuccess;
