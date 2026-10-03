import React from 'react'
import Hero from './components/Hero'
import TopNavigationPage from '@/components/TopNavigation'
import About from './components/About'
import Team from './components/Team'
import Clients from './components/Clients'
import Gallery from './components/Gallery'
import Cta from './components/Cta'
import Footer from './components/Footer'

const AboutV2Page = () => {
  return (
    <>
      <TopNavigationPage showSignUp position />
      <Hero />
      <About />
      <Team />
      <Clients />
      <Gallery />
      <Cta />
      <Footer />
    </>

  )
}

export default AboutV2Page