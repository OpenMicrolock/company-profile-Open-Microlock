import Image from 'next/image'
import React from 'react'
import aiPattern from '@/assets/images/elements/ai-pattern.png'
import aiRobot from '@/assets/images/elements/ai-robot-2.png'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration-2.svg'
import { serviceData } from '../data'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import icons8 from '@/assets/images/client/icons/08.svg'
import icons4 from '@/assets/images/client/icons/04.svg'
import icons12 from '@/assets/images/client/icons/12.svg'
import icons9 from '@/assets/images/client/icons/09.svg'
import icons5 from '@/assets/images/client/icons/05.svg'
import icons3 from '@/assets/images/client/icons/03.svg'
import icons2 from '@/assets/images/client/icons/02.svg'
import icons10 from '@/assets/images/client/icons/10.svg'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Services = () => {
  return (
    <section className="py-0 position-relative">
      <div className="position-absolute end-0 bottom-0 me-lg-7 mb-n7 z-index-2 d-none d-md-block">
        <Image src={aiRobot} height={300}  className="aos" data-aos="fade-left" data-aos-delay={100} data-aos-duration={800} data-aos-easing="ease-in-out" alt="robot image" />
      </div>
      <div className="bg-dark position-relative overflow-hidden py-8">
        <div className="position-absolute top-0 start-0 mt-n9">
          <Image src={aiPattern} className="mt-n7" alt='aiPattern' />
        </div>
        <div className="position-absolute top-0 start-0 mt-n3">
          <svg className="fill-body" width={1920} height={146} viewBox="0 0 1920 146" xmlns="http://www.w3.org/2000/svg">
            <path d="M1457.5 123.815C1692.5 141 1811.59 85.4373 1920 50.5V3L0 0.5V23.4269V141C56.3835 103.114 283.285 126.587 439.5 141C607.5 156.5 776.5 126.673 873.5 108.5C1087 68.5 1255.23 109.024 1457.5 123.815Z" />
          </svg>
        </div>
        <div className="position-absolute bottom-0 end-0 mb-n8 me-n9">
          <Image src={decorationImg} className="opacity-2 blur-9" alt="Grad shape" />
        </div>
        <Container className="position-relative pt-5 pt-sm-8" data-bs-theme="dark">
          <Row>
            <Col lg={4}  className="mb-5 mb-lg-0">
              <h2 className="mb-3 mb-lg-4">AI solutions for every business</h2>
              <p className="mb-3 mb-lg-4">Discover our AI services designed to optimize operations, enhance decisions, and drive growth.</p>
              <Link href="/about/services-list" className="btn btn-primary">Explore all services</Link>
            </Col>
            <Col lg={7} className="ms-auto hover-opacity-fade">
              {
                serviceData.map((item, idx) => (
                  <div className="hover-item d-flex align-items-center border-bottom position-relative py-4" key={idx}>
                    <Image src={item.image} className="me-3" alt="service icon" />
                    <h6 className="mb-0">{item.title}</h6>
                    <Link href="/about/services-single" className="icon-link icon-link-hover text-body stretched-link ms-auto"><IconifyIcon icon='bi:arrow-right' className="fs-5" /> </Link>
                  </div>
                ))
              }
            </Col>
          </Row>
          <div className="inner-container text-center mt-8">
            <h4>AI technologies and tools we utilize</h4>
            <ul className="list-inline d-flex justify-content-center flex-wrap gap-4 my-5 my-lg-6">
              <li className="list-inline-item me-0">
                <Link href="" className="icon-xl btn-transition bg-white border border-white border-opacity-10 d-flex justify-content-center align-items-center rounded-2">
                  <Image src={icons8} className="h-40px" alt="icon" />
                </Link>
              </li>
              <li className="list-inline-item me-0">
                <Link href="" className="icon-xl btn-transition bg-white border border-white border-opacity-10 d-flex justify-content-center align-items-center rounded-2">
                  <Image src={icons4} className="h-40px" alt="icon" />
                </Link>
              </li>
              <li className="list-inline-item me-0">
                <Link href="" className="icon-xl btn-transition bg-white border border-white border-opacity-10 d-flex justify-content-center align-items-center rounded-2">
                  <Image src={icons12} className="h-40px" alt="icon" />
                </Link>
              </li>
              <li className="list-inline-item me-0">
                <Link href="" className="icon-xl btn-transition bg-white border border-white border-opacity-10 d-flex justify-content-center align-items-center rounded-2">
                  <Image src={icons9} className="h-40px" alt="icon" />
                </Link>
              </li>
              <li className="list-inline-item me-0">
                <Link href="" className="icon-xl btn-transition bg-white border border-white border-opacity-10 d-flex justify-content-center align-items-center rounded-2">
                  <Image src={icons5} className="h-40px" alt="icon" />
                </Link>
              </li>
              <li className="list-inline-item me-0">
                <Link href="" className="icon-xl btn-transition bg-white border border-white border-opacity-10 d-flex justify-content-center align-items-center rounded-2">
                  <Image src={icons3} className="h-40px" alt="icon" />
                </Link>
              </li>
              <li className="list-inline-item me-0">
                <Link href="" className="icon-xl btn-transition bg-white border border-white border-opacity-10 d-flex justify-content-center align-items-center rounded-2">
                  <Image src={icons2} className="h-40px" alt="icon" />
                </Link>
              </li>
              <li className="list-inline-item me-0">
                <Link href="" className="icon-xl btn-transition bg-white border border-white border-opacity-10 d-flex justify-content-center align-items-center rounded-2">
                  <Image src={icons10} className="h-40px" alt="icon" />
                </Link>
              </li >
            </ul >
            <Button variant='outline-secondary' className="icon-link icon-link-hover" href="">Uncover our AI capabilities<IconifyIcon icon='bi:arrow-right' /> </Button>
          </div >
        </Container >
      </div >
    </section >
  )
}

export default Services