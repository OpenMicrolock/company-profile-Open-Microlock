'use client'
import React from 'react'
import step1 from '@/assets/images/mobile-app/step-1.jpg'
import step2 from '@/assets/images/mobile-app/step-2.jpg'
import step3 from '@/assets/images/mobile-app/step-3.jpg'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { stepsData } from '../data'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Steps = () => {

  const steps1 = [step1, step2, step3]

  return (
    <section>
      <Container>
        <Row className="g-4 align-items-lg-center">
          <Col md={6} xl={5} className="order-2 order-md-1">
            <Swiper
              modules={[Autoplay, Navigation]}
              loop={true}
              slidesPerView={1}
              spaceBetween={30}
              navigation={{
                nextEl: '.swiper-button-next-steps',
                prevEl: '.swiper-button-prev-steps'
              }}
            >
              {
                steps1.map((img, idx) => (
                  <SwiperSlide className="bg-body" key={idx}>
                    <div className="bg-secondary-grad rounded-4 overflow-hidden p-5 h-100">
                      <Image src={img} className="mb-n8 rounded-5 shadow-primary" alt="step image" />
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </Col>
          <Col md={6} className="order-1 ms-auto">
            <Swiper
              modules={[Autoplay, Navigation]}
              loop={true}
              slidesPerView={1}
              spaceBetween={30}
              navigation={{
                nextEl: '.swiper-button-next-steps',
                prevEl: '.swiper-button-prev-steps'
              }}
            >
              {
                stepsData.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <span className="fw-semibold text-primary">{item.phase}</span>
                    <h2 className="my-3">{item.title}</h2>
                    <p className="mb-0">{item.description}</p>
                  </SwiperSlide>
                ))
              }
            </Swiper>
            <div className="d-flex gap-3 position-relative mt-3">
              <Button variant='secondary' size='lg' className="btn-icon rounded-circle mb-0 swiper-button-prev-steps rtl-flip"><IconifyIcon icon='bi:arrow-left' /></Button>
              <Button variant='secondary' size='lg' className="btn-icon rounded-circle mb-0 swiper-button-next-steps rtl-flip"><IconifyIcon icon='bi:arrow-right' /></Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Steps