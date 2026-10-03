'use client'
import Image from 'next/image'
import React from 'react'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration.svg'
import ClayDecorationImg from '@/assets/images/elements/clay-decoration.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import GlightBox from '@/components/GlightBox'
import CountUp from 'react-countup'
import { Card, CardFooter, CardHeader, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-secondary position-relative pt-xl-8">
      <div className="position-absolute top-0 start-0 mt-n9 ms-n5">
        <Image src={decorationImg} className="blur-7 opacity-2" alt="Grad shape" />
      </div>
      <div className="position-absolute top-0 start-50 mt-n9 ms-n9">
        <Image src={decorationImg} className="blur-8 opacity-1" alt="Grad shape" />
      </div>
      <Container className="position-relative pt-4 pt-sm-5">
        <div className="position-absolute top-50 start-0 translate-middle mt-5">
          <Image src={ClayDecorationImg} alt="Clay-decoration" />
        </div>
        <div className="inner-container text-center align-items-center mb-5 mb-md-7">
          <nav className="mb-2 justify-content-center d-flex" aria-label="breadcrumb">
            <ol className="breadcrumb pt-0">
              <li className="breadcrumb-item"><Link href="/home">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">About us</li>
            </ol>
          </nav>
          <h1 className="display-5 mb-4">Elevating <span className="text-primary-grad">Brands</span> with Distinctive Visuals</h1>
          <div className="d-md-flex justify-content-center align-items-center py-2">
            <Link href="/about/services-grid" className="btn btn-white-shadow mb-4 mb-md-0">Explore our services</Link>
            <div className="d-flex align-items-center justify-content-center text-start ms-0 ms-md-4">
              <GlightBox data-glightbox data-gallery="office-tour" href="https://www.youtube.com/embed/tXHviS-4ygo" className="btn btn-lg btn-round btn-dark mb-0 flex-shrink-0 stretched-link">
                <IconifyIcon icon='bi:play-fill' className="fs-5" />
              </GlightBox>
              <p className="mb-0 ms-3 heading-color" style={{ maxWidth: '13rem' }}>Learn about our journey and growth</p>
            </div>
          </div>
        </div>
        <Row className="position-relative g-4 g-lg-5">
          <Col sm={6} xl={3}>
            <Card className="bg-body bg-opacity-50 bg-blur rounded-4 h-100 p-3">
              <CardHeader className="bg-transparent mb-4 mb-sm-6">
                <p className="heading-color">Engaging users across our 2024 platforms</p>
              </CardHeader>
              <CardFooter className="bg-transparent d-flex mt-auto">
                <h4 className="purecounter h2 mb-0" data-purecounter-start={0} data-purecounter-end={3500} data-purecounter-delay={300}>
                  <CountUp duration={3} start={0} end={3500} />
                </h4>
                <span className="h2 text-primary mb-0">+</span>
              </CardFooter>
            </Card>
          </Col>
          <Col sm={6} xl={3}>
            <Card className="bg-body bg-opacity-50 bg-blur rounded-4 h-100 p-3">
              <CardHeader className="bg-transparent mb-4 mb-sm-6">
                <p className="heading-color">Showcasing creative excellence in every project</p>
              </CardHeader>
              <CardFooter className="bg-transparent d-flex mt-auto">
                <span className="text-success mb-0"><IconifyIcon icon='bi:arrow-up' /></span>
                <h4 className="purecounter h2 mb-0" data-purecounter-start={0} data-purecounter-end={105} data-purecounter-delay={300}>
                  <CountUp duration={3} start={0} end={150} />
                </h4>
                <span className="h2 text-primary mb-0">+</span>
              </CardFooter>
            </Card>
          </Col>
          <Col sm={6} xl={3}>
            <Card className="bg-body bg-opacity-50 bg-blur rounded-4 h-100 p-3">
              <CardHeader className="bg-transparent mb-4 mb-sm-6">
                <p className="heading-color">Track and analyze business reports</p>
              </CardHeader>
              <CardFooter className="bg-transparent d-flex mt-auto">
                <h4 className="purecounter h2 mb-0" data-purecounter-start={0} data-purecounter-end={97} data-purecounter-delay={300}>
                  <CountUp duration={3} start={0} end={97} />
                </h4>
                <span className="h2 text-primary mb-0">%</span>
              </CardFooter>
            </Card>
          </Col>
          <Col sm={6} xl={3}>
            <Card className="bg-body bg-opacity-50 bg-blur rounded-4 h-100 p-3">
              <CardHeader className="bg-transparent mb-4 mb-sm-6">
                <p className="heading-color">Enhanced growth in onboarding conversions</p>
              </CardHeader>
              <CardFooter className="bg-transparent d-flex mt-auto">
                <h4 className="purecounter h2 mb-0" data-purecounter-start={0} data-purecounter-end={68} data-purecounter-delay={300}>
                  <CountUp duration={3} start={0} end={68} />
                </h4>
                <span className="h2 text-primary mb-0">%</span>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero