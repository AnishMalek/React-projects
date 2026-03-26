import React from 'react'
import Bestsellers from '../components/Bestsellers'
import bestSellers from "../Data/bestSellers";

const Women = () => {
  return (
    <div>
          <Bestsellers bestSellers={bestSellers}/>
    </div>
  )
}

export default Women
