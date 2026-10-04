'use client'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { blogData } from '../data'
import { Button, CardBody, CardFooter, CardTitle, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const BlogSlider = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="g-4">
          <Col sm={8} lg={5}>
            <h3 className="mb-0 text-center text-sm-start">Latest from OpenMicroLock</h3>
          </Col>
          <Col sm={4} lg={5} className="ms-auto">
            <div className="d-flex justify-content-center justify-content-sm-end gap-3 position-relative mt-3">
              <Button variant='secondary' size='lg' className="btn-icon rounded-circle mb-0 swiper-button-prev"><IconifyIcon icon='bi:arrow-left' /></Button>
              <Button variant='secondary' size='lg' className="btn-icon rounded-circle mb-0 swiper-button-next"><IconifyIcon icon='bi:arrow-right' /></Button>
            </div>
          </Col>
          <Swiper
            modules={[Autoplay, Navigation]}
            loop={true}
            autoplay={{ delay: 3000 }}
            spaceBetween={50}
            className="mt-0"
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >

            {
              blogData.map((item, idx) => (
                <SwiperSlide className="py-4" key={idx}>
                  <article className="card card-img-scale shadow-sm rounded-4 overflow-hidden h-100">
                    <div className="card-img-scale-wrapper">
                      <Image src={item.image} className="card-img-top img-scale" alt="Blog-img" />
                    </div>
                    <CardBody className="pb-2">
                      <CardTitle as={'h6'}><Link href="">{item.title}</Link></CardTitle>
                      <p className="mb-0">{item.description}</p>
                    </CardBody>
                    <CardFooter className="pt-0">
                      <Link className="icon-link icon-link-hover stretched-link" href="/blog/blog-single">Read more<IconifyIcon icon='bi:arrow-right' /> </Link>
                    </CardFooter>
                  </article>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </Row>
      </Container>
    </section>
  )
}

export default BlogSlider