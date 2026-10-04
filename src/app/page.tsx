import TopNavigationPage from '@/components/TopNavigation'
import React from 'react'
import Hero from './(base)/Components/Hero'
import Features from './(base)/Components/Features'
import Steps from './(base)/Components/Steps'
import Feature2 from './(base)/Components/Feature2'
import Gallery from './(base)/Components/Gallery'
import BlogSlider from './(base)/Components/BlogSlider'
import Testimonials from './(base)/Components/Testimonials'
import Footer from './(base)/Components/Footer'
import Cta from './(base)/Components/Cta'

const ApplicationShowcasePage = () => {
  return (
    <>
      <TopNavigationPage darkButton={{ text: 'Download app', icon: 'bi:cloud-download-fill' }} />
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

export default ApplicationShowcasePage