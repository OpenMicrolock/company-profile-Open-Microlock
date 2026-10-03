import React from 'react'
import Hero from './components/Hero'
import TopNavigationPage from '@/components/TopNavigation'
import Blog from './components/Blog'
import Quote from './components/Quote'
import BlogSlider from './components/BlogSlider'
import Footer from './components/Footer'

const BlogHomePage = () => {
  return (
    <>
      <TopNavigationPage position showSignUp />
      <Hero />
      <Blog />
      <Quote />
      <BlogSlider />
      <Footer />
    </>
  )
}

export default BlogHomePage