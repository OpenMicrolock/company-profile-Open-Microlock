'use client'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import React from 'react'
import mobileAppImg from '@/assets/images/mobile-app/01.jpg'
import rocketImg from '@/assets/images/elements/rocket-03.png'
import deocrationImg from '@/assets/images/mobile-app/deocration.jpg'
import CountUp from 'react-countup'
import { Col, Container, Row } from 'react-bootstrap'

const Feature2 = () => {
  return (
    <section className="overflow-hidden pt-0">
      <Container>
        <Row className="align-items-lg-center">
          <Col md={6}>
            <h2 className="mb-lg-3">Local control, built on open source</h2>
            <ul className="list-group list-group-borderless mb-0">
              <li className="list-group-item d-flex fw-semibold pb-0"><IconifyIcon icon='bi:check-circle' className="text-primary me-2" />Control from your phone</li>
              <li className="list-group-item d-flex fw-semibold pb-0"><IconifyIcon icon='bi:check-circle' className="text-primary me-2" />Token-protected access</li>
              <li className="list-group-item d-flex fw-semibold pb-0"><IconifyIcon icon='bi:check-circle' className="text-primary me-2" />Open hardware and firmware</li>
            </ul>
            <hr className="my-4" />
            <Row>
              <Col lg={5}>
                <div className="d-flex align-items-center mb-4">
                  <div className="w-40px h-100 me-4 me-sm-5 flex-shrink-0">
                    <div className="d-flex">
                      <h4 className="purecounter mb-0" data-purecounter-start={0} data-purecounter-end={98} data-purecounter-delay={300}>
                        <CountUp duration={3} start={0} end={98} />
                      </h4>
                      <span className="h4 text-pink mb-0">%</span>
                    </div>
                  </div>
                  <p className="mb-0">Local network control</p>
                </div>
              </Col>
              <Col lg={5}>
                <div className="d-flex align-items-center mb-4">
                  <div className="w-40px h-100 me-4 me-sm-5 flex-shrink-0">
                    <div className="d-flex">
                      <h4 className="purecounter mb-0" data-purecounter-start={0} data-purecounter-end={60} data-purecounter-delay={300}>
                        <CountUp duration={3} start={0} end={60} />
                      </h4>
                      <span className="h4 text-success mb-0">+</span>
                    </div>
                  </div>
                  <p className="mb-0">Countries with community members</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={6} lg={5} className="position-relative ms-auto">
            <Image src={mobileAppImg} className="rounded-4" alt="feature image" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Feature2