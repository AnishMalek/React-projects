
// import productcard from './productcard.js'
import './Cards.css'

import React from 'react'

const Cards = ({product}) => {
  return (
    <div>
      <section className="categories">
      <div className="categories-header">
        <h2>Shop by Category</h2>
        <p>Explore trending eyewear collections</p>
      </div>

      <div className="categories-grid">
        {product.map((item, index) => (
          <div className="cat-card" key={index}>
            <div className="cat-imgBox">
              <img src={item.img} alt={item.name} />
            </div>

            <div className="cat-info">
              <h3>{item.name}</h3>
              <button className="cat-btn">Shop Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>

  
    </div>
  )
}

export default Cards
