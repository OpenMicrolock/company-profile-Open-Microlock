import Image from 'next/image'
import React from 'react'
import portfolio9 from '@/assets/images/portfolio/3by4/09.jpg'
import portfolio6 from '@/assets/images/portfolio/3by4/06.jpg'
import portfolio3 from '@/assets/images/portfolio/03.jpg'
import portfolio8 from '@/assets/images/portfolio/3by4/08.jpg'
import portfolio3Img from '@/assets/images/portfolio/4by4/03.jpg'
import portfolio4Img from '@/assets/images/portfolio/04.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Portfolio = () => {
  return (

    <section className="bg-secondary pt-0">
      <Container>
        <Row className="justify-content-center mb-6">
          <Col md={5}>
            <Card className="card-img-scale card-content-hover rounded-0 bg-transparent overflow-hidden">
              <div className="card-img-scale-wrapper rounded-0">
                <Image src={portfolio9} className="img-scale" alt="portfolio-img" />
                <div className="card-img-overlay hover-content d-flex flex-column align-items-center justify-content-center p-5">
                  <div className="icon-xl bg-dark text-white rounded-circle"><IconifyIcon icon='bi:arrow-up-right' /></div>
                </div>
              </div>
              <CardBody className="d-flex justify-content-between px-0 pb-0">
                <div>
                  <h6 className="mb-0"><Link href="/portfolio/study1" className="heading-color stretched-link">Mobile app development</Link></h6>
                  <span>UI/UX design</span>
                </div>
                <small>@2024</small>
              </CardBody>
            </Card>
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <Row className="justify-content-center mt-5 mt-md-0">
              <Col md={8}>
                <Card  className="card-img-scale card-content-hover rounded-0 bg-transparent overflow-hidden">
                  <div className="card-img-scale-wrapper rounded-0">
                    <Image src={portfolio6} className="img-scale" alt="portfolio-img" />
                    <div className="card-img-overlay hover-content d-flex flex-column align-items-center justify-content-center p-5">
                      <div className="icon-xl bg-dark text-white rounded-circle"><IconifyIcon icon='bi:arrow-up-right' /></div>
                    </div>
                  </div>
                  <CardBody className="d-flex justify-content-between px-0 pb-0">
                    <div>
                      <h6 className="mb-0"><Link href="/portfolio/study2" className="heading-color stretched-link">Media mastery</Link></h6>
                      <span>SEO</span>
                    </div>
                    <small>@2023</small>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <Row className="justify-content-center mt-5 mt-md-6">
              <Col md={11} lg={9}>
                <Card  className="card-img-scale card-content-hover rounded-0 bg-transparent overflow-hidden">
                  <div className="card-img-scale-wrapper rounded-0">
                    <Image src={portfolio3} className="img-scale" alt="portfolio-img" />
                    <div className="card-img-overlay hover-content d-flex flex-column align-items-center justify-content-center p-5">
                      <div className="icon-xl bg-dark text-white rounded-circle"><IconifyIcon icon='bi:arrow-up-right' /></div>
                    </div>
                  </div>
                  <CardBody className="d-flex justify-content-between px-0 pb-0">
                    <div>
                      <h6 className="mb-0"><Link href="/portfolio/study1" className="heading-color stretched-link">Brand Identity Development</Link></h6>
                      <span>Logo design</span>
                    </div>
                    <small>@2022</small>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <Row className="justify-content-center mt-5 mt-md-6">
              <Col md={11} lg={9}>
                <Card  className="card-img-scale card-content-hover rounded-0 bg-transparent overflow-hidden">
                  <div className="card-img-scale-wrapper rounded-0">
                    <Image src={portfolio8} className="img-scale" alt="portfolio-img" />
                    <div className="card-img-overlay hover-content d-flex flex-column align-items-center justify-content-center p-5">
                      <div className="icon-xl bg-dark text-white rounded-circle"><IconifyIcon icon='bi:arrow-up-right' /></div>
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
            <Row className="justify-content-center mt-5 mt-md-6">
              <Col md={11} lg={9}>
                <Card  className="card-img-scale card-content-hover rounded-0 bg-transparent overflow-hidden">
                  <div className="card-img-scale-wrapper rounded-0">
                    <Image src={portfolio3Img} className="img-scale" alt="portfolio-img" />
                    <div className="card-img-overlay hover-content d-flex flex-column align-items-center justify-content-center p-5">
                      <div className="icon-xl bg-dark text-white rounded-circle"><IconifyIcon icon='bi:arrow-up-right' /></div>
                    </div>
                  </div>
                  <CardBody className="d-flex justify-content-between px-0 pb-0">
                    <div>
                      <h6 className="mb-0"><Link href="/portfolio/study1" className="heading-color stretched-link">TechWave</Link></h6>
                      <span>Animation</span>
                    </div>
                    <small>@2022</small>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <Row className="justify-content-center mt-5 mt-md-6">
              <Col md={11} lg={9}>
                <Card  className="card-img-scale card-content-hover rounded-0 bg-transparent overflow-hidden">
                  <div className="card-img-scale-wrapper rounded-0">
                    <Image src={portfolio4Img} className="img-scale" alt="portfolio-img" />
                    <div className="card-img-overlay hover-content d-flex flex-column align-items-center justify-content-center p-5">
                      <div className="icon-xl bg-dark text-white rounded-circle"><IconifyIcon icon='bi:arrow-up-right' /></div>
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
          </Col>
        </Row>
        <div className="d-grid justify-content-center">
          <Button variant='outline-primary' role="button" className="btn-loader mb-0" data-bs-toggle="button" aria-pressed="true">
            <span className="load-text">Load more work</span>
            <div className="load-icon">
              <div className="spinner-grow spinner-grow-sm bg-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default Portfolio