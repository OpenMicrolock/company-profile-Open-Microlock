'use client'
import Image from 'next/image'
import React from 'react'
import bgImg from '@/assets/images/bg/02.jpg'
import codeImg from '@/assets/images/bg/code.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { clientData } from '../data'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, Col, Container, Row } from 'react-bootstrap'
import decoration2Img from '@/assets/images/elements/grad-shape/blur-decoration-2.svg'

const Client = () => {
  return (
    <section className="bg-secondary position-relative overflow-hidden">
      <span className="position-absolute top-0 start-0">
        <svg className="fill-body" width={1920} height={237} viewBox="0 0 1920 237" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1940.5 0H-9V164C708.2 295.2 1589.5 218.667 1940.5 164V0Z" />
        </svg>
      </span>
      <Container className="position-relative z-index-9">
        <div className="position-absolute top-0 start-50 translate-middle-x mt-n3">
          <Image src={decoration2Img} className="opacity-2 blur-8" alt="Grad shape" />
        </div>
        <div className="bg-body bg-opacity-10 bg-blur border border-white border-opacity-25 position-relative rounded-4 shadow-primary-lg p-4">
          <span className="text-purple">
            <svg className="mt-n4" width={40} height={10} viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5Z" fill="currentColor" />
              <path d="M25 5C25 7.76142 22.7614 10 20 10C17.2386 10 15 7.76142 15 5C15 2.23858 17.2386 0 20 0C22.7614 0 25 2.23858 25 5Z" fill="currentColor" />
              <path d="M40 5C40 7.76142 37.7614 10 35 10C32.2386 10 30 7.76142 30 5C30 2.23858 32.2386 0 35 0C37.7614 0 40 2.23858 40 5Z" fill="currentColor" />
            </svg>
          </span>
          <Row className="rounded-4 overflow-hidden g-0">
            <Col sm={5}>
              <Card className="card-body p-0 h-100">
                <Image src={bgImg} alt='bgImg' />
                <div className="card-img-overlay d-flex flex-column">
                  <ul className="list-inline d-flex gap-3 mb-1 mt-auto mx-auto">
                    <li className="list-inline-item me-0">
                      <button className="btn btn-lg btn-white btn-icon rounded-circle mb-0" type="button"><IconifyIcon icon='bi-mic' className="fa-sm" /></button>
                    </li>
                    <li className="list-inline-item me-0">
                      <button className="btn btn-lg btn-white btn-icon rounded-circle mb-0" type="button"><IconifyIcon icon='bi-camera-reels' className="fa-sm" /></button>
                    </li>
                    <li className="list-inline-item me-0">
                      <button className="btn btn-lg btn-danger btn-icon rounded-circle mb-0" type="button"><IconifyIcon icon='bi-telephone-x' className="fa-sm" />
                      </button>
                    </li>
                  </ul>
                </div>
              </Card>
            </Col>
            <Col sm={7}>
              <div className="h-100" style={{ background: `url(${codeImg.src}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'left top' }} />
            </Col>
          </Row>
        </div>
        <Swiper
        className='mt-6 swiper-initialized swiper-horizontal swiper-backface-hidden'
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 3000 }}
          slidesPerView={2}
          spaceBetween={30}
          breakpoints={{
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1200: { slidesPerView: 6 },
            1400: { slidesPerView: 8 },
          }}
        >
          {clientData.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="swap-logo">
                <Image src={item.logo} alt="client-img" width={100} height={50} />
                <div className="swap-item">
                  <Image src={item.logoLight} className="dark-mode-item" alt="client logo" width={100} height={50} />
                  <Image src={item.logoDark} className="light-mode-item" alt="client logo" width={100} height={50} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  )
}

export default Client