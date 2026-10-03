import TopNavigationPage from '@/components/TopNavigation'
import React from 'react'
import Hero from './components/Hero'
import Client from './components/Client'
import FeaturesAccordion from './components/FeaturesAccordion'
import FeaturesListContent from './components/FeaturesListContent'
import FeaturesSkill from './components/FeaturesSkill'
import Cta from './components/Cta'
import Integrations from './components/Integrations'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

const AiChatbotPage = () => {
  return (
    <>
      <TopNavigationPage position headerTheme showSignUpWithLogin />
      <Hero />
      <Client />
      <FeaturesAccordion />
      <FeaturesListContent />
      <FeaturesSkill />
      <Integrations />
      <Cta />
      <Pricing />
      <Footer />
    </>
  )
}

export default AiChatbotPage