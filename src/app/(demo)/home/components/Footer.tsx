import Image from 'next/image'
import React from 'react'
import gradShapeImg from '@/assets/images/elements/grad-shape/06.png'
import logoLight from '@/assets/images/logo-light.svg'
import googlePlay from '@/assets/images/elements/google-play.svg'
import appStore from '@/assets/images/elements/app-store.svg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-dark position-relative pt-6 pt-lg-8" data-bs-theme="dark">
      <div className="position-absolute top-0 end-0 mt-n8 z-index-9 d-none d-md-block">
        <Image src={gradShapeImg} className="w-250px" alt="Shape" />
      </div>
      <Container className="position-relative">
        <Row className=" mb-4 mb-lg-7">
          <Col lg={3} xl={4} className="mb-4 mb-lg-0">
            <Link className="me-0" href="/home">
              <Image className="h-40px" src={logoLight} alt="logo" />
            </Link>
          </Col>
          <Col lg={9} xl={7} className="ms-md-auto">
            <div className="bg-white bg-opacity-5 d-md-flex justify-content-between align-items-center rounded-4 p-4">
              <h5 className="mb-3 mb-md-0"><span className="hand-wave-animate">🖐️</span> Let's innovate together</h5>
              <Link href="/contact-1" className="btn btn-sm btn-primary-grad text-nowrap mb-0">Start innovating</Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={8}>
            <Row className="g-4">
              <Col sm={6} md={4}>
                <h6 className="mb-0">Company</h6>
                <hr className="opacity-1 my-md-4" />
                <ul className="nav flex-column gap-1">
                  <li className="nav-item"><Link className="nav-link pt-0" href="/about/about-v1">About us</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="contact-us.html">Contact us</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/about/career">Career <span className="badge text-bg-success ms-2">We are hiring!</span></Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/about/career-single">Career detail</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/contact-2">Become a partner</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="service-v1.html">Services</Link></li>
                </ul>
              </Col>
              <Col sm={6} md={4}>
                <h6 className="mb-0">Resources</h6>
                <hr className="opacity-1 my-md-4" />
                <ul className="nav flex-column gap-1">
                  <li className="nav-item"><Link className="nav-link pt-0" href="/portfolio/study1">Case studies</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/pricing-1">Pricing</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/blog/blog-minimal">Blogs</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/blog/blog-single">Blog detail</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="#">Success stories<IconifyIcon icon='bi:box-arrow-up-right' className="small ms-2" /></Link></li>
                </ul>
              </Col>
              <Col sm={6} md={4}>
                <h6 className="mb-0">Community</h6>
                <hr className="opacity-1 my-md-4" />
                <ul className="nav flex-column gap-1">
                  <li className="nav-item"><Link className="nav-link pt-0" href="#"><IconifyIcon icon='bi:file-earmark-text' className="me-2" />Documentation</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="#"><IconifyIcon icon='bi:bullseye' className="me-2" />Changelog <span className="badge text-bg-primary ms-2">v2.0.0</span></Link></li>
                  <li className="nav-item"><Link className="nav-link" href="#"><IconifyIcon icon='bi:chat-left' className=" me-2" />Supports</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="#"><IconifyIcon icon='bi:send' className="me-2" />Newsletter</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="#"><IconifyIcon icon='bi:life-preserver' className=" me-2" />Help center</Link></li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col xl={4}  className="mt-6 mt-xl-0">
            <h6 className="mb-0">Download our app</h6>
            <hr className="opacity-1 my-md-4" />
            <p>Get instant access to exclusive features for FREE!</p>
            <Row className=" g-2 mt-2 mb-4 mb-sm-5">
              <Col xs={5} sm={3} lg={2} xl={4}>
                <Link href="#"> <Image src={googlePlay} alt='' /> </Link>
              </Col>
              <Col xs={5} sm={3} lg={2} xl={4}>
                <Link href="#"> <Image src={appStore} alt="app-store" /> </Link>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className="mt-xl-5 mb-0 opacity-1" />
        <div className="d-md-flex justify-content-between align-items-center text-center text-lg-start py-4">
          <div className="text-body small mb-3 mb-md-0"> Copyrights ©2024 Folio. Build by <Link href="#" target="_blank" className="text-body text-primary-hover hover-underline-animation">Themesdesginer</Link>. </div>
          <ul className="list-inline mb-0">
            <li className="list-inline-item"> <Link className="btn btn-xs btn-icon btn-secondary" href="#"><IconifyIcon icon='bi-facebook' className=" lh-base" /></Link> </li>
            <li className="list-inline-item"> <Link className="btn btn-xs btn-icon btn-secondary" href="#"><IconifyIcon icon='bi-instagram' className="lh-base" /></Link> </li>
            <li className="list-inline-item"> <Link className="btn btn-xs btn-icon btn-secondary" href="#"><IconifyIcon icon='bi-twitter-x' className="lh-base" /></Link> </li>
            <li className="list-inline-item"> <Link className="btn btn-xs btn-icon btn-secondary" href="#"><IconifyIcon icon='bi-linkedin' className="lh-base" /></Link> </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default Footer