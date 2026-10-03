import React from 'react'
import BlogDetails from './components/BlogDetails'
import TopNavigationPage from '@/components/TopNavigation'
import Related from './components/Related'
import Footer from '@/components/Footer'

const BlogSinglePage = () => {
  return (
    <>
      <TopNavigationPage position showSignUp />
      <BlogDetails />
      <Related />
      <Footer />
    </>
  )
}

export default BlogSinglePage