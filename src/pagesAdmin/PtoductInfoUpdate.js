import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./style/ProductInfoUpdate.css";
import { Data } from "../core/data/Movies";
import { Link } from "react-router-dom";

const ProductInfoUpdate = () => {
  const { id } = useParams();
  const product = Data.find((item) => item.id === Number(id));
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    const updatedData = Data.map((item) =>
      item.id === updatedProduct.id ? updatedProduct : item
    );
  
    localStorage.setItem('movieData', JSON.stringify(updatedData));
  };
  

  return (
    <div className="product-info-container">
      <h2>Update Product Information</h2>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={updatedProduct.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Description: </label>
        <textarea
          name="description"
          value={updatedProduct.description}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Price: </label>
        <input
          type="text"
          name="price"
          value={updatedProduct.price}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Image: </label>
        <input
          type="file.name"
          name="image"
          value={updatedProduct.image}
          onChange={handleInputChange}
        />
      </div>
      {/* Add more input fields for other properties */}
      <button onClick={handleUpdate}><Link to="/home-admin">Update</Link></button>
      
    </div>
  );
};

export default ProductInfoUpdate;
