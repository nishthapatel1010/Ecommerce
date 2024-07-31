import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Home.css";

function Home() {
  const navigate = useNavigate();
  const handleShopNowClick = () => {
    navigate("Products");
  };
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to MyClothesStore</h1>
        <p>Discover the latest trends in fashion and make your style unique.</p>
        <button className="shop-now-btn" onClick={handleShopNowClick}>
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Home;
