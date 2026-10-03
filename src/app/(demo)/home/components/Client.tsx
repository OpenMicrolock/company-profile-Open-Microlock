'use client'

import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Image from 'next/image'
import { clientData } from '../data'
import { Col, Container, Row } from 'react-bootstrap'

const Client = () => {
  return (
    <section className="bg-secondary pt-0">
      <Container >
        <Row className="g-4 align-items-center">
          <Col lg={3}>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
              <h6 className="mb-0">Collaborating with industry leaders</h6>
              <div className="vr bg-primary-grad opacity-2 d-none d-lg-block" />
            </div>
          </Col>
          <Col lg={9}>
            <Swiper
              modules={[Autoplay]}
              loop={true}
              autoplay={{ delay: 3000 }}
              slidesPerView={2}
              spaceBetween={30}
              breakpoints={{
                576: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1200: { slidesPerView: 5 },
              }}
            >
              {
                clientData.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="swap-logo">
                      <Image src={item.logo} className="p-2 p-lg-3" alt="client-img" />
                      <div className="swap-item">
                        <Image src={item.logoLight} className="dark-mode-item p-2 p-lg-3" alt="client logo" />
                        <Image src={item.logoDark} className="light-mode-item p-2 p-lg-3" alt="client logo" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Client
