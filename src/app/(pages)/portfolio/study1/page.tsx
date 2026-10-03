import React from 'react'
import Hero from './components/Hero'
import TopNavigationPage from '@/components/TopNavigation'
import Detail from './components/Detail'
import Images from './components/Images'
import Result from './components/Result'
import Related from './components/Related'
import CtaBox from './components/CtaBox'
import Footer from '@/components/Footer'

const Study1Page = () => {
  return (
    <>

      <TopNavigationPage position showSignUp />
      <Hero />
      <Detail />
      <Images />
      <Result />
      <Related />
      <CtaBox />
      <Footer />
    </>

  )
}

export default Study1Page