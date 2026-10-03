'use client'
import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'
import avatar10 from '@/assets/images/avatar/10.jpg'
import appleImg from '@/assets/images/elements/apple.svg'
import giconImg from '@/assets/images/elements/gicon.svg'
import gradShapeImg from '@/assets/images/elements/grad-shape/05.png'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration.svg'
import handImg from '@/assets/images/elements/hand-dec.png'
import Image from 'next/image'
// import {} from 'swiper'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Col, Container, Row } from 'react-bootstrap'


const Testimonials = () => {
  return (
    <section className="position-relative pt-0">
      <div className="position-absolute top-0 end-0 me-7 d-none d-sm-block" data-0="right:0%;top:50%;" data-top="right:0%;top:90%;">
        <Image src={handImg} alt="hand decoration" />
      </div>
      <div className="position-absolute start-0 bottom-0 mb-n7 ms-n7">
        <Image src={gradShapeImg} alt="grad shape" />
      </div>
      <Container fluid>
        <div className="max-width-1550 bg-secondary bg-opacity-50 bg-blur position-relative rounded-4 overflow-hidden py-6 py-lg-8">
          <div className="position-absolute top-0 end-0 mt-n6 ms-n5">
            <Image src={decorationImg} className="blur-7 opacity-1" alt="Grad shape" />
          </div>
          <Container>
            <div className="inner-container text-center mb-lg-6">
              <h2>Client Testimonials 😍</h2>
            </div>
            <Row>
              <Col md={8} className="mx-auto">
                {/* <div className="swiper mt-2 mt-md-4" data-swiper-options="{
        &quot;spaceBetween&quot;: 30,
        &quot;autoplay&quot;:{
          &quot;delay&quot;: 4000, 
          &quot;disableOnInteraction&quot;: false,
          &quot;pauseOnMouseEnter&quot;: true
        },
        &quot;pagination&quot;:{
          &quot;el&quot;:&quot;.swiper-pagination&quot;,
          &quot;clickable&quot;:&quot;true&quot;
        }}"> */}
                <Swiper
                  modules={[Autoplay, Pagination]}
                  className='mt-2 mt-md-4 pb-5'
                  pagination={{ clickable: true, el: ".swiper-pagination" }}
                  loop={true}
                  autoplay={{ delay: 3000 }}
                  slidesPerView={2}
                  spaceBetween={30}
                  breakpoints={{
                    576: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    1200: { slidesPerView: 1 },
                  }}
                >
                  <SwiperSlide>
                    <div className="text-center">
                      <div className="avatar avatar-lg mx-auto flex-shrink-0 mb-4">
                        <Image className="avatar-img rounded-circle" src={avatar9} alt="avatar" />
                      </div>
                      <blockquote className="mb-4">
                        <p className="lead heading-color mb-0">Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience. Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled.&nbsp;</p>
                      </blockquote>
                      <ul className="list-inline mb-4">
                        <li className="list-inline-item fs-6 me-0"><IconifyIcon icon='bi-star-fill' className="text-warning" /></li>
                        <li className="list-inline-item fs-6 me-0"><IconifyIcon icon='bi-star-fill' className="text-warning" /></li>
                        <li className="list-inline-item fs-6 me-0"><IconifyIcon icon='bi-star-fill' className="text-warning" /></li>
                        <li className="list-inline-item fs-6 me-0"><IconifyIcon icon='bi-star-fill' className="text-warning" /></li>
                        <li className="list-inline-item fs-6 me-0"><i className="bi bi-star-half text-warning" /></li>
                      </ul>
                      <div>
                        <h6 className="mb-0">Jacqueline Miller</h6>
                        <span>Product designer</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="text-center">
                      <div className="avatar avatar-lg mx-auto flex-shrink-0 mb-4">
                        <Image className="avatar-img rounded-circle" src={avatar10} alt="avatar" />
                      </div>
                      <blockquote className="mb-4">
                        <p className="lead heading-color mb-0">Their team went above and beyond to understand our needs and deliver a solution that exceeded our expectations. They demonstrated throughout the process was truly impressive.</p>
                      </blockquote>
                      <ul className="list-inline mb-4">
                        <li className="list-inline-item fs-6 me-0"><IconifyIcon icon='bi-star-fill' className="text-warning" /></li>
                        <li className="list-inline-item fs-6 me-0"><IconifyIcon icon='bi-star-fill' className="text-warning" /></li>
                        <li className="list-inline-item fs-6 me-0"><IconifyIcon icon='bi-star-fill' className="text-warning" /></li>
                        <li className="list-inline-item fs-6 me-0"><IconifyIcon icon='bi-star-fill' className="text-warning" /></li>
                        <li className="list-inline-item fs-6 me-0"><IconifyIcon icon='bi-star-fill' className="text-warning" /></li>
                      </ul>
                      <div>
                        <h6 className="mb-0">Louis Ferguson</h6>
                        <span>Web Developer</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="text-center">
                      <div className="avatar avatar-lg mx-auto flex-shrink-0 mb-4">
                        <Image className="avatar-img rounded-circle" src={avatar1} alt="avatar" />
                      </div>
                      <blockquote className="mb-4">
                        <p className="lead heading-color mb-0">Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal.</p>
                      </blockquote>
                      <ul className="list-inline mb-4">
                        <li className="list-inline-item fs-6 me-0"><IconifyIcon icon='bi-star-fill' className="text-warning" /></li>
                        <li className="list-inline-item fs-6 me-0"><IconifyIcon icon='bi-star-fill' className="text-warning" /></li>
                        <li className="list-inline-item fs-6 me-0"><IconifyIcon icon='bi-star-fill' className="text-warning" /></li>
                        <li className="list-inline-item fs-6 me-0"><IconifyIcon icon='bi-star-fill' className="text-warning" /></li>
                        <li className="list-inline-item fs-6 me-0"><i className="bi bi-star-half text-warning" /></li>
                      </ul>
                      <div>
                        <h6 className="mb-0">Emma Watson</h6>
                        <span>UI/UX designer</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <div className="swiper-pagination swiper-pagination-primary position-absolute bottom-0 mb-3"></div>
                </Swiper>

              </Col>
            </Row>
            <hr className="border-primary border-2 border-opacity-25 my-5" />
            <Row className="align-items-center px-md-5">
              <Col lg={4}>
                <h5 className="mb-4 mb-lg-0">More than 500+ clients using <span className="text-primary">Folio</span> platform</h5>
              </Col>
              <Col sm={6} lg={4} xl={3} className="border-end border-primary border-opacity-25 ms-auto mb-4 mb-sm-0">
                <div className="d-flex align-items-center">
                  <Image src={appleImg} className="icon-lg" alt='appleImg' />
                  <div className="ms-3">
                    <ul className="list-inline mb-1">
                      <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-fill' className="text-warning" /></li>&nbsp;
                      <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-fill' className="text-warning" /></li>&nbsp;
                      <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-fill' className="text-warning" /></li>&nbsp;
                      <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-fill' className="text-warning" /></li>&nbsp;
                      <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-half' className="text-warning" /></li>
                    </ul>
                    <span>4.8 stars on App Store</span>
                  </div>
                </div>
              </Col>
              <Col sm={6} lg={4} xl={3}>
                <div className="d-flex align-items-center ps-2">
                  <Image src={giconImg} className="icon-lg" alt='giconImg' />
                  <div className="ms-3">
                    <ul className="list-inline mb-1">
                      <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-fill' className="text-warning" /></li>&nbsp;
                      <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-fill' className="text-warning" /></li>&nbsp;
                      <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-fill' className="text-warning" /></li>&nbsp;
                      <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-fill' className="text-warning" /></li>&nbsp;
                      <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-half' className="text-warning" /></li>
                    </ul>
                    <span>4.6 stars on Google</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Container >
    </section >
  )
}

export default Testimonials