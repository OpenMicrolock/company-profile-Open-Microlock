import Image from 'next/image'
import React from 'react'
import featureImg from '@/assets/images/mobile-app/feature.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import reviewImg from '@/assets/images/elements/review.svg'
import appleImg from '@/assets/images/elements/apple.svg'
import storeImg from '@/assets/images/elements/play-store.svg'
import { Col, Container, Row } from 'react-bootstrap'

const Features = () => {
  return (
    <section className="bg-secondary position-relative overflow-hidden z-index-2 pt-6">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-md-6">
          <h2 className="mb-0">Built for <span className="text-primary-grad">smart home</span> control</h2>
        </div>
        <Row className="g-4 g-lg-5 align-items-lg-center">
          <Col md={6} lg={4} className="order-1 pe-5">
            <div className="aos d-flex justify-content-lg-end mb-4 mb-md-6" data-aos="fade-right" data-aos-delay={100} data-aos-duration={1000} data-aos-easing="ease-in-out">
              <div className="text-lg-end order-1 ms-3 ms-lg-0 me-lg-3">
                <h6 className="mb-2">Lock and unlock doors</h6>
                <p className="mb-0">Open or close a door remotely over your local Wi-Fi with a single request.</p>
              </div>
              <div className="icon-lg bg-body text-success rounded-circle flex-shrink-0 order-lg-2"><IconifyIcon icon='bi:cash-stack' className="fa-lg" /></div>
            </div>
            <div className="aos d-flex justify-content-lg-end mb-4 mb-md-6" data-aos="fade-right" data-aos-delay={100} data-aos-duration={1000} data-aos-easing="ease-in-out">
              <div className="text-lg-end order-1 ms-3 ms-lg-0 me-lg-3">
                <h6 className="mb-2">Control lamps and lights</h6>
                <p className="mb-0">Switch lamps on and off from the app, using the same secure API.</p>
              </div>
              <div className="icon-lg bg-body text-purple rounded-circle flex-shrink-0 order-lg-2"><IconifyIcon icon='bi:receipt' className="fa-lg" /></div>
            </div>
            <div className="aos d-flex justify-content-lg-end" data-aos="fade-right" data-aos-delay={100} data-aos-duration={1000} data-aos-easing="ease-in-out">
              <div className="text-lg-end order-1 ms-3 ms-lg-0 me-lg-3">
                <h6 className="mb-2">Device status</h6>
                <p className="mb-0">Check whether each lock and device is locked, unlocked, or online.</p>
              </div>
              <div className="icon-lg bg-body text-warning rounded-circle flex-shrink-0 order-lg-2"><IconifyIcon icon='bi:bell' className="fa-lg" /></div>
            </div>
          </Col>
          <Col md={8} lg={4} className="mx-auto order-3 order-lg-2">
            <Image src={featureImg} className="aos" data-aos="fade-up" data-aos-delay={100} data-aos-duration={1000} data-aos-easing="ease-in-out" alt="feature mobile" />
          </Col>
          <Col md={6} lg={4} className="order-2 order-lg-3">
            <div className="aos d-flex mb-4 mb-md-6" data-aos="fade-left" data-aos-delay={100} data-aos-duration={1000} data-aos-easing="ease-in-out">
              <div className="icon-lg bg-body text-info rounded-circle flex-shrink-0"><IconifyIcon icon='bi:person-vcard' className="fa-lg" /></div>
              <div className="ms-3">
                <h6 className="mb-2">Token-based access</h6>
                <p className="mb-0">Every request is checked against a secret token, so only authorized apps can control your devices.</p>
              </div>
            </div>
            <div className="aos d-flex mb-4 mb-md-6" data-aos="fade-left" data-aos-delay={100} data-aos-duration={1000} data-aos-easing="ease-in-out">
              <div className="icon-lg bg-body text-primary rounded-circle flex-shrink-0"><IconifyIcon icon='bi:gear' className="fa-lg" /></div>
              <div className="ms-3">
                <h6 className="mb-2">Easy Wi-Fi setup</h6>
                <p className="mb-0">If Wi-Fi cannot be reached, the device starts its own access point so you can still configure it.</p>
              </div>
            </div>
            <div className="aos d-flex" data-aos="fade-left" data-aos-delay={100} data-aos-duration={1000} data-aos-easing="ease-in-out">
              <div className="icon-lg bg-body text-pink rounded-circle flex-shrink-0"><IconifyIcon icon='bi:headset' className="fa-lg" /></div>
              <div className="ms-3">
                <h6 className="mb-2">Open source</h6>
                <p className="mb-0">Read the code, build your own firmware, and contribute improvements to the project.</p>
              </div>
            </div>
          </Col>
        </Row>
        <div className="inner-container row g-4 mt-6 mt-md-8" data-aos="zoom-in" data-aos-delay={100} data-aos-duration={1000} data-aos-easing="ease-in-out">
          <Col sm={6} md={4}>
            <div className="text-center border-end pe-sm-5 h-100">
              <Image src={reviewImg} className="h-60px mb-4" alt="review image" />
              <h4>4.5/5.0</h4>
              <p className="mb-0">Average rating from users</p>
            </div>
          </Col>
          <Col sm={6} md={4}>
            <div className="text-center border-end pe-sm-5 h-100">
              <div className="d-flex justify-content-center gap-2 mb-4">
                <Image src={appleImg} className="h-60px" alt='appleImg' />
                <Image src={storeImg} className="h-60px" alt='storeImg' />
              </div>
              <h4>35K+</h4>
              <p className="mb-0">Review on google play and iOS</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center h-100">
              <span className="display-6 text-primary-grad"><IconifyIcon icon='bi:people' /></span>
              <h4>86M</h4>
              <p className="mb-0">Members of the OpenMicroLock community</p>
            </div>
          </Col>
        </div>
      </Container>
    </section>
  )
}

export default Features