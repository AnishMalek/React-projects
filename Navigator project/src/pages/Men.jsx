import React from 'react'
import Bestsellers from '../components/Bestsellers'
import bestSellers from "../Data/bestSellers";

const Men = () => {
  return (
    <div>
            <Bestsellers bestSellers={bestSellers}/>

    </div>
  )
}

export default Men
