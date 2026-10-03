import TopNavigationPage from '@/components/TopNavigation'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import Hero from './components/Hero'
import Skill from './components/Skill'
import About from './components/About'
import Steps from './components/Steps'
import Features from './components/Features'
import Integrations from './components/Integrations'
import Pricing from './components/Pricing'
import Blogs from './components/Blogs'
import Footer from './components/Footer'
import Link from 'next/link'
import { Alert } from 'react-bootstrap'

const SaasPage = () => {
  return (
    <>
      <div className="header-absolute">
        <Alert className=" fade show bg-dark border-0 rounded-0 text-center overflow-hidden z-index-9 py-2 m-0 d-none d-lg-block" role="alert">
          <p className="text-white small m-0"><IconifyIcon icon='bi:rocket-takeoff-fill' className="me-2" /> New version available! discover the latest enhancements. <Link href="" className="fw-semibold text-purple hover-underline-animation ">Click here to upgrade!</Link></p>
        </Alert>
        <TopNavigationPage showSignUpWithLogin />
      </div>
      <Hero />
      <Skill />
      <About />
      <Steps />
      <Features />
      <Integrations />
      <Pricing />
      <Blogs />
      <Footer />
    </>

  )
}

export default SaasPage