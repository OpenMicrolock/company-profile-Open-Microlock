import TopNavigationPage from '@/components/TopNavigation'
import React from 'react'
import Hero from './components/Hero'
import Detail from './components/Detail'
import Process from './components/Process'
import Showcase from './components/Showcase'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from '@/components/Footer'

const ServicesSinglePage = () => {
  return (
    <>
      <TopNavigationPage position showSignUp />
      <Hero />
      <Detail />
      <Process />
      <Showcase />
      <Testimonials />
      <Contact />
      <Footer />
    </>

  )
}

export default ServicesSinglePage