import Image from 'next/image'
import React from 'react'
import googlePlayImg from '@/assets/images/elements/google-play.svg'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration-2.svg'
import appStoreImg from '@/assets/images/elements/app-store.svg'
import deocration2Img from '@/assets/images/mobile-app/deocration-2.jpg'
import deocration3Img from '@/assets/images/mobile-app/deocration-3.jpg'
import mobileImg from '@/assets/images/mobile-app/hero.png'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar10 from '@/assets/images/avatar/10.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="position-relative overflow-hidden pt-sm-8 pt-lg-9 pb-0">
      <span>
        <svg className="position-absolute bottom-0 start-0 mb-n1 mb-lg-n4 z-1" viewBox="0 0 1920 149" xmlSpace="preserve">
          <path className="text-secondary" d="M873.3,37.9C775,19.2,603.7-11.5,433.5,4.4C275.1,19.3,45.1,43.4-12,4.4v121V149l1946-2.6V97.6 c-109.9-35.9-230.6-93.1-468.8-75.4C1260.2,37.3,1089.7,79,873.3,37.9z" fill="currentColor" />
        </svg>
      </span>
      <div className="position-absolute end-0 top-0">
        <Image src={decorationImg} className="opacity-2 blur-9 h-300px rotate-335" alt="Grad shape" />
      </div>
      <Container className="position-relative pt-4 pt-sm-0 pb-8 pb-xl-9">
        <Row className="align-items-center">
          <Col lg={6}  className="mb-6 mb-lg-0">
            <h1 className="fw-bold mb-3 mb-md-4">Smart, Secure, and Simple Banking</h1>
            <p className="lead mb-3 mb-md-4">Experience seamless money transfers, hassle-free bill payments, and secure account management—all in one app.</p>
            <div className="d-sm-flex mb-4 mb-lg-7">
              <Link href=""> <Image src={googlePlayImg} className="btn-transition me-4 mb-2 mb-sm-0" width={180} alt="play store" /> </Link>
              <Link href=""> <Image src={appStoreImg} className="btn-transition" width={180} alt="app-store" /> </Link>
            </div>
            <div className="d-flex align-items-center">
              <ul className="avatar-group align-items-center justify-content-center mb-0 me-2">
                <li className="avatar avatar-sm">
                  <Image className="avatar-img rounded-circle" src={avatar2} alt="avatar" />
                </li>
                <li className="avatar avatar-sm">
                  <Image className="avatar-img rounded-circle" src={avatar5} alt="avatar" />
                </li>
                <li className="avatar avatar-sm">
                  <Image className="avatar-img rounded-circle" src={avatar10} alt="avatar" />
                </li>
                <li className="avatar avatar-sm">
                  <Image className="avatar-img rounded-circle" src={avatar9} alt="avatar" />
                </li>
                <li className="avatar avatar-sm">
                  <Image className="avatar-img rounded-circle" src={avatar6} alt="avatar" />
                </li>
              </ul>
              <p className="heading-color mb-0"><span className="text-primary">5000+</span> users have downloaded our app</p>
            </div>
          </Col>
          <Col sm={9} lg={5} xxl={4} className="position-relative mx-auto">
            <div className="position-absolute start-0 top-0 mt-6 ms-xl-n7 z-index-2 d-none d-sm-block">
              <Image src={deocration2Img} className="aos rounded-3 shadow-primary" data-aos="zoom-in" data-aos-delay={400} data-aos-duration={800} data-aos-easing="ease-in-out" style={{ height: 80 }} alt="deocration" />
            </div>
            <div className="position-absolute top-50 end-0 translate-middle-y me-n6 me-xl-n8 mt-xl-n5 d-none d-sm-block">
              <Image src={deocration3Img} className="aos rounded-3 shadow-primary" data-aos="zoom-in" data-aos-delay={600} data-aos-duration={800} data-aos-easing="ease-in-out" alt="deocration" />
            </div>
            <Image src={mobileImg} className="aos mb-n8 mb-md-n9 mb-xxl-n8" data-aos="fade-up" data-aos-delay={100} data-aos-duration={800} data-aos-easing="ease-in-out" alt="mobile image" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero