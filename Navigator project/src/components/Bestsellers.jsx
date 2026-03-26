import React from "react";
import "./bestsellers.css";
import { useNavigate } from "react-router-dom";
import bestSellers from "../Data/bestSellers";

const Bestsellers = ({ bestSellers }) => {
    const navigate=useNavigate()

  return (
    <section className="best-section">
      <div className="best-head">
        <h1>Our Best Sellers</h1>
        <p>
          Handpicked fragrances that define luxury, long-lasting performance,
          and bold character.
        </p>
      </div>

      <div className="best-grid">
        {bestSellers.map((product) => (
          <div className="best-card" key={product.id}>
            <div className="best-imgbox">
              <img src={product.img} alt={product.name} />
            </div>

            <div className="best-info">
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>

              <button className="best-btn" onClick={()=>navigate(`/product/${product.id}`)}>
                {product.btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bestsellers;
