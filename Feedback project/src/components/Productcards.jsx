import React from 'react'
import { products } from '../Data/ProductData'
import "./productData.css"
import { useNavigate } from 'react-router-dom'

export const Productcards = ({ data }) => {

    const navigate=useNavigate()

  return (
    <div className="product-container">
      {
        
        data.map((product) => (
          <div className="product-card">

            <img src={product.image} className="product-image" />

            <h1 className="product-name">{product.name}</h1>
            <h2 className="product-price">₹{product.price}</h2>
            <p className="product-category">{product.category}</p>

            <button onClick={()=>navigate(`/reviewpage`)} className="review-btn">View Review</button>

          </div>
        ))
      }
    </div>
  )
}

