'use client'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { testimonialsData } from '../data'
import Image from 'next/image'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Testimonials = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="bg-dark position-relative rounded-4 overflow-hidden p-4 p-sm-6" data-bs-theme="dark">
          <div className="d-flex justify-content-between mb-4 mb-md-5">
            <h2>Client testimonials</h2>
            <div className="d-flex justify-content-center justify-content-sm-end gap-3 position-relative mt-3">
              <Link href="" className="fs-5 text-body-secondary text-primary-hover mb-0 swiper-button-prev-testimonials"><IconifyIcon icon='bi:arrow-left' /></Link>
              <Link href="" className="fs-5 text-body-secondary text-primary-hover mb-0 swiper-button-next-testimonials"><IconifyIcon icon='bi:arrow-right' /></Link>
            </div>
          </div>
          <Swiper
            modules={[Autoplay, Navigation]}
            className="mt-2 mt-md-4"
            loop={true}
            autoplay={{ delay: 4000 }}
            navigation={{
              nextEl: '.swiper-button-next-testimonials',
              prevEl: '.swiper-button-prev-testimonials'
            }}
            spaceBetween={30}
          >
            {
              testimonialsData.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <Row className="align-items-center">
                    <Col lg={3}  className="text-lg-center mb-3 mb-lg-0">
                      <div className="avatar avatar-xxl mx-auto flex-shrink-0 mb-3">
                        <Image className="avatar-img rounded-circle" src={item.avatar} alt="avatar" />
                      </div>
                      <h6 className="mb-1 lead">{item.name}</h6>
                      <p className="mb-0 small">{item.role}</p>
                    </Col>
                    <blockquote className="col-lg-9">
                      <ul className="list-inline mb-2">
                        {Array(Math.floor(item.rating)).fill(0).map((_star, idx) => <li key={idx} className="list-inline-item me-1"><IconifyIcon width={20} height={20} icon='bi-star-fill' className="text-warning" /></li>)}
                        {!Number.isInteger(item.rating) && <li className="list-inline-item me-1"> <IconifyIcon icon='bi-star-half' width={20} height={20} className="text-warning" /> </li>}
                        {item.rating < 5 && Array(5 - Math.ceil(item.rating)).fill(0).map((_star, idx) => <li key={idx} className="list-inline-item me-1"><IconifyIcon height={20} icon='bi-star-fill' width={20} className="text-warning" /></li>)}&nbsp;
                      </ul>
                      <p className="fs-5 heading-color mb-0">{item.testimonial}</p>
                    </blockquote>
                  </Row>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </Container>
    </section>
  )
}

export default Testimonials