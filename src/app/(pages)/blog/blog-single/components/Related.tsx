'use client'
import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { blogRelatedData } from '../data'
import Image from 'next/image'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { CardBody, Container } from 'react-bootstrap'
import Link from 'next/link'

const Related = () => {
  return (
    <section className="bg-secondary overflow-hidden">
      <Container>
        <h3 className="mb-5 text-center">Related blogs</h3>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{
            el: '.swiper-pagination'
          }}
          spaceBetween={30}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
            {
              blogRelatedData.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <article className="card card-img-scale bg-transparent overflow-hidden h-100 p-0">
                    <div className="d-flex gap-2 position-absolute top-0 start-0 z-index-2 m-4">
                      <span className="badge bg-dark">{item.category}</span>
                      <span className="badge bg-white text-dark">{item.date}</span>
                    </div>
                    <div className="card-img-scale-wrapper rounded-4">
                      <Image src={item.image} className="rounded-4 img-scale" alt="Blog-img" />
                    </div>
                    <CardBody className="px-2">
                      <h6 className="card-title mb-2"><Link href="">{item.title}</Link></h6>
                      <Link className="icon-link icon-link-hover stretched-link" href="/blog/blog-single">Read more<IconifyIcon icon='bi:arrow-right' /> </Link>
                    </CardBody>
                  </article>
                </SwiperSlide>
              ))
            }
          <div className="swiper-pagination swiper-pagination-primary position-relative mt-0" />
        </Swiper>
      </Container>
    </section>
  )
}

export default Related