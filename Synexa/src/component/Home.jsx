import React from 'react'
import HerosectionContent from './HerosectionContent'
import AboutSynexa from './AboutSynexa'
import OurExpertise from './OurExpertise'
import WhySynexa from './WhySynexa'
import ProcessSection from './ProcessSection'
import ServicesMarquee from './ServicesMarquee'
import FAQSection from './FAQSection'
import Testimonials from './Testimonials'
import ComparisonSection from './ComparisonSection'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <HerosectionContent/>
      <OurExpertise/>
      <WhySynexa/>
      <ProcessSection/>
      <ServicesMarquee/>

     <FAQSection/>
      <ComparisonSection/>  
       <Testimonials/>  
      
     



    </div>
  )
}

export default Home
