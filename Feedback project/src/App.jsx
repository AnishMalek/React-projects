import React from 'react'
import { Productcards } from './components/Productcards'
import { products } from './Data/ProductData'
import Feedback from './components/Feedback'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Reviewpage from './components/Reviewpage'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Productcards data={products} />
      </>
    )
  },
  {
    path: "/reviewpage",
    element: <Reviewpage />
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App