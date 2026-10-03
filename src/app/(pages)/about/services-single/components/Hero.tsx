'use client'
import React from 'react'
import servicesImg from '@/assets/images/services/4by3/03.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Sticky from 'react-sticky-el'
import useViewPort from '@/hooks/useViewPort'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Hero = () => {

  const viewPort = useViewPort()

  return (
    <section className="position-relative pt-8 pt-xl-9 pb-0 overflow-hidden mb-n6">
      <div className="bg-secondary-grad h-500px w-100 position-absolute bottom-0 start-0">
        <span>
          <svg className="mt-n2" viewBox="0 0 1950 135" xmlSpace="preserve">
            <path className="fill-body" d="M1480.3,110.5c238.7,18.9,359.6-42.2,469.7-80.7V1.7L0,0v129.4c57.3-41.7,287.7-15.9,446.4,0 c170.6,17.1,342.3-15.8,440.8-35.8C1104,49.6,1274.8,94.2,1480.3,110.5z" />
          </svg>
        </span>
      </div>
      <Container className="position-relative" data-sticky-container>
        <Row>
          <Col md={6}>
            <nav className="mb-2" aria-label="breadcrumb">
              <ol className="breadcrumb pt-0">
                <li className="breadcrumb-item"><Link href="/home">Home</Link></li>
                <li className="breadcrumb-item"><Link href="#">services</Link></li>
                <li className="breadcrumb-item active" aria-current="page">service detail</li>
              </ol>
            </nav>
            <h1 className="display-5 mb-5">Web design and development</h1>
            <Link  className="btn btn-dark icon-link icon-link-hover" href="">Start a project<IconifyIcon icon='bi:arrow-right' /> </Link>
            <div className="mt-5 mt-md-9">
              <h5>Overview</h5>
              <p>A brief introduction to your web development services. This can be a few sentences summarizing what you do and the unique value you bring to clients.</p>
              <p>At Folio, we specialize in creating custom web solutions that drive business growth. Our expert team delivers cutting-edge websites tailored to meet your unique needs. Highlight the main benefits of your web development services. This helps visitors quickly understand why they should choose you over competitors.</p>
              <p>Highlight the main benefits of your web development services. This helps visitors quickly understand why they should choose you over competitors.</p>
            </div>
          </Col>
          <Col md={5} className="ms-auto">
            <Sticky
              disabled={viewPort ? viewPort.width <= 576 : false}
              topOffset={100}
              bottomOffset={0}
              boundaryElement="div.row"
              hideOnBoundaryHit={false}
              stickyStyle={{ transition: '0.2s all linear' }} >
                <div className="rounded-4 h-400px h-lg-500px" style={{ background: `url(${servicesImg.src}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            </Sticky>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero