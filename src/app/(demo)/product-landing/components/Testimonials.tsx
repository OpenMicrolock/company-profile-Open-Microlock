import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { testimonialData } from '../data'
import Image from 'next/image'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Testimonials = () => {
  return (
    <section className="py-0">
      <Container className="position-relative">
        <Row>
          <Col md={10} className="mx-auto">
            <Swiper
              modules={[Autoplay, Navigation]}
              className="swiper mt-2 mt-md-4"
              loop={true}
              autoplay={{ delay: 4000 }}
              slidesPerView={1}
              spaceBetween={30}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              }}
            >
              {
                testimonialData.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <Row className=" align-items-center">
                      <Col lg={3} className="text-lg-center mb-3 mb-lg-0">
                        <div className="avatar avatar-xxl mx-auto flex-shrink-0 mb-3">
                          <Image className="avatar-img rounded-circle" src={item.avatar} alt="avatar" />
                        </div>
                        <h6 className="mb-1">{item.name}</h6>
                        <span>{item.role}</span>
                      </Col>
                      <blockquote className="col-lg-9">
                        <ul className="list-inline mb-2">
                          <li className="list-inline-item lead me-0"><IconifyIcon icon='bi:star-fill' className="text-warning" /></li>&nbsp;
                          <li className="list-inline-item lead me-0"><IconifyIcon icon='bi:star-fill' className="text-warning" /></li>&nbsp;
                          <li className="list-inline-item lead me-0"><IconifyIcon icon='bi:star-fill' className="text-warning" /></li>&nbsp;
                          <li className="list-inline-item lead me-0"><IconifyIcon icon='bi:star-fill' className="text-warning" /></li>&nbsp;
                          <li className="list-inline-item lead me-0"><IconifyIcon icon='bi:star-half' className="text-warning" /></li>
                        </ul>
                        <p className="fs-5 heading-color">{item.review}</p>
                      </blockquote>
                    </Row>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </Col>
        </Row>
        <div className="d-flex justify-content-between position-absolute top-50 start-0 w-100">
          <Link href="" className="btn btn-secondary btn-icon btn-lg rounded-circle mb-0 swiper-button-prev ms-2"><IconifyIcon width={23} height={23} icon='bi:arrow-left' className="text-primary-grad" /></Link>
          <Link href="" className="btn btn-secondary btn-icon btn-lg rounded-circle mb-0 swiper-button-next me-2"><IconifyIcon width={23} height={23} icon='bi:arrow-right' className="text-primary-grad" /></Link>
        </div>
      </Container>
    </section>
  )
}

export default Testimonials