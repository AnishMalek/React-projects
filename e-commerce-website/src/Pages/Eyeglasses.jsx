import React from 'react'
import './eyeglasses.css'

const Eyeglasses = ({shapes}) => {
  return (
  <div className="shape-section">
  <h1 className="shape-title">Get the perfect shape - Eyeglasses</h1>

  <div className="shape-wrapper">
    {shapes.map((elem) => (
      <div className="shape-card" >
        <img className="shape-img" src={elem.img}  />
        {/* <h3 className="shape-name">{elem.name}</h3> */}
      </div>
    ))}
  </div>
</div>


  )
}

export default Eyeglasses
