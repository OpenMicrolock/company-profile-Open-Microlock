import React from 'react'
import bgImg from '@/assets/images/bg/04.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="overflow-hidden pt-6 pt-sm-7 pb-0">
      <div className="position-relative pb-8 pt-3 pt-sm-6 py-xl-9" style={{ background: `url(${bgImg.src}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'top' }}>
        <div className="bg-overlay bg-dark opacity-6" />
        <Container className="position-relative z-index-2 py-3">
          <Row className="align-items-center">
            <Col sm={11} lg={6}>
              <h1 className="text-white display-6 my-4">Empowering Your <span className="fw-light">Financial</span> Future</h1>
              <p className="text-white lead mb-4 mb-sm-5">Our team is dedicated to helping you achieve your financial goals with confidence and clarity.</p>
              <Link className="btn btn-primary-grad icon-link icon-link-hover mb-0" href="">Get started today<IconifyIcon icon='bi-arrow-right' /> </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Hero