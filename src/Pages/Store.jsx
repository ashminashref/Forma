import React from 'react'
import NavigationBar from '../Components/SharedComponents/NavigationBar'
import StoreHero from '../Components/Store/StoreHero'
import Footer from '../Components/SharedComponents/Footer'

function Store() {
  return (
    <div>
      <NavigationBar/>
      <StoreHero/>
      <Footer/>
    </div>
  )
}

export default Store