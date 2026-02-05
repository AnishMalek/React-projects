import React from 'react'
import './home.css'
import Cards from './Cards'
import glasses from './productcard.js'
import Eyeglasses from './Eyeglasses.jsx'
import  shapes from './eyeglasses'
import Trandingcards from './Trendingcards.jsx'
import trending from './trending.js'
import Footer from '../Footer.jsx'



            // src="https://images.unsplash.com/photo-1511499767150-a48a237f0083"


const Home = () => {
  return (
    <div>      

  <section className="hero">
      <img
        src="https://static5.lenskart.com/media/uploads/Hustlr-230126.png"
        alt="Hero Banner"
        className="hero-img"
      />

     
    </section>
 
      <Cards product={glasses}/>     

        <section className="banner-section">
      <div className="banner-container">
        <img
          src="https://static5.lenskart.com/media/uploads/desktop-flr-banner-1612.png"
          alt="Banner"
        />
      </div>
    </section>

    <Eyeglasses shapes={shapes}/>
    <Trandingcards tranding={trending }/>

    {/*  */}
     <section className="meller-banner-section">
      <div className="meller-banner">
        <img
          src="https://static5.lenskart.com/media/uploads/Meller-1920x520desktop_tiny_-18-12.png"
          alt="Meller Banner"
        />
      </div>
    </section>

        {/* <div className='meller-tittle-div'>
           <h1 className='meller-title'>Do More, Be More.</h1>
        </div> */}

      <Cards product={glasses} />     

    {/* footer */}

      <Footer/>

    </div>
  )
}

export default Home
