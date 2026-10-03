import React from 'react'
import Hero from './components/Hero'
import TopNavigationPage from '@/components/TopNavigation'
import Footer from '@/components/Footer'
import Portfolio from './components/Portfolio'

const PortFolioListPage = () => {
  return (
    <>
      <TopNavigationPage position showSignUp />
      <Hero />
      <Portfolio />
      <Footer />
    </>

  )
}

export default PortFolioListPage