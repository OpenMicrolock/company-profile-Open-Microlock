'use client'
import TopNavigationPage from '@/components/TopNavigation'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React, { useState } from 'react'
import Hero from './components/Hero'
import Client from './components/Client'
import About from './components/About'
import Services from './components/Services'
import Video from './components/Video'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import BoxLast from './components/BoxLast'
import Footer from './components/Footer'
import Faq from './components/Faq'
import { Alert, Container } from 'react-bootstrap'
import Link from 'next/link'

const SoftwareCompanyPage = () => {

  const [showAlert, setShowAlert] = useState(true);

  const handleAccept = () => {
    setShowAlert(false);
  };
  return (
    <>
      <div className="header-absolute">
        <div className="alert fade show bg-primary border-0 rounded-0 text-center overflow-hidden z-index-9 py-2 m-0 d-none d-lg-block" role="alert">
          <Container className="d-flex justify-content-between px-2 px-xl-4">
            <ul className="list-inline d-flex flex-wrap gap-3 text-white mb-0">
              <li className="list-inline-item small fw-light"><IconifyIcon icon='bi-headset' className=" me-2" />Call us: <Link href="#" className="link-white">+123 555 66 </Link></li>
              <li className="list-inline-item small fw-light"><IconifyIcon icon='bi-envelope' className=" me-2" />Email: <Link href="#" className="link-white">example@gmail.com</Link></li>
            </ul>
            <ul className="list-inline mb-0">
              <li className="list-inline-item small text-white">Follow us on: </li>
              <li className="list-inline-item"> <Link href="" className="link-white"><IconifyIcon icon='bi-facebook' className="" /></Link> </li>
              <li className="list-inline-item"> <Link href="" className="link-white"><IconifyIcon icon='bi-instagram' className="" /></Link> </li>
              <li className="list-inline-item"> <Link href="" className="link-white"><IconifyIcon icon='bi-twitter-x' className="" /></Link> </li>
              <li className="list-inline-item"> <Link href="" className="link-white"><IconifyIcon icon='bi-linkedin' className="" /></Link> </li>
            </ul>
          </Container>
        </div>
        <TopNavigationPage darkButton={{ text: 'Free consultation', icon: 'bi-calendar-week' }} />
      </div>
      <Hero />
      <Client />
      <About />
      <Services />
      <Video />
      <Testimonials />
      <Pricing />
      <Faq />
      <BoxLast />
      <Footer />

      {
        showAlert &&
        <Alert  className="alert-secondary alert-dismissible fade show position-fixed bottom-0 start-50 translate-middle-x z-index-99 rounded-3 d-none d-md-flex justify-content-between align-items-center shadow px-3 py-2" role="alert">
          <p className="heading-color fw-semibold mb-md-0">🍪 The website uses cookies to improve your web experience.</p>
          <a  onClick={handleAccept} className="bg-success text-success bg-opacity-10 rounded-pill py-1 px-3 mb-0 ms-md-2" data-bs-dismiss="alert" aria-label="Close">Accept
          </a>
        </Alert>
      }

    </>
  )
}

export default SoftwareCompanyPage