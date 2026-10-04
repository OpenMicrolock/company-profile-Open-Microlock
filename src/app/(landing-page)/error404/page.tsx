import type { Metadata } from 'next'
import React from 'react'
// import elementsImg from '@/assets/images/elements/404.svg'
// import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration.svg'
import TopNavigationPage from '@/components/TopNavigation'
import Hero from './components/Hero'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Page Not Found | OpenMicroLock',
}

const Error404Page = () => {
  return (
    <>
      <TopNavigationPage />
      <Hero />
      <Footer />
    </>
  )
}

export default Error404Page