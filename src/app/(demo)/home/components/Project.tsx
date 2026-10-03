import Image from 'next/image'
import React from 'react'
import portfolio1 from '@/assets/images/portfolio/01.jpg'
import portfolio2 from '@/assets/images/portfolio/02.jpg'
import portfolio3 from '@/assets/images/portfolio/03.jpg'
import portfolio4 from '@/assets/images/portfolio/04.jpg'
import gradShape from '@/assets/images/elements/grad-shape/03.png'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Project = () => {
  return (
    <section className="position-relative overflow-hidden">
      <Container className="card-grid">
        <div className="d-md-flex justify-content-between align-items-center text-center text-sm-start mb-4 mb-md-5">
          <h2 className="mb-3 mb-md-0">Our latest projects</h2>
          <Link href="/portfolio/list" className="btn btn-primary-grad mb-0">Explore portfolio</Link>
        </div>
        <Row className="g-4">
          <Col md={7}>
            <Card className="card-img-scale card-content-hover overflow-hidden rounded-4">
              <div className="card-img-scale-wrapper">
                <div className="hover-content bg-blur bg-white bg-opacity-10">
                  <div className="z-index-2 mt-auto">
                    <span className="text-white">Technology</span>
                    <h6 className="mb-0 mt-2"><Link href="/portfolio/study1" className="text-white stretched-link">Brand Identity Development</Link></h6>
                  </div>
                </div>
                <Link href="/portfolio/study1" className="stretched-link"><Image src={portfolio1} className="img-scale img-blur" alt="portfolio-img" /></Link>
              </div>
            </Card>
          </Col>
          <Col md={5}>
            <Card className="card-img-scale card-content-hover overflow-hidden rounded-4">
              <div className="card-img-scale-wrapper">
                <div className="hover-content bg-blur bg-white bg-opacity-10">
                  <div className="z-index-2 mt-auto">
                    <span className="text-white">Technology</span>
                    <h6 className="mb-0 mt-2"><Link href="/portfolio/study2" className="text-white stretched-link">E-commerce platform launch</Link></h6>
                  </div>
                </div>
                <Link href="/portfolio/study2" className="stretched-link"><Image src={portfolio2} className="img-scale img-blur img-fluid" alt="portfolio-img" /></Link>
              </div>
            </Card>
          </Col>
          <Col md={5}>
            <Card className="card-img-scale card-content-hover overflow-hidden rounded-4">
              <div className="card-img-scale-wrapper">
                <div className="hover-content bg-blur bg-white bg-opacity-10">
                  <div className="z-index-2 mt-auto">
                    <span className="text-white">Technology</span>
                    <h6 className="mb-0 mt-2"><Link href="/portfolio/study1" className="text-white stretched-link">Mobile app development</Link></h6>
                  </div>
                </div>
                <Link href="/portfolio/study1" className="stretched-link"><Image src={portfolio3} className="img-scale img-blur img-fluid" alt="portfolio-img" /></Link>
              </div>
            </Card>
          </Col>
          <Col md={7}>
            <Card className="card-img-scale card-content-hover overflow-hidden rounded-4">
              <div className="card-img-scale-wrapper">
                <div className="hover-content bg-blur bg-white bg-opacity-10">
                  <div className="z-index-2 mt-auto">
                    <span className="text-white">Technology</span>
                    <h6 className="mb-0 mt-2"><Link href="/portfolio/study2" className="text-white stretched-link">Digital marketing overhaul</Link></h6>
                  </div>
                </div>
                <Link href="/portfolio/study2" className="stretched-link"><Image src={portfolio4} className="img-scale img-blur img-fluid" alt="portfolio-img" /></Link>
              </div>
            </Card>
          </Col>
        </Row>
        <Row className="mt-6">
          <Col lg={10} xl={8} xxl={7} className="mx-auto">
            <div className="bg-body text-lg-end rounded-3 shadow-primary position-relative px-3 px-sm-6 py-3">
              <div className="position-absolute top-0 start-0 mt-n5 ms-n4 d-none d-sm-block">
                <Image src={gradShape} className="zoom-animate" alt="Shape" />
              </div>
              <p className="heading-color mb-0 ms-sm-6 ms-xl-0">Embark on your project journey! partner with us today
                <Link href="/contact-2" className="fw-semibold hover-underline-animation mb-0">Join today</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Project