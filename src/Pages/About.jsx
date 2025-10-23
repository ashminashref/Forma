import React from 'react'
import NavigationBar from '../Components/SharedComponents/NavigationBar'
import AboutHero from '../Components/About/AboutHero'
import Material from '../Components/About/Material'
import Footer from '../Components/SharedComponents/Footer'

function About() {
  return (
    <div>
      <NavigationBar/>
      <AboutHero/>
      <Material/>
      <Footer/>
    </div>
  )
}

export default About