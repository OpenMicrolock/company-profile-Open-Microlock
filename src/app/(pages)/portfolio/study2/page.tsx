import React from 'react'
import Project from './components/Project'
import TopNavigationPage from '@/components/TopNavigation'
import CtaBox from './components/CtaBox'
import Footer from '@/components/Footer'

const Study2Page = () => {
  return (
    <>
      <TopNavigationPage position showSignUp />
      <Project />
      <CtaBox />
      <Footer />
      {/* =======================
Project content START */}

      {/* =======================
Project content END */}
      {/* =======================
CTA START */}

      {/* =======================
CTA END */}
    </>


  )
}

export default Study2Page