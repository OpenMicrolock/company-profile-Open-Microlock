import Image from 'next/image'
import React from 'react'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration.svg'
import aboutImg from '@/assets/images/about/15.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Services = () => {
  return (
    <section className="overflow-hidden pt-0">
      <Container>
        <Row className="align-items-xl-center">
          <Col lg={5} className="position-relative mb-4 mb-lg-0">
            <div className="position-absolute top-0 end-0 me-n6 mt-6">
              <Image src={decorationImg} className="blur-9 opacity-2" alt="Grad shape" />
            </div>
            <Image src={aboutImg} className="rounded-4 z-index-2 position-relative" alt="about image" />
          </Col>
          <Col lg={7} xl={6} className="ms-auto">
            <h2 className="mb-3 mb-sm-4">Comprehensive financial solutions for you</h2>
            <Row className="g-0">
              <Col sm={6}>
                <ul className="nav nav-link-hover-underline flex-column mb-0">
                  <li className="nav-item pb-1">
                    <Link href="/about/services-single" className="nav-link fs-6">
                      <span className="nav-link-text">Financial advisory</span>
                      <span className="nav-link-icon ms-1"><IconifyIcon icon='bi-arrow-right' className="rtl-flip" /></span>
                    </Link>
                  </li>
                  <li className="nav-item pb-1">
                    <Link href="/about/services-single" className="nav-link fs-6">
                      <span className="nav-link-text">Consulting</span>
                      <span className="nav-link-icon ms-1"><IconifyIcon icon='bi-arrow-right' className="rtl-flip" /></span>
                    </Link>
                  </li>
                  <li className="nav-item pb-1">
                    <Link href="/about/services-single" className="nav-link fs-6">
                      <span className="nav-link-text">Management</span>
                      <span className="nav-link-icon ms-1"><IconifyIcon icon='bi-arrow-right' className="rtl-flip" /></span>
                    </Link>
                  </li>
                  <li className="nav-item pb-1">
                    <Link href="/about/services-single" className="nav-link fs-6">
                      <span className="nav-link-text">Data analysis</span>
                      <span className="nav-link-icon ms-1"><IconifyIcon icon='bi-arrow-right' className="rtl-flip" /></span>
                    </Link>
                  </li>
                  <li className="nav-item pb-1">
                    <Link href="/about/services-single" className="nav-link fs-6">
                      <span className="nav-link-text">Debt management</span>
                      <span className="nav-link-icon ms-1"><IconifyIcon icon='bi-arrow-right' className="rtl-flip" /></span>
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col sm={6}>
                <ul className="nav nav-link-hover-underline flex-column mb-0">
                  <li className="nav-item pb-1">
                    <Link href="/about/services-single" className="nav-link fs-6">
                      <span className="nav-link-text">Legal &amp; Tax</span>
                      <span className="nav-link-icon ms-1"><IconifyIcon icon='bi-arrow-right' className="rtl-flip" /></span>
                    </Link>
                  </li>
                  <li className="nav-item pb-1">
                    <Link href="/about/services-single" className="nav-link fs-6">
                      <span className="nav-link-text">Business consulting</span>
                      <span className="nav-link-icon ms-1"><IconifyIcon icon='bi-arrow-right' className="rtl-flip" /></span>
                    </Link>
                  </li>
                  <li className="nav-item pb-1">
                    <Link href="/about/services-single" className="nav-link fs-6">
                      <span className="nav-link-text">Risk advisory</span>
                      <span className="nav-link-icon ms-1"><IconifyIcon icon='bi-arrow-right' className="rtl-flip" /></span>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
            <p className="bg-secondary bg-opacity-25 border border-primary border-opacity-10 rounded-3 d-inline-block mt-3 mt=lg-4 mb-0 px-4 py-3">🤝 Looking for business opportunity?
              <Link href="/contact-1" className="fw-semibold hover-underline-animation">Send message</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Services