import TopNavigationPage from '@/components/TopNavigation'
import React from 'react'
import Hero from './components/Hero'
import Team from './components/Team'
import VideoAndCounter from './components/VideoAndCounter'
import Cta from './components/Cta'
import Footer from '@/components/Footer'

const TeamPage = () => {
  return (
    <>
      <TopNavigationPage position showSignUp />
      <Hero />
      <Team />
      <VideoAndCounter />
      <Cta />
      <Footer />
    </>

  )
}

export default TeamPage