import Image from 'next/image'
import React from 'react'
import portfolio2Img from '@/assets/images/portfolio/list/02.jpg'
import portfolio8Img from '@/assets/images/portfolio/3by4/08.jpg'
import portfolio3Img from '@/assets/images/portfolio/3by4/03.jpg'
import portfolio4Img from '@/assets/images/portfolio/3by4/04.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Projects = () => {
  return (
    <section>
      <Container>
        <Row className="align-items-center">
          <Col md={5} className="text-center text-md-start">
            <h2 className="mb-3 mb-md-0">A glimpse of my projects</h2>
          </Col>
          <Col md={5} className="ms-auto text-center text-md-end">
            <Link href="#" className="btn btn-primary mb-0">View all projects</Link>
          </Col>
        </Row>
        <Row className="justify-content-center mb-6">
          <Col md={6}  className="d-flex align-items-center mt-4">
            <Card className="card-img-scale card-content-hover rounded-0 bg-transparent overflow-hidden">
              <div className="card-img-scale-wrapper rounded-4">
                <Image src={portfolio2Img} className="img-scale rounded-4" alt="portfolio-img" />
                <div className="card-img-overlay hover-content d-flex flex-column align-items-center justify-content-center p-5">
                  <div className="icon-xl bg-dark text-white rounded-circle"><IconifyIcon icon='bi:arrow-up-right' className="" /></div>
                </div>
              </div>
              <CardBody className="d-flex justify-content-between px-0 pb-0">
                <div>
                  <h6 className="mb-0"><Link href="/portfolio/study2" className="heading-color stretched-link">Brand Identity Development</Link></h6>
                  <span>Logo design</span>
                </div>
                <small>@2022</small>
              </CardBody>
            </Card>
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <Row className="justify-content-center mt-4">
              <Col md={11} lg={9}>
                <Card className="card-img-scale card-content-hover rounded-0 bg-transparent overflow-hidden">
                  <div className="card-img-scale-wrapper rounded-4">
                    <Image src={portfolio8Img} className="img-scale rounded-4" alt="portfolio-img" />
                    <div className="card-img-overlay hover-content d-flex flex-column align-items-center justify-content-center p-5">
                      <div className="icon-xl bg-dark text-white rounded-circle"><IconifyIcon icon='bi:arrow-up-right' className="" /></div>
                    </div>
                  </div>
                  <CardBody className="d-flex justify-content-between px-0 pb-0">
                    <div>
                      <h6 className="mb-0"><Link href="/portfolio/study2" className="heading-color stretched-link">ShopSmart</Link></h6>
                      <span>E-commerce</span>
                    </div>
                    <small>@2023</small>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <Row className="justify-content-center mt-4">
              <Col md={11} lg={9}>
                <Card className="card-img-scale card-content-hover rounded-0 bg-transparent overflow-hidden">
                  <div className="card-img-scale-wrapper rounded-4">
                    <Image src={portfolio3Img} className="img-scale rounded-4" alt="portfolio-img" />
                    <div className="card-img-overlay hover-content d-flex flex-column align-items-center justify-content-center p-5">
                      <div className="icon-xl bg-dark text-white rounded-circle"><IconifyIcon icon='bi:arrow-up-right' className="" /></div>
                    </div>
                  </div>
                  <CardBody className="d-flex justify-content-between px-0 pb-0">
                    <div>
                      <h6 className="mb-0"><Link href="/portfolio/study2" className="heading-color stretched-link">TechWave</Link></h6>
                      <span>Animation</span>
                    </div>
                    <small>@2022</small>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={6}  className="d-flex align-items-center mt-4">
            <Card className="card-img-scale card-content-hover rounded-0 bg-transparent overflow-hidden">
              <div className="card-img-scale-wrapper rounded-4">
                <Image src={portfolio4Img} className="img-scale rounded-4" alt="portfolio-img" />
                <div className="card-img-overlay hover-content d-flex flex-column align-items-center justify-content-center p-5">
                  <div className="icon-xl bg-dark text-white rounded-circle"><IconifyIcon icon='bi:arrow-up-right' className="" /></div>
                </div>
              </div>
              <CardBody className="d-flex justify-content-between px-0 pb-0">
                <div>
                  <h6 className="mb-0"><Link href="/portfolio/study2" className="heading-color stretched-link">Digital marketing overhaul</Link></h6>
                  <span>Marketing</span>
                </div>
                <small>@2021</small>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <div className="d-inline-flex justify-content-center mx-auto w-100">
          <p className="bg-dark rounded-3 text-white text-center px-5 py-3 mb-0">✌️ Let's create a modern, engaging website for your business.
            <Link href="#" className="fw-semibold hover-underline-animation text-white">Hire me</Link>
          </p>
        </div>
      </Container>
    </section>
  )
}

export default Projects