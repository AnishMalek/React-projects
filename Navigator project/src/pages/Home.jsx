import React, { useEffect, useState } from "react";
import './home.css'
import Globlestrip from "../components/Globlestrip";
import Oudwalewordlwide from "../components/Oudwalewordlwide";
import Bestsellers from "../components/Bestsellers.jsx";
import bestSellers from "../Data/bestSellers.js";
const Home = () => {
  const images = [
    "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=900&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=900&auto=format&fit=crop&q=60",   
    "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=900&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=900&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1541643600914-78b084683601?w=900&auto=format&fit=crop&q=60"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
    <section className="hero">
      <div className="hero-left">
        <p className="hero-top">Luxury Perfumes • OudWale</p>

        <h1 className="hero-title">
          Oud that feels <span>Royal</span>.
        </h1>

        <p className="hero-subtitle">
          Premium long-lasting fragrances crafted for Men, Women & Unisex.
          Bold. Smooth. Luxury.
        </p>

        <div className="hero-buttons">
          <button className="hero-btn primary">Shop Now</button>
          <button className="hero-btn secondary">Explore</button>
        </div>

        <div className="hero-badges">
          <div className="badge">Long Lasting</div>
          <div className="badge"> Premium Oils</div>
          <div className="badge"> Fast Delivery</div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-image-box">
          <div
            className="hero-slider"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((img, index) => (
              <img key={index} className="hero-img" src={img} alt="Perfume" />
            ))}
          </div>
        </div>
      </div>
    </section>
    <Globlestrip/>  
    <Bestsellers bestSellers={bestSellers}/>
    {/* <Oudwalewordlwide/> */}

    </>


     
  );
   

};

export default Home;
