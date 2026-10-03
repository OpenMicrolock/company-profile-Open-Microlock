import React from 'react'
import elementsImg from '@/assets/images/elements/404.svg'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration.svg'
import TopNavigationPage from '@/components/TopNavigation'
import Hero from './components/Hero'
import Footer from '@/components/Footer'

const Error404Page = () => {
  return (
    <>
      <TopNavigationPage position showSignUp />
      <Hero />
      <Footer />
    </>
  )
}

export default Error404Page