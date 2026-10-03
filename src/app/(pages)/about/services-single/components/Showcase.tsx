'use client'
import Image from 'next/image'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import portfolio1 from '@/assets/images/portfolio/4by4/01.jpg'
import portfolio3 from '@/assets/images/portfolio/4by4/03.jpg'
import logoLight1 from '@/assets/images/client/logo-light/01.svg'
import logoDark1 from '@/assets/images/client/logo-dark/01.svg'
import logoLight5 from '@/assets/images/client/logo-light/05.svg'
import logoDark5 from '@/assets/images/client/logo-dark/05.svg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Button, Card, CardBody, CardTitle, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Showcase = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="g-4">
          <Col lg={4} className="text-center text-lg-start">
            <h2 className="mb-lg-4">Showcase of previous projects</h2>
            <p>Explore our diverse portfolio showcasing the range and quality of our web development projects.</p>
            <div className="d-flex justify-content-center justify-content-lg-start gap-3 position-relative mt-lg-4">
              <Button variant='secondary' size='lg' className="btn-icon rounded-circle mb-0 swiper-button-prev-team"><IconifyIcon icon='bi:arrow-left' /></Button>
              <Button variant='secondary' size='lg' className="btn-icon rounded-circle mb-0 swiper-button-next-team"><IconifyIcon icon='bi:arrow-right' /></Button>
            </div>
          </Col>
          <Col lg={8}  className="ps-xl-6">
              <Swiper
                modules={[Autoplay, Navigation]}
                loop={true}
                spaceBetween={30}
                navigation={{
                  nextEl: '.swiper-button-next-team',
                  prevEl: '.swiper-button-prev-team'
                }}
              >
                <SwiperSlide>
                  <Card className="bg-secondary bg-opacity-50 rounded-4 overflow-hidden mb-3">
                    <Row className="g-0">
                      <Col md={5}>
                        <Image src={portfolio1} className="img-fluid rounded-start h-100" alt="..." />
                      </Col>
                      <Col md={7}>
                        <CardBody className="d-flex flex-column align-items-start h-100 p-4">
                          <Image src={logoLight1} className="dark-mode-item h-30px mb-3" alt="client logo" />
                          <Image src={logoDark1} className="light-mode-item h-30px mb-3" alt="client logo" />
                          <CardTitle as={'h6'} >Corporate website for consulting</CardTitle>
                          <p className="card-text">Consulting wanted a professional online presence to attract high-profile clients.</p>
                          <div className="d-sm-flex justify-content-between align-items-center mt-auto w-100">
                            <div className="mb-3 mb-sm-0">
                              <h4 className="text-primary-grad mb-0">40%</h4>
                              <small>Increase in web traffic.</small>
                            </div>
                            <Button variant='dark' size='sm'  className="stretched-link mb-0">View  detail</Button>
                          </div>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card className="bg-secondary bg-opacity-50 rounded-4 overflow-hidden mb-3">
                    <Row className="g-0">
                      <Col md={5}>
                        <Image src={portfolio3} className="img-fluid rounded-start h-100" alt="..." />
                      </Col>
                      <Col md={7}>
                        <CardBody className="d-flex flex-column align-items-start h-100 p-4">
                          <Image src={logoLight5} className="dark-mode-item h-30px w-auto mb-3" alt="client logo" />
                          <Image src={logoDark5} className="light-mode-item h-30px w-auto mb-3" alt="client logo" />
                          <CardTitle as={'h6'}>AI-Driven customer insights platform</CardTitle>
                          <p className="card-text">Consulting wanted a professional online presence to attract high-profile clients.</p>
                          <div className="d-sm-flex justify-content-between align-items-center mt-auto w-100">
                            <div className="mb-3 mb-sm-0">
                              <h4 className="text-primary-grad mb-0">60%</h4>
                              <small>Increase in web traffic.</small>
                            </div>
                            <Button variant='dark' size='sm' className="stretched-link mb-0">View  detail</Button>
                          </div>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </SwiperSlide>
              </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Showcase