'use client'
import React from 'react'
import { clientData } from '../data'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { Autoplay } from 'swiper/modules'
import { Container } from 'react-bootstrap'

const Client = () => {
  return (
    <section className="pt-0">
      <Container>
        <h6 className="text-center mb-5">Trusted by 10,000+ marketers at leading companies</h6>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 3000 }}
          slidesPerView={2}
          spaceBetween={50}
          breakpoints={{
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1200: { slidesPerView: 6 },
            1400: { slidesPerView: 7 },
          }}
        >
          {
            clientData.map((item, idx) => (
              <SwiperSlide className="swiper-slide" key={idx}>
                <div className="swap-logo">
                  <Image src={item.logo} alt="client-img" />
                  <div className="swap-item">
                    <Image src={item.logoLight} className="dark-mode-item" alt="client logo" />
                    <Image src={item.logoDark} className="light-mode-item" alt="client logo" />
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Container>
    </section>
  )
}

export default Client