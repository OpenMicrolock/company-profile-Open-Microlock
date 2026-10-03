import TopNavigationPage from '@/components/TopNavigation'
import React from 'react'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Contact2 from './components/Contact2'
import Detail from './components/Detail'
import Footer from '@/components/Footer'

const Contact1Page = () => {
  return (
    <>
    <TopNavigationPage position headerTheme showSignUp />
      <Hero />
      <Contact />
      <Contact2 />
      <Detail />
      <Footer />
    </>

  )
}

export default Contact1Page