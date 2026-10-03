'use client'
import React from 'react'
import { reviewData } from '../data'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import IconifyIcon from '@/components/wrappers/IconifyIcon'

const Review = () => {
  return (
    <section className="bg-secondary-grad">
      <h2 className="text-center mb-4 mb-sm-6 pt-8">What people say about us</h2>
      {/* <div className="swiper px-4 px-sm-5" data-swiper-options="{
  &quot;spaceBetween&quot;: 30,
  &quot;speed&quot;:&quot;14000&quot;,
  &quot;autoplay&quot;:{
    &quot;delay&quot;: 0, 
    &quot;disableOnInteraction&quot;: false,
    &quot;pauseOnMouseEnter&quot;: true
  },
  &quot;breakpoints&quot;: {
    &quot;576&quot;: {&quot;slidesPerView&quot;: 1}, 
    &quot;768&quot;: {&quot;slidesPerView&quot;: 2}, 
    &quot;992&quot;: {&quot;slidesPerView&quot;: 3},
    &quot;1400&quot;: {&quot;slidesPerView&quot;: 4}
  }}"> */}
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={1400}
        className="px-4 px-sm-5"
        autoplay={{ 
          delay: 100,
          disableOnInteraction: false,
          pauseOnMouseEnter: true          
         }}
        slidesPerView={2}
        spaceBetween={30}
        breakpoints={{
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >

        {
          reviewData.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="card rounded-4 p-4 h-100">
                <div className="card-body p-0 mb-4">
                  <ul className="list-inline mb-3">
                    {Array(Math.floor(item.rating)).fill(0).map((_star, idx) => <li key={idx} className="list-inline-item me-1"><IconifyIcon width={16} height={16} icon='bi-star-fill' className="text-warning" /></li>)}
                    {!Number.isInteger(item.rating) && <li className="list-inline-item me-1"> <IconifyIcon icon='bi-star-half' width={16} height={16} className="text-warning" /> </li>}
                    {item.rating < 5 && Array(5 - Math.ceil(item.rating)).fill(0).map((_star, idx) => <li key={idx} className="list-inline-item me-1"><IconifyIcon height={16} icon='bi-star-fill' width={16} className="text-warning" /></li>)}&nbsp;
                  </ul>
                  <blockquote>
                    <p className="heading-color mb-0">{item.description}</p>
                  </blockquote>
                </div>
                <div className="card-footer bg-transparent p-0">
                  <div className="d-flex align-items-center">
                    <div className="avatar flex-shrink-0">
                      <Image className="avatar-img rounded-circle" src={item.avatar} alt="avatar" />
                    </div>
                    <div className="ms-3">
                      <p className="lead heading-color fw-semibold mb-0">{item.name}</p>
                      <small>{item.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}

export default Review