import Image from 'next/image'
import React from 'react'
import googleImg from '@/assets/images/elements/google-play.svg'
import appSoreImg from '@/assets/images/elements/app-store.svg'
import mobileImg from '@/assets/images/mobile-app/cta.png'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Cta = () => {
  return (
    <section className="bg-secondary-grad position-relative overflow-hidden py-7">
      <Container>
        <Row className="g-4 align-items-center">
          <Col md={6}>
            <h2 className="mb-4">Start your online banking today</h2>
            <p className="mb-4">Join the millions of users who are already enjoying a smarter, simpler, and more secure way to manage their finances.</p>
            <div className="d-sm-flex">
              <Link href=""> <Image src={googleImg} className="btn-transition me-4 mb-2 mb-sm-0" width={150} alt="play store" /> </Link>
              <Link href=""> <Image src={appSoreImg} className="btn-transition" width={150} alt="app-store" /> </Link>
            </div>
          </Col>
          <Col sm={9} md={6} className="mx-auto mb-n9">
            <Image src={mobileImg} className="aos mb-n5 mb-lg-n9 ms-lg-5" data-aos="fade-up" data-aos-delay={200} data-aos-duration={500} data-aos-easing="ease-in-out" alt="cta image" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Cta