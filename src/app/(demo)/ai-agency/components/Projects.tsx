'use client'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { projectData } from '../data'
import Image from 'next/image'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Projects = () => {
  return (
    <section className="overflow-hidden">
      <Container className="mb-5">
        <Row>
          <Col sm={8} lg={5}>
            <h2 className="text-center text-sm-start mb-0">Success stories and projects</h2>
          </Col>
          <Col sm={4} lg={5} className=" ms-auto">
            <div className="d-flex justify-content-center justify-content-sm-end gap-3 position-relative mt-3">
              <Button variant='secondary' className="btn-lg btn-icon rounded-circle mb-0 swiper-button-prev-project rtl-flip"><IconifyIcon icon="bi:arrow-left" /></Button>
              <Button variant='secondary' className="btn-lg btn-icon rounded-circle mb-0 swiper-button-next-project rtl-flip"><IconifyIcon icon="bi:arrow-right" /></Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        autoplay={false}
        className="swiper-outside-n5 px-4 px-sm-5"
        slidesPerView={2}
        navigation={{
          nextEl: '.swiper-button-next-project',
          prevEl: '.swiper-button-prev-project',
        }}
        spaceBetween={50}
        breakpoints={{
          576: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        {
          projectData.map((item, idx) => (
            <SwiperSlide key={idx}>
              <Card className="card-img-scale card-content-hover card-metro-hover rounded-4">
                <Image src={item.image} className="img-scale" alt="portfolio-img" />
                <div className="card-img-overlay hover-content d-flex flex-column align-items-start p-5">
                  <Image src={item.clientLogo} className="h-30px" alt="client logo" />
                  <div className="card-text mt-auto">
                    <h6 className="mb-0"><Link href="/portfolio/study1" className="text-white stretched-link">{item.title}</Link></h6>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className="inner-container-small bg-primary-grad rounded-3 text-center py-3 mt-6 mx-3 mx-md-auto">
        <p className="text-white mb-0 px-2 px-sm-5 px-md-0">🔥 Kickstart your project! collaborate with us for success!
          <Link href="/contact-1" className="fw-semibold hover-underline-animation text-white">Start today</Link>
        </p>
      </div>
    </section>
  )
}

export default Projects