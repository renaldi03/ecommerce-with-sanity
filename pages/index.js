import React from "react";
import HeroBanner from "../components/HeroBanner";

const Home = () => {
  return (
    <>
    <div>
      <HeroBanner />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations passages</p>
      </div>

      <div className="products-container">
      {['Products 1', 'Products 2'].map((product) => product )}
      </div>

      Footerbanner
    </div>
    </>
  )
}

export default Home