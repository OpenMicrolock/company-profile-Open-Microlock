import Image from 'next/image'
import React from 'react'
import decoration3Img from '@/assets/images/elements/saas-decoration/03.png'
import decoration6Img from '@/assets/images/elements/saas-decoration/06.png'
import decoration7Img from '@/assets/images/elements/saas-decoration/07.png'
import aboutImg from '@/assets/images/about/11.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className="bg-secondary bg-opacity-50 position-relative pt-xl-8 overflow-hidden">
      <span>
        <svg className="position-absolute bottom-0 start-0 mb-n3 z-index-2" viewBox="0 0 1950 178">
          <path className="fill-body" d="M1480.3,21.8c238.7-17.4,359.6,39,469.7,74.4V178H0v-54.2V4.4c57.3,38.5,287.7,14.6,446.4,0 c170.6-15.7,342.3,14.5,440.8,33C1104,78,1274.8,36.9,1480.3,21.8z" />
        </svg>
      </span>
      <Container className=" position-relative pt-4 pt-sm-5 pb-4 pb-lg-8">
        <Row>
          <Col lg={5}  className="mb-6 mb-lg-0">
            <h1 className="h2 mb-lg-4">Powerful analytics to drive your business</h1>
            <p className="mb-lg-4">Gain insights, make informed decisions, and drive growth with our powerful analytics feature</p>
            <Button variant='primary-grad' className="mb-0">Start your free trial</Button>
          </Col>
          <Col lg={6} className="position-relative ms-auto">
            <div className="position-absolute top-0 start-50 translate-middle ms-6">
              <Image src={decoration3Img} className="shadow-primary-lg rounded-4" alt="feature image" />
            </div>
            <div className="position-absolute bottom-0 start-0 mb-n4">
              <Image src={decoration6Img} className="h-100px h-sm-200px shadow-primary-lg rounded-4" alt="feature image" />
            </div>
            <div className="ps-md-7">
              <Image src={aboutImg} className="rounded-4" alt="feature image" />
            </div>
          </Col>
        </Row>
        <Row className=" align-items-center g-4 mt-6 mt-lg-9">
          <Col md={4} lg={3} className="order-2">
            <Image src={decoration7Img} className="w-md-300px shadow-primary-lg rounded-4" alt="feature image" />
          </Col>
          <Col md={8} className="ms-auto order-1 order-md-2">
            <Row className=" g-4 align-items-center">
              <Col md={6}>
                <h6 className="mb-3">Unlock the power of data with advanced analytics</h6>
                <ul className="list-group list-group-borderless">
                  <li className="list-group-item d-flex pb-0"><IconifyIcon icon='bi:check-circle' className="text-success me-2" />In-Depth data analysis</li>
                  <li className="list-group-item d-flex pb-0"><IconifyIcon icon='bi:check-circle' className="text-success me-2" />Real-Time reporting</li>
                  <li className="list-group-item d-flex pb-0"><IconifyIcon icon='bi:check-circle' className="text-success me-2" />Customizable dashboards</li>
                </ul>
              </Col>
              <Col md={6} className="border-start border-2 border-pink ps-sm-5">
                <Row className="row-cols-2 g-4">
                  <Col>
                    <h3 className="mb-0">105<span className="text-primary">+</span></h3>
                    <p className="mb-0">New features added</p>
                  </Col>
                  <Col>
                    <h3 className="mb-0">&gt;10<span className="text-primary">K</span></h3>
                    <p className="mb-0">Download apk</p>
                  </Col>
                  <Col>
                    <h3 className="mb-0">15<span className="text-primary">D</span></h3>
                    <p className="mb-0">Free trial</p>
                  </Col>
                  <Col>
                    <h3 className="mb-0">98<span className="text-primary">%</span></h3>
                    <p className="mb-0">Client satisfaction</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero