'use client'
import React from 'react'
import { companyData } from '../data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Company = () => {
  return (
    <section className="pt-9 overflow-hidden">
      <Container className="pt-6 pt-sm-8">
        <Row className="mb-md-5">
          <Col sm={8} md={7} lg={5}>
            <h2>A legacy of creativity and growth</h2>
          </Col>
          <Col sm={3} md={4} className="ms-auto">
            <div className="d-flex justify-content-end gap-2 position-relative">
              <Button variant='secondary' size='lg' className="btn-icon rounded-circle mb-0 swiper-button-prev"><IconifyIcon icon='bi:arrow-left' /></Button>
              <Button variant='secondary' size='lg' className="btn-icon rounded-circle mb-0 swiper-button-next"><IconifyIcon icon='bi:arrow-right' /></Button>
            </div>
          </Col>
        </Row>
          <Swiper
            modules={[Autoplay, Navigation]}
            loop={true}
            className="swiper-step swiper-outside-end-n20"
            autoplay={{ delay: 3000 }}
            slidesPerView={2}
            navigation= {{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            spaceBetween={0}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >

            {
              companyData.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="swiper-step-divider" />
                  <Card className="card-body bg-secondary bg-opacity-50 p-4 me-2 me-sm-5">
                    <h6 className="text-primary">{item.title}</h6>
                    <p className="mb-0">{item.description}</p>
                  </Card>
                </SwiperSlide>
              ))
            }
          </Swiper>
      </Container>
    </section>
  )
}

export default Company