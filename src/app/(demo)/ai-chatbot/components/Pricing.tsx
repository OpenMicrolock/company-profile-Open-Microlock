'use client'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { pricingData } from '../data'
import { Card, CardBody, CardFooter, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Pricing = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-lg-5">
          <h2 className="mb-0">Choose the plan that fits your needs</h2>
        </div>
        <Row className="g-4">
          <Col md={8} lg={4} className="mx-auto">
            <Card className="bg-secondary bg-opacity-75 text-center rounded-4 p-5 h-100">
              <CardBody className="p-0">
                <h6 className="mb-2">Free</h6>
                <span><span className="h1">$0</span> /month</span>
                <div className="mb-0 mt-3"><Link href="/auth/sign-up" className="btn btn-outline-primary mb-0">Sign up now</Link></div>
              </CardBody>
              <div className="p-0 pt-4">
                <p className="heading-color mb-0"><IconifyIcon icon='bi:patch-check' className="me-2 text-success" />Limited to 100 conversations per month</p>
              </div>
            </Card>
          </Col>
          <Col md={8} lg={4}  className="mx-auto">
            <Card className="bg-primary text-center rounded-4 p-5 h-100" data-bs-theme="dark">
              <CardBody className="p-0">
                <h6 className="mb-2">Professional</h6>
                <span><span className="h1">$59</span> /month</span>
                <div className="mb-0 mt-3"><Link href="/pricing-2" className="btn btn-dark mb-0">Upgrade Now</Link></div>
              </CardBody>
              <div className="p-0 pt-4">
                <p className="heading-color mb-0"><IconifyIcon icon='bi:patch-check' className="me-2 text-success" />Detailed analytics and reporting</p>
              </div>
            </Card>
          </Col>
          <Col md={8} lg={4}  className="mx-auto">
            <Card className="bg-secondary bg-opacity-75 text-center rounded-4 p-5 h-100">
              <CardBody className="p-0">
                <h6 className="mb-2">Enterprise</h6>
                <span className="h2">Custom</span>
                <div className="mb-0 mt-3"><Link href="/pricing-2" className="btn btn-outline-primary mb-0">Request pricing</Link></div>
              </CardBody>
              <div className="p-0 pt-4">
                <p className="heading-color mb-0"><IconifyIcon icon='bi:patch-check' className="me-2 text-success" />Custom integration and development</p>
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={9} xl={7} className="mx-auto">
            <Swiper
              modules={[Autoplay, Pagination]}
              loop={true}
              className="mt-6 pb-5"
              autoplay={{ delay: 4000 }}
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                el: '.swiper-pagination',
                clickable: true
              }}
            >
              {
                pricingData.map((item, idx) => (
                  <SwiperSlide className="text-center" key={idx}>
                    <div className="avatar avatar-lg flex-shrink-0 mb-3">
                      <Image className="avatar-img rounded-circle" src={item.image} alt="avatar" />
                    </div>
                    <blockquote className="mb-4">
                      <p className="fs-6 heading-color mb-0">{item.description} </p>
                    </blockquote>
                    <h6 className="mb-0">{item.name}</h6>
                    <span>{item.role}</span>
                  </SwiperSlide>
                ))
              }
              <div className="swiper-pagination swiper-pagination-primary position-absolute bottom-0 mb-3" />
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Pricing