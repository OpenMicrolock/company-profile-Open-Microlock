import TopNavigationPage from '@/components/TopNavigation'
import React from 'react'
import Hero from './components/Hero'
import Process from './components/Process'
import Gallery from './components/Gallery'
import JobListing from './components/JobListing'
import Review from './components/Review'
import Footer from '@/components/Footer'

const CareerPage = () => {
  return (
    <>
      <TopNavigationPage position showSignUpWithLogin />
      <Hero />
      <Process />
      <Gallery />
      <JobListing />
      <Review />
      <Footer />
    </>

  )
}

export default CareerPage