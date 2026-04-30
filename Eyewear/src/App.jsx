import React from 'react'
import Header from './Components/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Registration from './Pages/Registration'
import Login from './Pages/Login'
import ProductManagement from './Pages/ProductManagement'
import Footer from './Components/Footer'
import ProductDescription from './Pages/ProductDescription'
import AboutPage from './Pages/Aboutpage'
import ContactPage from './Pages/ContactPage'
import Cart from './Pages/Cart'


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer/>
      </>
    )
  },
   {
    path: "about",
    element: (
      <>
        <Header />
        <AboutPage />
        <Footer/>
      </>
    )
  },
   {
    path: "/product",
    element: (
      <>
        <Header />
        <Product />
        <Footer/>
      </>
    )
  },

   {
    path: "/contact",
    element: (
      <>
        <Header />
        <ContactPage/>
        <Footer/>
      </>
    )
  },
  {
    path: "/cart",
    element: (
      <>   
        <Cart/>
      </>
    )
  },
  
   {
    path: "/register",
    element: (
      <>
        <Header />
        <Registration />
      </>
    )
  },
   {
    path: "/login",
    element: (
      <>
        <Header />
        <Login />
      </>
    )
  },
   {
    path: "/productmanagement",
    element: (
      <>
        <Header />
        <ProductManagement />
      </>
    )
  },
   {
    path: "/goggles/:id",
    element: (
      <>
        <Header />
        <ProductDescription/>
      </>
    )
  },
  
 
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;