import React from "react";

const CustomProducts = () => {
  return (
    <div className="carousel_wrapper">
      <div className="carousel-box">
        <div>
          <img src="https://i.pinimg.com/474x/44/16/f5/4416f562a4493357836ba011f2d7f90b.jpg" />
        </div>
        <div>
          <h3>
            Immense Yourself In <span className="music">Music</span>
          </h3>
          <p>
            $25 <span className="strike-text">$40</span>
          </p>
          <div className="color">
            <p>Color :</p>
            <div className="color-options">
              <span
                className="color-option"
                style={{ backgroundColor: "black" }}
              ></span>
              <span
                className="color-option"
                style={{ backgroundColor: "pink" }}
              ></span>
              <span
                className="color-option"
                style={{ backgroundColor: "blue" }}
              ></span>
              <span
                className="color-option"
                style={{ backgroundColor: "red" }}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomProducts;
