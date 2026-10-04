import type { Metadata } from 'next'
import TopNavigationPage from '@/components/TopNavigation'
import React from 'react'
import Hero from './components/Hero'
import Team from './components/Team'
import VideoAndCounter from './components/VideoAndCounter'
import Cta from './components/Cta'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Community | OpenMicroLock',
}

const TeamPage = () => {
  return (
    <>
      <TopNavigationPage />
      <Hero />
      <Team />
      <VideoAndCounter />
      <Cta />
      <Footer />
    </>

  )
}

export default TeamPage