'use client'
import Image from 'next/image'
import React from 'react'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar10 from '@/assets/images/avatar/10.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { testimonialsData } from '../data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap'

const Testimonials = () => {
  return (
    <section>
      <Container>
        <Row className="align-items-center">
          <Col lg={4} className="text-center text-lg-start">
            <h2 className="mb-3 mb-lg-4">What our community says</h2>
            <ul className="avatar-group align-items-center justify-content-center justify-content-lg-start mb-2">
              <li className="avatar avatar-sm">
                <Image className="avatar-img rounded-circle" src={avatar2} alt="avatar" />
              </li>
              <li className="avatar avatar-sm">
                <Image className="avatar-img rounded-circle" src={avatar5} alt="avatar" />
              </li>
              <li className="avatar avatar-sm">
                <Image className="avatar-img rounded-circle" src={avatar10} alt="avatar" />
              </li>
              <li className="avatar avatar-sm">
                <Image className="avatar-img rounded-circle" src={avatar9} alt="avatar" />
              </li>
              <li className="avatar avatar-sm">
                <Image className="avatar-img rounded-circle" src={avatar6} alt="avatar" />
              </li>
            </ul>
            <p>Rated <span className="badge bg-dark">4.9/5.0</span> by community members</p>
          </Col>
          <Col lg={8} xl={7} className="ms-auto">

            <Swiper
              modules={[Autoplay, Navigation]}
              loop={true}
              className='mt-2 mt-md-4'
              autoplay={{ delay: 4000 }}
              slidesPerView={1}
              spaceBetween={30}
              navigation={{
                nextEl: '.swiper-button-next-test',
                prevEl: '.swiper-button-prev-test'
              }}
            >

              {
                testimonialsData.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <Card className="bg-secondary bg-opacity-50 rounded-4 overflow-hidden">
                      <Row className="g-0">
                        <Col md={5}>
                          <Image src={item.image} className="rounded-start mb-3 mb-md-0" alt="..." />
                        </Col>
                        <Col md={7} xl={6}>
                          <CardBody className="d-flex flex-column h-100 p-xl-4">
                            <ul className="list-inline mb-2">
                              <>
                                {Array(Math.floor(item.rating)).fill(0).map((_star, idx) => <li key={idx} className="list-inline-item me-1"><IconifyIcon width={16} height={16} icon='bi-star-fill' className="text-primary" /></li>)}
                                {!Number.isInteger(item.rating) && <li className="list-inline-item me-1"> <IconifyIcon icon='bi-star-half' width={16} height={16} className="text-primary" /> </li>}
                                {item.rating < 5 && Array(5 - Math.ceil(item.rating)).fill(0).map((_star, idx) => <li key={idx} className="list-inline-item me-1"><IconifyIcon height={16} icon='bi-star-fill' width={16} className="text-primary" /></li>)}&nbsp;
                              </>
                            </ul>
                            <p className="heading-color">{item.description}</p>
                            <div className="mt-auto">
                              <p className="lead heading-color fw-semibold mb-0">{item.name}</p>
                              <small>{item.position}</small>
                            </div>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </SwiperSlide>
                ))
              }

              <div className="d-flex justify-content-between position-absolute top-50 start-50 translate-middle w-100 z-index-2">
                <Button variant='dark' size='lg' className="btn-icon rounded-circle mb-0 swiper-button-prev-test rtl-flip ms-2"><IconifyIcon icon='bi:arrow-left' /></Button>
                <Button variant='dark' size='lg' className="btn-icon rounded-circle mb-0 swiper-button-next-test rtl-flip me-2"><IconifyIcon icon='bi:arrow-right' /></Button>
              </div>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section >
  )
}

export default Testimonials