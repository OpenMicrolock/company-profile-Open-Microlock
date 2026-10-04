import Image from 'next/image'
import React from 'react'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration-2.svg'
import getAndroid from '@/assets/images/elements/android-download.svg'
import getIos from '@/assets/images/elements/ios-download.svg'
import mobileImg from '@/assets/images/mobile-app/hero.png'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="position-relative overflow-hidden pt-sm-8 pt-lg-9 pb-0">
      <span>
        <svg className="position-absolute bottom-0 start-0 mb-n1 mb-lg-n4 z-1" viewBox="0 0 1920 149" xmlSpace="preserve">
          <path className="text-secondary" d="M873.3,37.9C775,19.2,603.7-11.5,433.5,4.4C275.1,19.3,45.1,43.4-12,4.4v121V149l1946-2.6V97.6 c-109.9-35.9-230.6-93.1-468.8-75.4C1260.2,37.3,1089.7,79,873.3,37.9z" fill="currentColor" />
        </svg>
      </span>
      <div className="position-absolute end-0 top-0">
        <Image src={decorationImg} className="opacity-2 blur-9 h-300px rotate-335" alt="Grad shape" />
      </div>
      <Container className="position-relative pt-4 pt-sm-0 pb-8 pb-xl-9">
        <Row className="align-items-center">
          <Col lg={6}  className="mb-6 mb-lg-0">
            <h1 className="fw-bold mb-3 mb-md-4">Open Source Smart Lock Platform</h1>
            <p className="lead mb-3 mb-md-4">Control doors, lamps, and other smart home devices with an ESP32-based C++ system, and monitor them from the DARMI app.</p>
            <div className="d-sm-flex mb-4 mb-lg-7">
              <Link href=""> <Image src={getAndroid} className="btn-transition me-4 mb-2 mb-sm-0" width={180} alt="play store" /> </Link>
              <Link href=""> <Image src={getIos} className="btn-transition" width={180} alt="app-store" /> </Link>
            </div>
          </Col>
          <Col sm={9} lg={5} xxl={4} className="position-relative mx-auto">
            <Image src={mobileImg} className="aos mb-n8 mb-md-n9 mb-xxl-n8" data-aos="fade-up" data-aos-delay={100} data-aos-duration={800} data-aos-easing="ease-in-out" alt="mobile image" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero