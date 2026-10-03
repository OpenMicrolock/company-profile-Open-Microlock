'use client'
import GlightBox from '@/components/GlightBox'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import React from 'react'
import CountUp from 'react-countup'
import videoBg from '@/assets/images/team/video-bg.jpg'
import { Card, Col, Container, Row } from 'react-bootstrap'

const VideoAndCounter = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="g-4 g-sm-5">
          <Col lg={5}>
            <h2 className="mb-3">Our lifetime achievements</h2>
            <p className="mb-0">Join our team Creative Agency Specializing in: Video Production, Web Design, Branding, Brand Strategy.</p>
            <Row className="mt-4 mt-lg-6">
              <Col sm={5} className="mb-3 mb-sm-0">
                <div className="border-2 border-start border-purple border-opacity-50 ps-3">
                  <div className="d-flex mb-1">
                    <h3 className="purecounter mb-0" data-purecounter-start={0} data-purecounter-end={80} data-purecounter-delay={300}>
                      <CountUp duration={3} start={0} end={80} />
                    </h3>
                    <span className="h3 text-primary mb-0">+</span>
                  </div>
                  <p className="mb-0">Total employees</p>
                </div>
              </Col>
              <Col sm={5}>
                <div className="border-2 border-start border-purple border-opacity-50 ps-3">
                  <div className="d-flex mb-1">
                    <h3 className="purecounter mb-0" data-purecounter-start={0} data-purecounter-end={12} data-purecounter-delay={300}>
                      <CountUp duration={3} start={0} end={12} />
                    </h3>
                    <span className="h3 text-primary mb-0">+</span>
                  </div>
                  <p className="mb-0">Total awards</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={7} xl={6} className="ms-auto">
            <Card className="card-body overflow-hidden p-0">
              <Image src={videoBg} className="card-img" alt="about-img" />
              <div className="bg-overlay bg-dark opacity-2" />
              <div className="position-absolute end-0 bottom-0 m-3 z-index-2">
                <GlightBox href="https://www.youtube.com/embed/tXHviS-4ygo" className="btn btn-sm btn-white" data-glightbox data-gallery="course-video"><IconifyIcon icon='bi:youtube' className="text-danger fa-fw fa-xl me-1" /> Watch our story</GlightBox>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default VideoAndCounter