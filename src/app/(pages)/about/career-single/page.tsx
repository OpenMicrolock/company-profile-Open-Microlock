import TopNavigationPage from '@/components/TopNavigation'
import React from 'react'
import Hero from './components/Hero'
import JobDetails from './components/JobDetails'
import Footer from '@/components/Footer'

const CareerSinglePage = () => {
  return (
    <>
      <TopNavigationPage position headerTheme showSignUpWithLogin />
      <Hero />
      <JobDetails />
      <Footer />
    </>

  )
}

export default CareerSinglePage