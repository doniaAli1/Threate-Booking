import React, { useState, useEffect } from "react";
import AdminCard from "./AdminCard";
import { Link, useLocation } from "react-router-dom";
import "./style/AdminHome.css";

const AdminHome = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);

  
  
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("movieData") || "[]");
    const addedTheatres = JSON.parse(localStorage.getItem("addedTheatres") || "[]");

    if (location.state && location.state.isAdmin) {
      const deletedProductIds = JSON.parse(localStorage.getItem("deletedProductIds") || "[]");
      const remainingProducts = storedProducts.filter(item => !deletedProductIds.includes(item.id));
      setProducts([...remainingProducts, ...addedTheatres]);
    } else {
      setProducts([...storedProducts, ...addedTheatres]);
    }
  }, [location]);
  const handleDelete = (id) => {
    const updatedProducts = products.filter((item) => item.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("movieData", JSON.stringify(updatedProducts));

    const deletedProductIds = JSON.parse(localStorage.getItem("deletedProductIds") || "[]");
    deletedProductIds.push(id);
    localStorage.setItem("deletedProductIds", JSON.stringify(deletedProductIds));
  };

  const handleProductUpdate = (updatedProduct) => {
    
    const index = products.findIndex(item => item.id === updatedProduct.id);

    if (index !== -1) {
      const updatedProducts = [...products];
      updatedProducts[index] = updatedProduct;
      setProducts(updatedProducts);
      localStorage.setItem("movieData", JSON.stringify(updatedProducts));
    }
  };

  const displayProducts = () => {
    return products.map((item) => (
      <AdminCard
        key={item.id}
        id={item.id}
        name={item.name}
        desc={item.description}
        img={item.image}
        price={item.price}
        onDelete={() => handleDelete(item.id)}
        onUpdate={handleProductUpdate} 
      />
    ));
  };

  return (
    <div>
      <button className="add-movie"><Link to={"/add-theatre"}> Add theatre </Link> </button>
      <button className="update-food" > <Link to={"/update-Food"}> Update Food </Link>  </button> 
      <div className="ProductList">
        {products.length > 0 ? displayProducts() : <p>There are no products to show</p>}
      </div>
    </div>
  );
};

export default AdminHome;
