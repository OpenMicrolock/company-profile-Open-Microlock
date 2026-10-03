import TopNavigationPage from '@/components/TopNavigation'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import Hero from './components/Hero'
import Client from './components/Client'
import About from './components/About'
import Company from './components/Company'
import Review from './components/Review'
import Cta from './components/Cta'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import Link from 'next/link'

const AboutV2Page = () => {
  return (
    <>
      <div className="header-absolute">
        <div className="alert fade show bg-primary border-0 rounded-0 text-center overflow-hidden z-index-9 py-2 m-0 d-none d-lg-block" role="alert">
          <Container className="d-flex justify-content-between px-2 px-xl-4">
            <ul className="list-inline d-flex flex-wrap gap-3 text-white mb-0">
              <li className="list-inline-item fw-light"><IconifyIcon icon='bi:headset' className=" me-2" />Call us: <Link href="" className="link-white">+123 555 66 </Link></li>
              <li className="list-inline-item fw-light"><IconifyIcon icon='bi:envelope' className=" me-2" />Email: <Link href="" className="link-white">example@gmail.com</Link></li>
            </ul>
            <ul className="list-inline mb-0">
              <li className="list-inline-item small text-white">Follow us on: </li>
              <li className="list-inline-item"> <Link href="" className="link-white"><IconifyIcon icon='bi:facebook' /></Link> </li>
              <li className="list-inline-item"> <Link href="" className="link-white"><IconifyIcon icon='bi:instagram' /></Link> </li>
              <li className="list-inline-item"> <Link href="" className="link-white"><IconifyIcon icon='bi:twitter-x' /></Link> </li>
              <li className="list-inline-item"> <Link href="" className="link-white"><IconifyIcon icon='bi:linkedin' /></Link> </li>
            </ul>
          </Container>
        </div>
        <TopNavigationPage darkButton={{ text: 'Schedule a call', icon: 'bi-calendar-week' }} />
      </div>
      <Hero />
      <Client />
      <About />
      <Company />
      <Review />
      <Cta />
      <Footer />
    </>

  )
}

export default AboutV2Page