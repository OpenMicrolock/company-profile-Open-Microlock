'use client'
import React from 'react'
import { testimonialsData } from '../data'
import Image from 'next/image'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Button, Card, CardBody, CardFooter, Col, Container, Row } from 'react-bootstrap'

const Testimonials = () => {
  return (
    <section className="bg-body position-relative py-0">
      <Container className="position-relative z-index-9">
        <Row className="align-items-center mb-4 mb-md-5">
          <Col md={7} xl={5}>
            <h2 className="mb-0">Hear from our happy customers</h2>
          </Col>
          <Col md={5} className="ms-sm-auto text-sm-end mt-5 mt-sm-0">
            <div className="d-flex gap-2 justify-content-sm-end">
              <Button variant='primary-grad' size='lg' className="btn-icon rounded-circle mb-0 swiper-button-prev"><IconifyIcon icon='bi:arrow-left' className="fa-sm" /></Button>
              <Button variant='primary-grad' size='lg' className="btn-icon rounded-circle mb-0 swiper-button-next"><IconifyIcon icon='bi:arrow-right' className="fa-sm" /></Button>
            </div>
          </Col>
        </Row>
          <Swiper
            modules={[Autoplay, Navigation]}
            loop={true}
            autoplay={{ delay: 3000 }}
            slidesPerView={2}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            spaceBetween={30}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >

            {
              testimonialsData.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <Card className="bg-secondary bg-opacity-50 bg-blur rounded-4 p-4 h-100">
                    <CardBody className="p-0 mb-4">
                      <ul className="list-inline mb-3">
                        {Array(Math.floor(item.rating)).fill(0).map((_star, idx) => <li key={idx} className="list-inline-item me-1"><IconifyIcon width={16} height={16} icon='bi-star-fill' className="text-warning" /></li>)}
                        {!Number.isInteger(item.rating) && <li className="list-inline-item me-1"> <IconifyIcon icon='bi-star-half' width={16} height={16} className="text-warning" /> </li>}
                        {item.rating < 5 && Array(5 - Math.ceil(item.rating)).fill(0).map((_star, idx) => <li key={idx} className="list-inline-item me-1"><IconifyIcon height={16} icon='bi-star-fill' width={16} className="text-warning" /></li>)}&nbsp;
                      </ul>
                      <blockquote>
                        <p className="heading-color mb-0">{item.description}</p>
                      </blockquote>
                    </CardBody>
                    <CardFooter className="bg-transparent p-0">
                      <div className="d-flex align-items-center">
                        <div className="avatar flex-shrink-0">
                          <Image className="avatar-img rounded-circle" src={item.avatar} alt="avatar" />
                        </div>
                        <div className="ms-3">
                          <p className="lead heading-color fw-semibold mb-0">{item.name}</p>
                          <small>{item.role}</small>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </SwiperSlide>
              ))
            }
          </Swiper>
      </Container>
    </section>
  )
}

export default Testimonials