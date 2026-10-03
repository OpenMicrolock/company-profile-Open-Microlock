import TopNavigationPage from '@/components/TopNavigation'
import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Skill from './components/Skill'
import Testimonials from './components/Testimonials'
import Client from './components/Client'
import Awards from './components/Awards'
import Footer from './components/Footer'

const AiAgencyPage = () => {
  return (
    <>
      <TopNavigationPage position darkButton={{ text: 'Schedule a call', icon: 'bi-calendar-week' }} />
      <Hero />
      <Features />
      <About />
      <Services />
      <Projects />
      <Skill />
      <Testimonials />
      <Client />
      <Awards />
      <Footer />
    </>
  )
}

export default AiAgencyPage