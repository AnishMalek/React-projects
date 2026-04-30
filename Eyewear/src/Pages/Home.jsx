import React, { useEffect, useState } from 'react'
import './home.css'
import { FaMale, FaFemale, FaGlasses,FaSun, FaEye, FaGem  } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Home() {

     const [product,setProduct]=useState([])
     const navigate=useNavigate()


   const fetchdata = async () => {
     try{
         
       const res = await axios.get("http://localhost:3000/products")
       setProduct(res.data)
     }
     catch(error){  
      console.log("failed to fetch data",error);
      
     }
  }

     useEffect(()=>{
      fetchdata()
     },[])
  return (
    <>
      <div className="container-fluid hero-section d-flex align-items-center pt-lg-0 pt-xl-0 pt-md-0 pt-sm-3 "
    >
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-6 text-white">
            <h1 className="display-4 fw-bold">
              Elevate Your Style With <br />
              <span className="gold-text">Premium Eyewear</span>
            </h1>

            <p className="mt-4 text-light">
              Discover a curated collection of luxury sunglasses and frames 
              crafted for comfort, clarity, and timeless fashion. 
              Designed to match your personality.
            </p>

            <div className="mt-4 d-flex gap-3">
              <button className="btn btn-gold px-4 py-2">
                Shop Collection
              </button>

              <button className="btn btn-outline-light px-4 py-2">
                Explore More
              </button>
            </div>
          </div>

        </div>
      </div>
      </div>

      <div className="container-fluid luxury-section my-5">
      <div className="row align-items-center">

        {/* Left Image */}
        <div className="col-lg-6 p-0">
          <div className="luxury-img"></div>
        </div>

        {/* Right Content */}
        <div className="col-lg-6 luxury-content">
          <h2>
            Crafted for <span>Vision & Style</span>
          </h2>

          <p>
            Experience the perfect blend of luxury and performance.  
            Our eyewear is designed to elevate your personality with 
            unmatched comfort and timeless elegance.
          </p>

          <ul>
            <li>✔ Premium Quality Materials</li>
            <li>✔ Ultra Comfortable Fit</li>
            <li>✔ Modern & Stylish Designs</li>
          </ul>

          <button className="btn btn-gold mt-3">
            Explore Collection
          </button>
        </div>

      </div>
    </div>

    {/*  */}

      <div className="container my-5">

      {/* Heading */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-dark"> Featured <span className="gold-text">Collection</span>
        </h2>

        <button className="btn btn-gold" onClick={()=>navigate('/product')}> View All</button>
      </div>

      {/* Scroll Row */}

         <div className="product-scroll">

  <div className="product-scroll">

  {
    product.length === 0 ? (
      <h2>Loading...</h2>
    ) : (
      product.slice(13,20).map((elem) => (
        
        <div className="product-card" key={elem.id}>
          
          <img src={elem.image} alt="" />

          <div className="card-content">
            <h4>{elem.name}</h4>
            <p>₹{elem.price}</p>

            <button 
              className="btn btn-gold mt-2"
              onClick={() => navigate(`/goggles/${elem.id}`)}
            >
              View Details
            </button>
          </div>

        </div>

      ))
    )
  }

</div>

</div>
    </div>

    {/*  */}

    <div className="container-fluid banner d-flex align-items-center justify-content-center text-center">

  <div className="banner-content text-white">
    <h1>Elevate Your Style</h1>
    <p>Premium sunglasses crafted for bold personalities</p>

    <button className="btn banner-btn">
      Shop Now
    </button>
  </div>

</div>

{/*  */}

  <section className="features-section">
      <div className="container text-center">
        <h2 className="fw-bold mb-5 black-text text-dark">Why Choose <span className="gold-text fw-bold" >Our Goggles</span></h2>

        <div className="row">
          
          <div className="col-md-4 mb-4">
            <div className="feature-card">
              <FaSun className="icon" />
              <h5>UV Protection</h5>
              <p>Protect your eyes from harmful sun rays.</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="feature-card">
              <FaEye className="icon" />
              <h5>Crystal Clear Vision</h5>
              <p>Experience unmatched clarity and comfort.</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="feature-card">
              <FaGem className="icon" />
              <h5>Premium Design</h5>
              <p>Stylish frames crafted for modern look.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/*  */}

      <section className="faq-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Everything You Need to Know</h2>

        <div className="accordion" id="accordionExample">

          {/* Item 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                Are these goggles UV protected?
              </button>
            </h2>

            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Yes, all our goggles come with 100% UV protection.
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                Do you provide polarized lenses?
              </button>
            </h2>

            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Yes, we offer high-quality polarized lenses for better clarity.
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
              >
                What is your return policy?
              </button>
            </h2>

            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                We offer a 7-day return policy on all products.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>

    

    

    
  )
}

export default Home
