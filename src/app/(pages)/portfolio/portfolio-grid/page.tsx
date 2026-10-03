import TopNavigationPage from '@/components/TopNavigation'
import React from 'react'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import CtaBox from './components/CtaBox'
import Footer from '@/components/Footer'

const PortfolioGridPage = () => {
  return (
    <>
      <TopNavigationPage position headerTheme showSignUp />
      <Hero />
      <Portfolio />
      <CtaBox />
      <Footer />
    </>

  )
}

export default PortfolioGridPage