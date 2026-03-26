
  //pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Men from './pages/Men'
import Women from './pages/Women'
import Unisex from './pages/Unisex'

  //components
import Header from './components/Header'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Footer from './components/Footer'
import Productdetails from './pages/Productdetails'

function App() {

   const router=createBrowserRouter([

    {path:'/',
      element:
      <>
      <Header/>
      <Home/>
      <Footer/>
      </>
    },

    {path:'men',
      element:
      <>
      <Header/>
      <Men/>
      <Footer/>

      </>
    },

     {path:'women',
      element:
      <>
      <Header/>
      <Women/>
      <Footer/>

      </>
    },

     {path:'unisex',
      element:
      <>
      <Header/>
      <Unisex/>
      <Footer/>

      </>
    },

      {path:'about',
      element:
      <>
      <Header/>
      <About/>
      <Footer/>

      </>
    },

      {path:'contact',
      element:
      <>
      <Header/>
      <Contact/>
      <Footer/>

      </>
    },

      {path:'/product/:id',
      element:
      <>
      <Header/>
      <Productdetails/>
      <Footer/>

      </>
    },
   ])


  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
