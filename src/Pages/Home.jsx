import React from 'react'
import NavigationBar from '../Components/SharedComponents/NavigationBar'
import Hero from '../Components/Home/Hero'
import SubHero from '../Components/Home/SubHero'
import Discover from '../Components/Home/Discover'
import Footer from '../Components/SharedComponents/Footer'

function Home() {
  return (
    <div>
        <NavigationBar/>
        <Hero/>
        <SubHero/>
        <Discover/>
        <Footer/>
    </div>
  )
}

export default Home