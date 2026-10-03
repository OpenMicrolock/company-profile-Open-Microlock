import TopNavigationPage from '@/components/TopNavigation'
import React from 'react'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Faq from './components/Faq'
import Footer from '@/components/Footer'

const Pricing2Page = () => {
  return (
    <>
      <TopNavigationPage position showSignUp />
      <Hero />
      <Benefits />
      <Faq />
      <Footer />
    </>

  )
}

export default Pricing2Page