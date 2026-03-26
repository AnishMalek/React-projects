import React from 'react'
import './productdetails.css'
import { useNavigate, useParams } from 'react-router-dom'
import bestSellers from '../Data/bestSellers'


const Productdetails = () => {

    const {id}=useParams()
    const navigate=useNavigate()
      
     const product= bestSellers.find(item=>item.id === Number(id)) 

     if(!product){
        return(
            <div className='pd-page'>
                <h2>Product Not Found</h2>
            </div>
        )
     }
  return (
    <div>
    <section className="product-section">
      <div className="product-wrapper">
        {/* Left - Product Image */}
        <div className="product-image">
          <img src={product.img} alt={product.name} />
        </div>

        {/* Right - Product Info */}
        <div className="product-info">
          <div className="product-tag">Best Seller</div>
          <h1>{product.name}</h1>
          <h2><span style={{color:"white",fontWeight:"lighter"}} >₹ </span>{product.price}</h2>
          <p>{product.description}</p>
          <div className="product-actions">
            <button onClick={()=> navigate(-1)}>Go Back</button>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Productdetails
