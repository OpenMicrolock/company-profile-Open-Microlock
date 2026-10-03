import TopNavigationPage from '@/components/TopNavigation'
import React from 'react'
import Hero from './components/Hero'
import Integrations from './components/Integrations'
import CtaBox from './components/CtaBox'
import FooterOther from '@/components/FooterOther'

const IntegrationsImg = () => {
  return (
    <>
      <TopNavigationPage position showSignUpWithLogin />
      <Hero />
      <Integrations />
      <CtaBox />
      <FooterOther />
    </>

  )
}

export default IntegrationsImg