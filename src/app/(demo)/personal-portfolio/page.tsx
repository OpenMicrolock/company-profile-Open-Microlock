import TopNavigationPage from '@/components/TopNavigation'
import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

const PersonalPortfolioPage = () => {
  return (
    <>
      <TopNavigationPage position showSignUp />
      <Hero />
      <Projects />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </>

  )
}

export default PersonalPortfolioPage