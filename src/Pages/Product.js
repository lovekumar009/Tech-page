import React from "react";
import ProductItem from "../Custom Component/ProductItem";
import { product } from "../Assets/assets";

const Product = () => {
  return (
    <div className="product-page">
      <h1>Our Products</h1>
      <div className="product-list">
        {product.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
