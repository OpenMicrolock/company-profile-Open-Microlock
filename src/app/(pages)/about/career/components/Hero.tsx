'use client'
import Image from 'next/image'
import React from 'react'
import patternImg from '@/assets/images/elements/bg-pattern.svg'
import avatar10 from '@/assets/images/avatar/10.jpg'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'
import avatar1 from '@/assets/images/avatar/01.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { sellingData } from '../data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'


const Selling = () => {
  return (
    <Container className="mt-6 mt-lg-9">
      <Row className="align-items-center mb-3">
        <Col sm={5}>
          <h5 className="text-center text-sm-start mb-0">Our unique selling points</h5>
        </Col>
        <Col sm={4} lg={5} className="ms-auto">
          <div className="d-flex justify-content-center justify-content-sm-end gap-3 position-relative mt-3">
            <Link href="" className="fs-5 text-body-secondary text-primary-hover mb-0 swiper-button-prev-points rtl-flip"><IconifyIcon icon='bi:arrow-left' /></Link>
            <Link href="" className="fs-5 text-body-secondary text-primary-hover mb-0 swiper-button-next-points rtl-flip"><IconifyIcon icon='bi:arrow-right' /></Link>
          </div>
        </Col>
      </Row>

      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        className="px-2"
        navigation={{
          nextEl: '.swiper-button-next-points',
          prevEl: '.swiper-button-prev-points'
        }}
        autoplay={{ delay: 3000 }}
        slidesPerView={2}
        spaceBetween={30}
        breakpoints={{
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
          1400: { slidesPerView: 5 },
        }}
      >

        {sellingData.map((item, idx) => (
          <SwiperSlide className="swiper-slide py-3" key={idx}>
            <Card className="card-body card-hover-transition shadow-primary p-4">
              <h3 className={`${item.icon_color} mb-4`}><IconifyIcon icon={item.icon} /></h3>
              <p className="lead heading-color fw-bold mb-2">{item.title}</p>
              <Link href="" className="link-primary-grad stretched-link icon-link icon-link-hover">Read more <IconifyIcon icon='bi:arrow-right' /></Link>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}


const Hero = () => {
  return (
    <section className="position-relative overflow-hidden pt-lg-7 pb-0">
      <div className="bg-secondary-grad position-relative py-6 py-lg-8 mt-sm-2">
        <div className="position-absolute top-0 start-0">
          <Image src={patternImg} style={{ opacity: '0.05' }} alt="bg pattern" />
        </div>
        <Container className="position-relative">
          <div className="avatar avatar-xl flex-shrink-0 position-absolute top-0 start-0 mt-6 ms-n3 d-none d-lg-block">
            <Image className="avatar-img rounded-circle position-relative" src={avatar10} alt="avatar" />
          </div>
          <div className="avatar flex-shrink-0 position-absolute top-0 start-50 translate-middle-x ms-n9 mt-n6 d-none d-lg-block">
            <Image className="avatar-img rounded-circle position-relative" src={avatar2} alt="avatar" />
          </div>
          <div className="avatar avatar-lg flex-shrink-0 position-absolute top-0 end-0 me-7 mt-n4 d-none d-lg-block">
            <Image className="avatar-img rounded-circle position-relative" src={avatar6} alt="avatar" />
          </div>
          <div className="avatar avatar-xxl flex-shrink-0 position-absolute bottom-50 end-0 mb-n9 me-n3 d-none d-lg-block">
            <Image className="avatar-img rounded-circle position-relative" src={avatar9} alt="avatar" />
          </div>
          <div className="avatar flex-shrink-0 position-absolute bottom-0 start-0 ms-8 mb-n3 d-none d-lg-block">
            <Image className="avatar-img rounded-circle position-relative" src={avatar1} alt="avatar" />
          </div>
          <div className="inner-container text-center position-relative z-index-2 mx-auto">
            <h1 className="fw-semibold mb-4 lh-base">Discover Inspiring Career Opportunities at <span className="text-primary">Folio</span></h1>
            <p className="mb-5">Unlock your potential with our exciting career opportunities. At Folio, you'll find a supportive and dynamic environment where you can develop your skills and achieve your career goals.</p>
            <div className="bg-body d-inline-block border border-primary border-opacity-10 rounded-3 position-relative p-2">
              <form className="d-sm-flex align-items-center gap-3">
                <div className="position-relative mb-1 mb-sm-0">
                  <input className="form-control border-0 me-1 ps-5 w-sm-200px w-md-300px" type="text" placeholder="Job title" />
                  <span className="position-absolute top-50 start-0 translate-middle ps-5"><IconifyIcon icon='bi:briefcase' /></span>
                </div>
                <div className="vr opacity-1 my-2 d-none d-sm-block" />
                <div className="position-relative mb-1 mb-sm-0">
                  <select className="form-select border-0 w-sm-200px w-md-300px ps-5" data-search-enabled="true">
                    <option>Location</option>
                    <option>Canada</option>
                    <option>USA</option>
                    <option>Paris</option>
                    <option>India</option>
                    <option>London</option>
                  </select>
                  <span className="position-absolute top-50 start-0 translate-middle ps-5"><IconifyIcon icon='bi:geo-alt' /></span>
                </div>
                <Button variant='dark' size='lg' className="btn-icon mb-0"><IconifyIcon icon='bi:search' className="fs-6" /></Button>
              </form>
            </div>
          </div>
        </Container>
        <Selling />
      </div>
      <div className="bg-body h-400px blur-7 position-absolute bottom-0 start-50 translate-middle-x mb-n8" style={{ width: 3000 }} />
    </section>
  )
}

export default Hero