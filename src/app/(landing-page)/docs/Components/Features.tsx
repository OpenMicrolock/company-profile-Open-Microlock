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
          <h2 className="mb-0">Discover the power of our online <span className="text-primary-grad">banking</span> app</h2>
        </div>
        <Row className="g-4 g-lg-5 align-items-lg-center">
          <Col md={6} lg={4} className="order-1 pe-5">
            <div className="aos d-flex justify-content-lg-end mb-4 mb-md-6" data-aos="fade-right" data-aos-delay={100} data-aos-duration={1000} data-aos-easing="ease-in-out">
              <div className="text-lg-end order-1 ms-3 ms-lg-0 me-lg-3">
                <h6 className="mb-2">Instant money transfers</h6>
                <p className="mb-0">Transfer money to friends, family, or businesses quickly and securely.</p>
              </div>
              <div className="icon-lg bg-body text-success rounded-circle flex-shrink-0 order-lg-2"><IconifyIcon icon='bi:cash-stack' className="fa-lg" /></div>
            </div>
            <div className="aos d-flex justify-content-lg-end mb-4 mb-md-6" data-aos="fade-right" data-aos-delay={100} data-aos-duration={1000} data-aos-easing="ease-in-out">
              <div className="text-lg-end order-1 ms-3 ms-lg-0 me-lg-3">
                <h6 className="mb-2">Easy bill payments</h6>
                <p className="mb-0">Pay utility bills, credit card bills, and more with just a few taps.</p>
              </div>
              <div className="icon-lg bg-body text-purple rounded-circle flex-shrink-0 order-lg-2"><IconifyIcon icon='bi:receipt' className="fa-lg" /></div>
            </div>
            <div className="aos d-flex justify-content-lg-end" data-aos="fade-right" data-aos-delay={100} data-aos-duration={1000} data-aos-easing="ease-in-out">
              <div className="text-lg-end order-1 ms-3 ms-lg-0 me-lg-3">
                <h6 className="mb-2">Real-time notifications</h6>
                <p className="mb-0">Stay updated with real-time alerts for transactions and account activities.</p>
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
                <h6 className="mb-2">Account management</h6>
                <p className="mb-0">Monitor your account balance, transaction history, and manage your finances efficiently.</p>
              </div>
            </div>
            <div className="aos d-flex mb-4 mb-md-6" data-aos="fade-left" data-aos-delay={100} data-aos-duration={1000} data-aos-easing="ease-in-out">
              <div className="icon-lg bg-body text-primary rounded-circle flex-shrink-0"><IconifyIcon icon='bi:gear' className="fa-lg" /></div>
              <div className="ms-3">
                <h6 className="mb-2">Budgeting tools</h6>
                <p className="mb-0">Use built-in tools to set budgets, track spending, and save more effectively.</p>
              </div>
            </div>
            <div className="aos d-flex" data-aos="fade-left" data-aos-delay={100} data-aos-duration={1000} data-aos-easing="ease-in-out">
              <div className="icon-lg bg-body text-pink rounded-circle flex-shrink-0"><IconifyIcon icon='bi:headset' className="fa-lg" /></div>
              <div className="ms-3">
                <h6 className="mb-2">24/7 customer support</h6>
                <p className="mb-0">Get help anytime with our dedicated customer support team, available around the clock.</p>
              </div>
            </div>
          </Col>
        </Row>
        <div className="inner-container row g-4 mt-6 mt-md-8" data-aos="zoom-in" data-aos-delay={100} data-aos-duration={1000} data-aos-easing="ease-in-out">
          <Col sm={6} md={4}>
            <div className="text-center border-end pe-sm-5 h-100">
              <Image src={reviewImg} className="h-60px mb-4" alt="review image" />
              <h4>4.5/5.0</h4>
              <p className="mb-0">Rating by 365 users</p>
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
              <p className="mb-0">Total members use this platform</p>
            </div>
          </Col>
        </div>
      </Container>
    </section>
  )
}

export default Features