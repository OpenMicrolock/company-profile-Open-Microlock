import React from 'react'
import portfolio3Img from '@/assets/images/portfolio/03.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-secondary pt-xl-8 pb-0">
      <Container className="position-relative pt-4 pt-sm-5">
        <Row className="g-4">
          <Col lg={5}>
            <nav className="mb-2" aria-label="breadcrumb">
              <ol className="breadcrumb pt-0">
                <li className="breadcrumb-item"><Link href="/home">Home</Link></li>
                <li className="breadcrumb-item"><Link href="#">Portfolio</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Portfolio case studies</li>
              </ol>
            </nav>
            <h1 className="mb-0">Brand Identity Development</h1>
          </Col>
          <Col lg={4} className="ms-auto">
            <Row className="g-3 g-sm-4">
              <Col sm={6} md={3} lg={6}>
                <small>Category</small>
                <p className="heading-color fw-semibold mt-1 mb-0">Branding</p>
              </Col>
              <Col sm={6} md={3} lg={6}>
                <small>Client</small>
                <p className="heading-color fw-semibold mt-1 mb-0">Themesdesginer Agency</p>
              </Col>
              <Col sm={6} md={3} lg={6}>
                <small>Location</small>
                <p className="heading-color fw-semibold mt-1 mb-0">489 Depot Road Midland</p>
              </Col>
              <Col sm={6} md={3} lg={6}>
                <small>Date</small>
                <p className="heading-color fw-semibold mt-1 mb-0">July 6, 2024</p>
              </Col>
            </Row>
            <Button variant='white-shadow' size='sm' className="mb-0 mt-4">View project website<IconifyIcon icon='bi:box-arrow-up-right' className="ms-2" /></Button>
          </Col>
        </Row>
      </Container>
      <div className="h-400px h-md-600px mt-6" style={{ background: `url(${portfolio3Img.src}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
    </section>
  )
}

export default Hero