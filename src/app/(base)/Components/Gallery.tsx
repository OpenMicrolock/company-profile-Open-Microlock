'use client'
import React from 'react'
import screen1 from '@/assets/images/mobile-app/screen/s-01.jpg'
import screen2 from '@/assets/images/mobile-app/screen/s-02.jpg'
import screen3 from '@/assets/images/mobile-app/screen/s-03.jpg'
import screen4 from '@/assets/images/mobile-app/screen/s-04.jpg'
import screen5 from '@/assets/images/mobile-app/screen/s-05.jpg'
import screen6 from '@/assets/images/mobile-app/screen/s-06.jpg'
import screen7 from '@/assets/images/mobile-app/screen/s-07.jpg'
import screen8 from '@/assets/images/mobile-app/screen/s-08.jpg'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration.svg'
import googleImg from '@/assets/images/elements/google-play.svg'
import appImg from '@/assets/images/elements/app-store.svg'
import { Container } from 'react-bootstrap'
import Link from 'next/link'

const Gallery = () => {

  const screens = [
    screen1,
    screen2,
    screen3,
    screen4,
    screen5,
    screen6,
    screen7,
    screen8]

  return (
    <section className="position-relative z-index-2 py-0" data-bs-theme="dark">
      <Container fluid className="position-relative">
        <div className="max-width-1550 bg-dark position-relative rounded-4 overflow-hidden py-6 py-lg-8">
          <div className="position-absolute top-0 end-0 mt-n6">
            <Image src={decorationImg} className="rotate-270 blur-8 opacity-2" alt="Grad shape" />
          </div>
          <Container className="inner-container-small text-center mb-7">
            <h2 className="mb-4">See how the DARMI app works</h2>
            <p className="mb-4"> Browse the DARMI app screens to see how you monitor and control your locks and devices.</p>
            <div className="d-sm-flex justify-content-center">
              <Link href=""> <Image src={googleImg} className="btn-transition me-sm-4 mb-2 mb-sm-0" width={180} alt="play store" /> </Link>
              <Link href=""> <Image src={appImg} className="btn-transition" width={180} alt="app-store" /> </Link>
            </div>
          </Container>
          <Swiper
            modules={[Autoplay, Pagination]}
            className="swiper-outside-n5 pb-6 mx-3 mx-sm-0"
            loop={true}
            autoplay={{ delay: 2000 }}
            slidesPerView={2}
            spaceBetween={50}
            breakpoints={{
              576: { slidesPerView: 3 },
              992: { slidesPerView: 5 },
              1200: { slidesPerView: 7 },
            }}
            pagination={{
              el: '.swiper-pagination',
              clickable: true
            }}
          >
            {
              screens.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <Image src={item} className="rounded-4 border border-secondary border-3" alt="mobile screen" />
                </SwiperSlide>
              ))
            }
            <div className="swiper-pagination swiper-pagination-primary position-absolute bottom-0 mb-4" />
          </Swiper>
        </div>
      </Container>
    </section>
  )
}

export default Gallery