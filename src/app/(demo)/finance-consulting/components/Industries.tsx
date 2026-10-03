'use client'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { industriesData } from '../data'
import Image from 'next/image'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Industries = () => {
  return (
    <section className="bg-secondary bg-opacity-50 overflow-hidden">
      <Container>
        <Row className="g-4">
          <Col lg={4}>
            <div className="h-100 d-flex flex-column">
              <h2 className="mb-3">Industries we serve</h2>
              <p className="lead mb-3">Providing expert financial services across diverse industries</p>
              <div><Link href="/contact-2" className="btn btn-primary mb-4 mb-lg-0">Contact us now</Link></div>
              <div className="d-flex gap-3 position-relative mt-auto">
                <Link href='' className="btn btn-lg btn-white-shadow btn-icon rounded-circle mb-0 swiper-button-prev-industry"><IconifyIcon icon='bi-arrow-left' className="rtl-flip" /></Link>
                <Link href='' className="btn btn-lg btn-white-shadow btn-icon rounded-circle mb-0 swiper-button-next-industry"><IconifyIcon icon='bi-arrow-right' className="rtl-flip" /></Link>
              </div>
            </div>
          </Col>
          <Col lg={8}>
              <Swiper
                modules={[Autoplay, Navigation]}
                className='swiper-outside-end-n20 swiper-initialized swiper-horizontal swiper-backface-hidden'
                loop={true}
                autoplay={{ delay: 3000 }}
                navigation={{
                  nextEl: '.swiper-button-next-industry',
                  prevEl: '.swiper-button-prev-industry',
                }}
                slidesPerView={2}
                spaceBetween={30}
                breakpoints={{
                  576: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                }}
              >

                {
                  industriesData.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      <Card className="p-3 pb-0">
                        <Image src={item.image} className="card-img" alt="service image" />
                        <CardBody className="px-2">
                          <h6 className="mb-2">{item.title}</h6>
                          <p className="mb-3">{item.description}</p>
                          <Link href="" className="link-primary-grad icon-link icon-link-hover stretched-link mb-0">Read more <IconifyIcon icon='bi-arrow-right' /></Link>
                        </CardBody>
                      </Card>
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

export default Industries