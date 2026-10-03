import TopNavigationPage from '@/components/TopNavigation'
import React from 'react'
import Hero from './components/Hero'
import Content from './components/Content'
import Services from './components/Services'
import CoreValue from './components/CoreValue'
import Industries from './components/Industries'
import Video from './components/Video'
import Team from './components/Team'
import Clients from './components/Clients'
import Footer from './components/Footer'

const FinanceConsultingPage = () => {
  return (
    <>
      <TopNavigationPage position darkButton={{ text: 'Book a call', icon: 'bi-telephone' }} />
      <Hero />
      <Content />
      <Services />
      <CoreValue />
      <Industries />
      <Video />
      <Team />
      <Clients />
      <Footer />
    </>
  )
}

export default FinanceConsultingPage