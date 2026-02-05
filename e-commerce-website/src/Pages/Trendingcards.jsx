import React from 'react'

import "./trending.css";


const Trendingcards = ({tranding}) => {
  return (
    <section className="trending-section">
      <h1 className="trending-title">Trending at Eyewear</h1>

      <div className="trending-wrapper">
        {tranding.map((item, index) => (
          <div className="trending-card" key={index}>
            <img src={item.img} alt={item.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trendingcards;

