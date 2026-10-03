'use client'
import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { relatedData } from '../data'
import Image from 'next/image'
import { Card, CardBody, Container } from 'react-bootstrap'
import Link from 'next/link'

const Related = () => {
  return (
    <section>
      <Container>
        <h3 className="mb-4">Related works</h3>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{
            el: '.swiper-pagination'
          }}
          spaceBetween={40}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {
            relatedData.map((item, idx) => (
              <SwiperSlide key={idx}>
                <Card className="card-img-scale bg-transparent overflow-hidden">
                  <div className="card-img-scale-wrapper rounded-3">
                    <Image src={item.image} className="img-scale" alt="portfolio-img" />
                  </div>
                  <CardBody className="px-0 pb-0">
                    <h6 className="mb-0"><Link href="" className="heading-color stretched-link">{item.title}</Link></h6>
                    <small>{item.category}</small>
                  </CardBody>
                </Card>
              </SwiperSlide>
            ))
          }
          <div className="swiper-pagination swiper-pagination-primary position-relative mt-4" />
        </Swiper>
      </Container>
    </section>
  )
}

export default Related