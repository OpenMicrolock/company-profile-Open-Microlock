import TopNavigationPage from '@/components/TopNavigation'
import React from 'react'
import Hero from './components/Hero'
import Footer from '@/components/Footer'
import Faq from './components/Faq'
import CompareTable from './components/CompareTable'

const Pricing1Page = () => {
  return (
    <>
      <TopNavigationPage position showSignUp />
      <Hero />
      <CompareTable />
      <Faq />
      <Footer />
    </>

  )
}

export default Pricing1Page