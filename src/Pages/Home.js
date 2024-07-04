import React from "react";
import CustomProducts from "../Custom Component/CustomProducts";
import Features from "../Features";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/Product");
  };
  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      <div className="header">
        <div className="header-content">
          <h2>Experience the future with our latest tech</h2>
          <p>
            Our latest tech products are designed to <br />
            enhance your daily life with seamless integration
            <br /> and cutting-edge features.
          </p>

          <button className="explorebtn" onClick={handleExploreClick}>
            Explore more..
          </button>
        </div>
      </div>
      <div>
        <Features />
      </div>
      <div>
        <CustomProducts />
      </div>
    </div>
  );
};

export default Header;
