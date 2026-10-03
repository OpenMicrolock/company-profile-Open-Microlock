'use client'
import Image from 'next/image'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import blogImg from '@/assets/images/blog/01.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import blog2Img from '@/assets/images/blog/02.jpg'
import { Button, CardBody, CardFooter, CardTitle, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const BlogSlider = () => {
  return (
    <section className="bg-secondary overflow-hidden pt-9">
      <Container className="pt-5 pt-xl-8">
        <Row>
          <Col sm={8} lg={5}>
            <h3 className="mb-0 text-center text-sm-start">Last week top highlights</h3>
          </Col>
          <Col sm={4} lg={5} className=" ms-auto">
            <div className="d-flex justify-content-center justify-content-sm-end gap-3 position-relative mt-3">
              <Button variant='outline-primary' size='lg' className="btn-icon rounded-circle mb-0 swiper-button-prev-blog rtl-flip"><IconifyIcon icon='bi:arrow-left' /></Button>
              <Button variant='outline-primary' size='lg' className="btn-icon rounded-circle mb-0 swiper-button-next-blog rtl-flip"><IconifyIcon icon='bi:arrow-right' /></Button>
            </div>
          </Col>

          <Swiper
            modules={[Autoplay, Navigation]}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next-blog',
              prevEl: '.swiper-button-prev-blog'
            }}
            slidesPerView={2}
            spaceBetween={50}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >

            <SwiperSlide className="py-4">
              <article className="card card-hover-shadow rounded-4 overflow-hidden h-100">
                <div className="badge text-bg-white position-absolute top-0 start-0 m-4">Lifestyle</div>
                <Image src={blogImg} className="card-img-top" alt="Blog-img" />
                <CardBody className="pb-2">
                  <CardTitle as={'h6'}><Link href="">Techniques to captivate your audience</Link></CardTitle>
                </CardBody>
                <CardFooter className="pt-0">
                  <Link className="icon-link icon-link-hover stretched-link" href="/blog/blog-single">Read more<IconifyIcon icon='bi:arrow-right' /> </Link>
                </CardFooter>
              </article>
            </SwiperSlide>
            <SwiperSlide className="py-4">
              <article className="card card-hover-shadow rounded-4 overflow-hidden h-100">
                <div className="card-img-top overflow-hidden position-relative">
                  <div className="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/9No-FiEInLA" allow="autoplay; encrypted-media" allowFullScreen />
                  </div>
                </div>
                <CardBody className="px-3">
                  <CardTitle as={'h6'}><Link href="">Never underestimate the influence</Link></CardTitle>
                </CardBody>
                <CardFooter className="pt-0">
                  <Link className="icon-link icon-link-hover" href="/blog/blog-single">Read more<IconifyIcon icon='bi:arrow-right' /> </Link>
                </CardFooter>
              </article>
            </SwiperSlide>
            <SwiperSlide className="py-4">
              <article className="card card-hover-shadow rounded-4 overflow-hidden h-100">
                <div className="card-img-top overflow-hidden position-relative">
                  <div className="ratio ratio-16x9">
                    <iframe src="https://player.vimeo.com/video/167434033?title=0&byline=0&portrait=0" width={620} height={347} allowFullScreen />
                  </div>
                </div>
                <CardBody className="px-3">
                  <CardTitle as={'h6'}><Link href="">10 things you need to know about Folio</Link></CardTitle>
                </CardBody>
                <CardFooter className="pt-0">
                  <Link className="icon-link icon-link-hover" href="/blog/blog-single">Read more<IconifyIcon icon='bi:arrow-right' /> </Link>
                </CardFooter>
              </article>
            </SwiperSlide>
            <SwiperSlide className="py-4">
              <article className="card card-hover-shadow rounded-4 overflow-hidden h-100">
                <div className="badge text-bg-white position-absolute top-0 start-0 m-4">Lifestyle</div>
                <Image src={blog2Img} className="card-img-top" alt="Blog-img" />
                <CardBody className="pb-2">
                  <CardTitle as={'h6'}><Link href="">Tips for improving your website's visibility</Link></CardTitle>
                </CardBody>
                <CardFooter className="pt-0">
                  <Link className="icon-link icon-link-hover stretched-link" href="/blog/blog-single">Read more<IconifyIcon icon='bi:arrow-right' /> </Link>
                </CardFooter>
              </article>
            </SwiperSlide>
          </Swiper>
        </Row>
      </Container>
    </section>
  )
}

export default BlogSlider