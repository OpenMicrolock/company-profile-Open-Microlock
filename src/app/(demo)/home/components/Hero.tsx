import Image from 'next/image'
import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar8 from '@/assets/images/avatar/08.jpg'
import bgImg from '@/assets/images/bg/01.jpg'
import React from 'react'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration.svg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
      <section className="bg-secondary position-relative overflow-hidden pt-xl-8">
        <div className="position-absolute top-0 start-0 mt-n9 ms-n5">
          <Image src={decorationImg} className="blur-7 opacity-2" alt="Grad shape" />
        </div>
        <Container className="position-relative pt-4 pt-sm-5">
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0 pe-md-5">
              <h1 className="fw-normal mb-4">
                We help your 
                 &nbsp;<span className="display-6">Business <span className="text-primary">Grow</span></span>
              </h1>
              <p className="lead mb-0">Let your brand shine with our innovative and visually stunning websites.</p>
              <ul className="list-inline d-flex flex-wrap gap-2 gap-xl-3 mt-3 mt-lg-4">
                <li className="list-inline-item heading-color"> <IconifyIcon icon='bi:check-circle' className="text-success me-1" />Flexible solutions
                </li>
                <li className="list-inline-item heading-color"> <IconifyIcon icon='bi:check-circle' className="text-success me-1" />System integration</li>
                <li className="list-inline-item heading-color"> <IconifyIcon icon='bi:check-circle' className="text-success me-1" />Complimentary updates</li>
              </ul>
              <div className="d-flex flex-wrap gap-3 mt-3 mt-lg-4">
                <Link href="#" className="btn btn-white-shadow mb-0">Get started</Link>
                <Link href="/portfolio/modern" className="link-primary-grad icon-link icon-link-hover">Explore our projects <IconifyIcon icon='bi:arrow-right' /></Link>
              </div>
            </Col>
            <Col lg={6} className="position-relative ps-md-5">
              <div className="position-relative">
                <Image src={bgImg} className="rounded-4" alt="hero-img" />
                <div className="bg-body d-none d-sm-block rounded-5 shadow-primary position-absolute end-0 bottom-0 p-4 z-index-2" style={{ marginBottom: '-2rem', marginRight: '-2.2rem' }}>
                  <ul className="avatar-group mb-2">
                    <li className="avatar avatar-sm">
                      <Image className="avatar-img rounded-circle" src={avatar1} alt="avatar" />
                    </li>
                    <li className="avatar avatar-sm">
                      <Image className="avatar-img rounded-circle" src={avatar2} alt="avatar" />
                    </li>
                    <li className="avatar avatar-sm">
                      <Image className="avatar-img rounded-circle" src={avatar3} alt="avatar" />
                    </li>
                    <li className="avatar avatar-sm">
                      <Image className="avatar-img rounded-circle" src={avatar8} alt="avatar" />
                    </li>
                    <li className="avatar avatar-sm">
                      <div className="avatar-img rounded-circle bg-dark">
                        <span className="text-white position-absolute top-50 start-50 translate-middle fw-bold" style={{ fontSize: 12 }}>500+</span>
                      </div>
                    </li>
                  </ul>
                  <p>Total visitors per month</p>
                  <p className="heading-color fw-bold mb-0 flex-centered"><IconifyIcon icon='bi:star-fill' className="text-warning fs-6 me-2" /><span className="fs-5">4.8</span>/5.0</p>
                </div>
                <span className="position-absolute bottom-0 end-0 text-secondary d-none d-sm-block" style={{ marginBottom: '-1px', marginRight: '-1px' }}>
                  <svg width={250} height={202} viewBox="0 0 250 202" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.5108 49.8918C25.5108 36.1146 37.1379 24.9459 51.4807 24.9459H249.89V201.563H25.5108V49.8918Z" fill="currentColor" />
                    <path d="M249.89 0L250 24.9457L224.03 25.0511C238.373 24.9929 249.951 13.7771 249.89 0Z" fill="currentColor" />
                    <path d="M25.5068 176.617L25.9658 201.559L0 202C14.3405 201.756 25.7603 190.392 25.5068 176.617Z" fill="currentColor" />
                  </svg>
                </span>
              </div>
              <div className="position-absolute top-0 start-0 mt-3 ms-md-n4">
                <div className="bg-body shadow-primary rounded-pill d-inline-flex align-items-center ps-2 pe-4 py-2">
                  <div className="avatar avatar flex-shrink-0">
                    <Image className="avatar-img rounded-circle" src={avatar8} alt="avatar" />
                  </div>
                  <div className="ps-3">
                    <span className="small heading-color fw-bold">Dennis Barrett</span>
                    <p className="small mb-0">🔥 Folio team nailed it!</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Hero