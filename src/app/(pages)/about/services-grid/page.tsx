import TopNavigationPage from '@/components/TopNavigation'
import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import ChooseUs from './components/ChooseUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

const ServicesGridPage = () => {
  return (
    <>
      <TopNavigationPage position headerTheme showSignUp />
      <Hero />
      <Services />
      <ChooseUs />
      <Contact />
      <Footer />
    </>

  )
}

export default ServicesGridPage