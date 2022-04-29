import react from "react";

const Home =() => {
  return (
    <>
      HeroBanner

      <div className="product-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {['Products 1', 'Products 2'].map(
          (product) => product )}
      </div>

      Footer
    </>
  )
}

export default Home