import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import './ProductDescription.css'
import { useDispatch } from 'react-redux'
import { AddtoCart } from '../Store/Cartslice'
const ProductDescription = () => {

   const dispatch=useDispatch()
   const navigate=useNavigate()
  
    const [goggles,setGoggles]=useState(null)

    const {id}=useParams()

    const fetchdata=async()=>{
      try{
          const res = await axios.get(`http://localhost:3000/products/${id}`)
        setGoggles(res.data)
      }
      catch(error){
        console.log("failed to fetch product details",error);
        
      }

    }
    useEffect(()=>{
        fetchdata()
    },[id])

      if(!goggles) return null;
  return (
  <div className="pd-wrapper">

  <div className="pd-card">

    {/* Image */}
    <div className="pd-image">
      <img src={goggles.image} alt={goggles.name} />
    </div>

    {/* Content */}
    <div className="pd-content">
      <h2 className=' fw-bold gold-text'>{goggles.name}</h2>

      <p className="pd-desc">
        {goggles.description}
      </p>

      <h3 className="pd-price">₹{goggles.price}</h3>

      <div className="pd-buttons">
        <button className="btn-cart" onClick={()=>{dispatch(AddtoCart(goggles)),navigate('/cart')}}>Add to Cart</button>
      </div>
    </div>

  </div>

</div>
  )
}

export default ProductDescription
