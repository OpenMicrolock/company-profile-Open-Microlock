import TopNavigationPage from '@/components/TopNavigation'
import React from 'react'
import Hero from './Components/Hero'
import Features from './Components/Features'
import Steps from './Components/Steps'
import Feature2 from './Components/Feature2'
import Gallery from './Components/Gallery'
import BlogSlider from './Components/BlogSlider'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'
import Cta from './Components/Cta'

const DocsPage = () => {
  return (
    <>
      <TopNavigationPage />
      <Hero />
      <Features />
      <Steps />
      <Feature2 />
      <Gallery />
      <Testimonials />
      <BlogSlider />
      <Cta />
      <Footer />
    </>
  )
}

export default DocsPage