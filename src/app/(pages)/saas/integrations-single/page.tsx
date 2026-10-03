import Image from 'next/image'
import React from 'react'
import icons5Img from '@/assets/images/client/icons/05.svg'
import Hero from './components/Hero'
import TopNavigationPage from '@/components/TopNavigation'
import FooterOther from '@/components/FooterOther'

const IntegrationsSinglePage = () => {
  return (
    <>
      <TopNavigationPage position showSignUpWithLogin />
      <Hero />
      <FooterOther />
    </>
  )
}

export default IntegrationsSinglePage