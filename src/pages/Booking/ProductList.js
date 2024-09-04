import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import "./style/ProductList.css";

const ProductList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("movieData") || "[]");
    const storedTheatres = JSON.parse(localStorage.getItem("theatres") || "[]");

    const deletedProductIds = JSON.parse(localStorage.getItem("deletedProductIds") || "[]");
    const activeProducts = storedProducts.filter((item) => !deletedProductIds.includes(item.id));

    const allItems = [...activeProducts, ...storedTheatres];
    setItems(allItems);
  }, []);

  const displayItems = () => {
    return items.map((item) => (
      <ProductCard
        key={item.id}
        id={item.id}
        name={item.name}
        desc={item.description}
        img={item.image}
        price={item.price}
      />
    ));
  };

  return (
    <div className="ProductList">
      {items.length > 0 ? displayItems() : <p>There are no items to show</p>}
    </div>
  );
};

export default ProductList;
