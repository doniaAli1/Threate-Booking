import React, { useState, useEffect } from 'react';
import "./style/UpdateFood.css";
import { useNavigate } from 'react-router-dom';

const UpdateFood = () => {
  const [popcornSmallPrice, setPopcornSmallPrice] = useState(15);
  const [popcornLargePrice, setPopcornLargePrice] = useState(25);
  const [pepsiSmallPrice, setPepsiSmallPrice] = useState(10);
  const [pepsiLargePrice, setPepsiLargePrice] = useState(15);
  const navigate = useNavigate();
  const handleUpdatePrices = () => {
    const updatedPrices = {
      popcorn: {
        small: popcornSmallPrice,
        large: popcornLargePrice,
      },
      pepsi: {
        small: pepsiSmallPrice,
        large: pepsiLargePrice,
      },
    };
    localStorage.setItem('foodPrices', JSON.stringify(updatedPrices));
    alert('Food prices updated!');
    navigate('/home-admin', { state: { isAdmin: true } });
  };

  useEffect(() => {
    const storedPrices = JSON.parse(localStorage.getItem('foodPrices'));
    if (storedPrices) {
      setPopcornSmallPrice(storedPrices.popcorn.small);
      setPopcornLargePrice(storedPrices.popcorn.large);
      setPepsiSmallPrice(storedPrices.pepsi.small);
      setPepsiLargePrice(storedPrices.pepsi.large);
    }
  }, []);

  return (
    <div className="container-food">
      <h2>Update Food Prices</h2>
      <label className="label">
        Small Popcorn Price: $
        <input
          type="number"
          value={popcornSmallPrice}
          onChange={(e) => setPopcornSmallPrice(e.target.value)}
          className="input"
        />
      </label>
      <br />
      <label className="label">
        Large Popcorn Price: $
        <input
          type="number"
          value={popcornLargePrice}
          onChange={(e) => setPopcornLargePrice(e.target.value)}
          className="input"
        />
      </label>
      <br />
      <label className="label">
        Small Pepsi Price: $
        <input
          type="number"
          value={pepsiSmallPrice}
          onChange={(e) => setPepsiSmallPrice(e.target.value)}
          className="input"
        />
      </label>
      <br />
      <label className="label">
        Large Pepsi Price: $
        <input
          type="number"
          value={pepsiLargePrice}
          onChange={(e) => setPepsiLargePrice(e.target.value)}
          className="input"
        />
      </label>
      <br />
      <button className="button" onClick={handleUpdatePrices}>
        Update Prices
      </button>
    </div>
  );
};

export default UpdateFood;
