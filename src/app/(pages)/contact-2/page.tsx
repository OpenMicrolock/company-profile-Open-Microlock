import TopNavigationPage from '@/components/TopNavigation'
import React from 'react'
import Hero from './components/Hero'
import Details from './components/Details'
import Map from './components/Map'
import Footer from '@/components/Footer'

const Contact2Img = () => {
  return (
    <>
      <TopNavigationPage showSignUp />
      <Hero />
      <Details />
      <Map />
      <Footer />
    </>

  )
}

export default Contact2Img