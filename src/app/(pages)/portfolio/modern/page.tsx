import React from 'react'
import Hero from './components/Hero'
import TopNavigationPage from '@/components/TopNavigation'
import Portfolio from './components/Portfolio'
import Footer from '@/components/Footer'

const ModernPage = () => {
  return (
    <>
      <TopNavigationPage position showSignUp />
      <Hero />
      <Portfolio />
      <Footer />

    </>


  )
}

export default ModernPage