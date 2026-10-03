'use client'
import Image from 'next/image'
import React from 'react'
import gradShape from '@/assets/images/elements/grad-shape/10.png'
import { client2data } from '../data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, CardBody, CardFooter, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Testimonials = () => {
  return (
    <section className="bg-body position-relative pt-0 pb-5 pb-sm-0">
      <div className="position-absolute top-100 start-0 translate-middle z-index-2 ms-5 ms-xl-9 mt-5 d-none d-sm-block">
        <Image src={gradShape} className="h-500px h-xl-700px rtl-flip" alt='gradShape' />
      </div>
      <Container className="position-relative z-index-9">
        <Row className="align-items-center mb-4 mb-md-5">
          <Col md={7} lg={5}>
            <h2 className="mb-0">What our clients say</h2>
          </Col>
          <Col mf={5} className="ms-sm-auto text-sm-end mt-5 mt-sm-0">
            <div className="d-flex gap-2 justify-content-sm-end">
              <Link href='' className="btn btn-primary-grad btn-icon btn-lg rounded-circle mb-0 swiper-button-prev"><IconifyIcon width={23} height={23} icon='bi-arrow-left' className="" /></Link>
              <Link href='' className="btn btn-primary-grad btn-icon btn-lg rounded-circle mb-0 swiper-button-next"><IconifyIcon width={23} height={23} icon='bi-arrow-right' className="" /></Link>
            </div>
          </Col>
        </Row>
        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          autoplay={{ delay: 3000 }}
          slidesPerView={2}
          spaceBetween={30}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {
            client2data.map((item, idx) => (
              <SwiperSlide key={idx}>
                <Card className="bg-secondary bg-opacity-50 bg-blur rounded-4 p-4 h-100">
                  <CardBody className="p-0 mb-4">
                    <ul className="list-inline mb-3">
                      <>
                        {Array(Math.floor(item.rating)).fill(0).map((_star, idx) => <li key={idx} className="list-inline-item me-1 small"><IconifyIcon width={14} height={14} icon='bi-star-fill' className="text-warning" /></li>)}
                        {!Number.isInteger(item.rating) && <li className="list-inline-item me-1 small"> <IconifyIcon icon='bi-star-half' width={14} height={14} className="text-warning" /> </li>}
                        {item.rating < 5 && Array(5 - Math.ceil(item.rating)).fill(0).map((_star, idx) => <li key={idx} className="list-inline-item me-1 small"><IconifyIcon height={14} icon='bi-star-fill'  width={14} className="text-warning" /></li>)}
                      </>
                    </ul>
                    <blockquote>
                      <p className="heading-color mb-0">{item.testimonial}</p>
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