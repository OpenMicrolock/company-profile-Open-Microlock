'use client'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { blogData } from '../data'
import Image from 'next/image'
import relexSlayImg from '@/assets/images/elements/relex-slay.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { CardBody, CardTitle, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Blogs = () => {
  return (
    <section className="position-relative overflow-hidden pt-0">
      <div className="position-absolute bottom-0 end-0 mb-n2 me-n6 d-none d-xxl-block">
        <Image src={relexSlayImg} height={300} className="rtl-flip" alt="image" />
      </div>
      <Container>
        <Row className="g-4">
          <Col lg={4}>
            <h2 className="mb-3">Insights from our blog</h2>
            <p className="mb-5"><IconifyIcon icon='bi:instagram' className=" text-primary-grad me-2" />Follow us on <b>Instagram</b> to see life at <Link href="#" className="hover-underline-animation">@folio</Link></p>
            <div className="d-flex gap-2">
              <Link href='' className="btn btn-secondary btn-icon btn-lg rounded-circle mb-0 swiper-button-prev rtl-flip"><IconifyIcon width={23} height={23} icon='bi:arrow-left' /></Link>
              <Link href='' className="btn btn-secondary btn-icon btn-lg rounded-circle mb-0 swiper-button-next rtl-flip"><IconifyIcon width={23} height={23} icon='bi:arrow-right' /></Link>
            </div>
          </Col>
          <Col lg={8}>
            <Swiper
              modules={[Autoplay, Navigation]}
              loop={true}
              autoplay={{ delay: 3000 }}
              slidesPerView={2}
              spaceBetween={50}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              }}
              breakpoints={{
                576: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 2 },
              }}
            >
              {
                blogData.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <article className="card bg-transparent">
                      <div className="badge text-bg-dark position-absolute top-0 start-0 m-4">{item.type}</div>
                      <Image src={item.image} className="card-img rounded-4" alt="blog-image" />
                      <CardBody className="px-0 pb-0">
                        <CardTitle as='h6' className="card-title mb-3">{item.title}</CardTitle>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="mb-0">By {item.author}</p>
                          <Link className="link-primary-grad icon-link icon-link-hover stretched-link me-1" href="/blog/blog-single">Read more<IconifyIcon icon='bi:arrow-right' /> </Link>
                        </div>
                      </CardBody>
                    </article>
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

export default Blogs