import TopNavigationPage from '@/components/TopNavigation'
import React from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Client from './components/Client'
import Services from './components/Services'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import Project from './components/Project'
import NewsLetter from './components/NewsLetter'
import Blog from './components/Blog'

const ClassicDefaultPage = () => {
  return (
    <>
      <TopNavigationPage showSignUp position/>
      <Hero />
      <Client />
      <Services />
      <Work />
      <Project />
      <Testimonials />
      <NewsLetter />
      <Blog />
      <Footer />
    </>

  )
}

export default ClassicDefaultPage