import Image from 'next/image'
import React from 'react'
import rocket from '@/assets/images/elements/rocket.png'
import thunder from '@/assets/images/elements/thunder.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Pricing = () => {
  return (
    <section className="bg-secondary position-relative overflow-hidden">
      <span>
        <svg className="position-absolute top-0 start-0 mt-lg-n6" viewBox="0 0 1950 237" xmlSpace="preserve">
          <path className="fill-body" d="M1949.5,0H0v164c717.2,131.2,1598.5,54.7,1949.5,0V0z" />
        </svg>
      </span>
      <Container className="position-relative z-index-9 pt-5 pt-xxl-8">
        <Row className="g-4 align-items-center">
          <Col lg={4}>
            <h2 className="mb-3 mb-lg-4">	Find the perfect plan for your business</h2>
            <p className="mb-4">Our flexible pricing plans are designed to scale with your business, offering the features you need to thrive.</p>
            <Link href="/pricing-1" className="btn btn-primary-grad icon-link icon-link-hover">Compare pricing <IconifyIcon icon='bi-arrow-right' /></Link>
          </Col>
          <Col lg={8} className="ms-auto ps-xl-6">
            <Row className="align-items-center g-0">
              <Col md={6} className="mb-5 mb-md-0">
                <Card className="bg-body text-center align-items-center p-4 pe-5 me-md-n3">
                  <CardHeader className="bg-transparent d-flex flex-column align-items-center p-0">
                    <div className="icon-xl bg-secondary d-flex justify-content-center align-items-center text-white rounded-circle mb-3">
                      <Image src={rocket} className="h-40px" alt="rocket" />
                    </div>
                    <h6 className="mb-3">Basic plan</h6>
                    <span className="text-primary-grad"> <span className="h1 fw-bold">$25</span> /month</span>
                  </CardHeader>
                  <CardBody className="w-100 p-0 mt-3">
                    <ul className="list-group list-group-borderless text-center mb-4">
                      <li className="list-group-item mb-0"><IconifyIcon icon='bi-check-lg' className="text-success me-1" />Customizable features</li>
                      <li className="list-group-item mb-0"><IconifyIcon icon='bi-check-lg' className="text-success me-1" />Basic support</li>
                      <li className="list-group-item mb-0"><IconifyIcon icon='bi-check-lg' className="text-success me-1" />Monthly updates</li>
                      <li className="list-group-item mb-0"><IconifyIcon icon='bi-check-lg' className="text-success me-1" />Up to 50 Users</li>
                    </ul>
                    <Link href="/contact-2" className="btn btn-dark w-100 mb-0">Get started</Link>
                  </CardBody>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="bg-primary text-center align-items-center p-4 pt-5">
                  <div className="text-bg-dark rounded position-absolute top-0 start-50 translate-middle px-3 py-1">Most popular</div>
                  <CardHeader className="bg-transparent d-flex flex-column align-items-center p-0">
                    <div className="icon-xl bg-body d-flex justify-content-center align-items-center text-white rounded-circle mb-3">
                      <Image src={thunder} className="h-40px" alt="thunder" />
                    </div>
                    <h6 className="mb-3 text-white">Standard plan</h6>
                    <span className="text-white"> <span className="h1 text-white fw-bold">$120</span> /month</span>
                  </CardHeader>
                  <CardBody className="w-100 p-0 mt-3">
                    <ul className="list-group list-group-borderless text-center opacity-8 mb-4">
                      <li className="list-group-item text-white mb-0"><IconifyIcon icon='bi-check-lg' className="me-1" />All basic plan features</li>
                      <li className="list-group-item text-white mb-0"><IconifyIcon icon='bi-check-lg' className="me-1" />Priority support</li>
                      <li className="list-group-item text-white mb-0"><IconifyIcon icon='bi-check-lg' className="me-1" />Access to advanced features</li>
                      <li className="list-group-item text-white mb-0"><IconifyIcon icon='bi-check-lg' className="me-1" />Up to 100 Users</li>
                      <li className="list-group-item text-white mb-0"><IconifyIcon icon='bi-check-lg' className="me-1" />Dedicated account manager</li>
                    </ul>
                    <Link href="/contact-2" className="btn btn-white w-100 mb-0">Get started</Link>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Pricing