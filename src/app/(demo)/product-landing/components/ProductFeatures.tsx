'use client'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { productFeaturesData } from '../data'
import Image from 'next/image'
import patternImg from '@/assets/images/elements/geo-grad-pattern.svg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const ProductFeatures = () => {
  return (
    <section className="bg-secondary-grad overflow-hidden position-relative pt-0">
      <div className="position-absolute bottom-0 start-0 ms-n8 mb-n6">
        <Image src={patternImg} height={500} className="opacity-2" alt="pattern" />
      </div>
      <Container>
        <Row className="mb-4 mb-md-5">
          <Col md={8} xl={6} >
            <h2>Unmatched features for everyday excellence</h2>
          </Col>
          <Col md={4} xl={6} >
            <div className="d-flex justify-content-md-end gap-3 position-relative mt-3">
              <Link href="" className="btn btn-lg btn-white btn-icon rounded-circle mb-0 swiper-button-prev-feature rtl-flip"><IconifyIcon icon='bi:arrow-left' /></Link>
              <Link href="" className="btn btn-lg btn-white btn-icon rounded-circle mb-0 swiper-button-next-feature rtl-flip"><IconifyIcon icon='bi:arrow-right' /></Link>
            </div>
          </Col>
        </Row>

        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          className="swiper swiper-outside-end-n20"
          autoplay={{ delay: 3000 }}
          slidesPerView={2}
          spaceBetween={50}
          navigation={{
            nextEl: '.swiper-button-next-feature',
            prevEl: '.swiper-button-prev-feature',
          }}
          breakpoints={{
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          <div className="swiper-wrapper">
            {
              productFeaturesData.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <Card className="card-img-scale rounded-4 overflow-hidden">
                    <Image src={item.image} className="img-scale" alt="portfolio-img" />
                    <div className="bg-overlay bg-dark opacity-4" />
                    <div className="card-img-overlay p-4 p-xxl-5">
                      <h5 className="text-white">Advanced fitness tracking</h5>
                      <p className="text-white text-opacity-75">Helping you stay on top of your health and fitness goals every step of the way</p>
                    </div>
                  </Card>
                </SwiperSlide>
              ))
            }
          </div>
        </Swiper>
      </Container>
    </section>
  )
}

export default ProductFeatures