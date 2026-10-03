import TopNavigationPage from '@/components/TopNavigation'
import React from 'react'
import Hero from './components/Hero'
import CoreFeatures from './components/CoreFeatures'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Footer from '@/components/Footer'
import FooterOther from '@/components/FooterOther'

const FeaturesSinglePage = () => {
  return (
    <>
      <TopNavigationPage position showSignUp />
      <Hero />
      <CoreFeatures />
      <Testimonials />
      <Faq />
      <FooterOther />
    </>

  )
}

export default FeaturesSinglePage