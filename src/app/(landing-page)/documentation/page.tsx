import type { Metadata } from 'next'
import TopNavigationPage from '@/components/TopNavigation'
import React from 'react'
import Hero from './components/Hero'
import Integrations from './components/Integrations'
import CtaBox from './components/CtaBox'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Documentation | OpenMicroLock',
}

const DocumentationPage = () => {
  return (
    <>
      <TopNavigationPage />
      <Hero />
      <Integrations />
      <CtaBox />
      <Footer />
    </>

  )
}

export default DocumentationPage