import React from 'react'
import Hero from './components/Hero'
import TopNavigationPage from '@/components/TopNavigation'
import Blog from './components/Blog'
import Footer from '@/components/Footer'

const BlogMinimalPage = () => {
  return (
    <>
      <TopNavigationPage position showSignUp />
      <Hero />
      <Blog />
      <Footer />
    </>

  )
}

export default BlogMinimalPage