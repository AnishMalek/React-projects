import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './product.css'
import { useNavigate } from 'react-router-dom'


const Product = () => {

  const [data, setData] = useState([])
   const navigate = useNavigate();

  const fetchdata = async () => {
     try{
         
       const res = await axios.get("http://localhost:3000/products")
       setData(res.data)
     }
     catch(error){  
      console.log("failed to fetch data",error);
      
     }
  }

  useEffect(() => {
    fetchdata()
  }, [])

  return (
<div className="pm-wrapper container py-3">
  <div className="row g-3">
    {
      data.length === 0 ? (
        <h2 className="text-center">No record found!</h2>
      ) : (
        data.map((d) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={d.id}>
            <div className="pm-card">

              <img src={d.image} alt={d.name} className="pm-img" />

              <div className="pm-body">
                <h6 className="pm-title">{d.name}</h6>

                <p className="pm-text">
                  {d.description?.substring(0, 60)}...
                </p>

                <div className="d-flex justify-content-between align-items-center">
                  <span className="pm-price">₹{d.price}</span>
                  <button className="btn btn-sm btn-outline-dark pm-btn" onClick={()=>navigate(`/goggles/${d.id}`)}>
                    View Details
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))
      )
    }
  </div>
</div>
  )
}

export default Product