import Image from 'next/image'
import React from 'react'
import googlePlayImg from '@/assets/images/elements/google-play.svg'
import appStoreImg from '@/assets/images/elements/app-store.svg'
import logo from '@/assets/images/logo.svg'
import logoLight from '@/assets/images/logo-light.svg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-secondary position-relative pt-6 pt-lg-8">
      <Container className="position-relative">
        <nav className="mb-2" aria-label="breadcrumb">
          <ol className="breadcrumb pt-0">
            <li className="breadcrumb-item"><Link href="/home">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Product landing page</li>
          </ol>
        </nav>
        <p>Representative example: Based on a 12-month tenure. ₹59900.00 total cost includes 12% p.a. and No Cost EMI savings of ₹2850.00, paid over 12 months as twelve monthly payments of ₹4991.67.</p>
        <ul className="ps-3">
          <li>The Classic Fit Series 5 and Classic Fit SE have a water resistance rating of 50 meters under VIS standard 22810:2010. This means they are suitable for shallow-water activities such as swimming in a pool or ocean.</li>
          <li>However, they are not recommended for scuba diving, waterskiing, or other activities involving high-velocity water or submersion beyond shallow depth.</li>
          <li>Water resistance is not a permanent condition and can decrease over time. For additional information, see</li>
          <li>Classic Fit Series 5 and Classic Fit Pro are rated IP6X dust resistant.</li>
          <li>The ECG app is available on Classic Fit Series 3 and later (excluding Classic Fit SE) and can generate an ECG similar to a single-lead electrocardiogram. Intended for use by individuals 22 years old and over.</li>
        </ul>
        <hr className="my-4 my-xl-6" />
        <Row className="g-4">
          <Col md={6} xl={4}>
            <Link className="navbar-brand me-0" href="/home">
              <Image className="light-mode-item navbar-brand-item h-40px w-auto" src={logo} alt="logo" />
              <Image className="dark-mode-item navbar-brand-item h-40px w-auto" src={logoLight} alt="logo" />
            </Link>
            <p className="my-3 my-xl-4">A Bootstrap theme that's both stylish and functional, perfect for any type of technology or corporate website.</p>
          </Col>
          <Col xl={7} className="ms-auto">
            <Row className="g-4">
              <Col xs={6} md={3}>
                <h6 className="mb-3 mb-xl-4">Company</h6>
                <ul className="nav flex-column gap-1">
                  <li className="nav-item"><Link className="nav-link pt-0" href="/about/about-v1">About us</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="contact-us.html">Contact us</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/about/career">Career <span className="badge bg-primary ms-2">2 jobs</span></Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/about/career-single">Career detail</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/contact-2">Become a partner</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="service-v1.html">Services</Link></li>
                </ul>
              </Col>
              <Col xs={6} md={3}>
                <h6 className="mb-3 mb-xl-4">Resources</h6>
                <ul className="nav flex-column gap-1">
                  <li className="nav-item"><Link className="nav-link pt-0" href="/portfolio/study1">Case studies</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/pricing-1">Pricing <span className="badge bg-success ms-2">New</span></Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/blog/blog-minimal">Blogs</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/blog/blog-single">Blog detail</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="#">Success stories<IconifyIcon icon='bi:box-arrow-up-right' className="small ms-2" /></Link></li>
                </ul>
              </Col>
              <Col sm={6} md={6}>
                <h6 className="mb-3 mb-xl-4">Download our app</h6>
                <p className="mb-2">Get instant access to exclusive features for FREE!</p>
                <Row className="g-2 mb-4 mb-sm-5">
                  <Col xs={5} md={4} xl={5}>
                    <Link href="#"> <Image src={googlePlayImg} alt='googlePlayImg' /> </Link>
                  </Col>
                  <Col xs={5} md={4} xl={5}>
                    <Link href="#"> <Image src={appStoreImg} alt="app-store" /> </Link>
                  </Col>
                </Row>
                <span className="heading-color fw-semibold">Follow on:</span>
                <ul className="list-inline align-items-center mb-0 mt-3">
                  <li className="list-inline-item"> <Link className="btn btn-xs btn-icon bg-facebook" href="#"><IconifyIcon icon='bi:facebook' className=" lh-base" /></Link> </li>
                  <li className="list-inline-item"> <Link className="btn btn-xs btn-icon bg-instagram" href="#"><IconifyIcon icon='bi:instagram' className=" lh-base" /></Link> </li>
                  <li className="list-inline-item"> <Link className="btn btn-xs btn-icon bg-twitter-x" href="#"><IconifyIcon icon='bi:twitter-x' className=" lh-base" /></Link> </li>
                  <li className="list-inline-item"> <Link className="btn btn-xs btn-icon bg-linkedin" href="#"><IconifyIcon icon='bi:linkedin' className=" lh-base" /></Link> </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className="mt-4 mt-xl-5 mb-0" />
        <div className="d-md-flex justify-content-between align-items-center text-center text-lg-start py-4">
          <div className="text-body small mb-3 mb-md-0"> Copyrights ©2024 Folio. Build by <Link href="#" target="_blank" className="text-body text-primary-hover hover-underline-animation">Themesdesginer</Link>. </div>
          <ul className="nav d-flex justify-content-center gap-1 mb-0">
            <li className="nav-item"><Link className="nav-link small py-0" href="#">Privacy policy</Link></li>
            <li className="nav-item"><Link className="nav-link small py-0 pe-0" href="#">Terms &amp; conditions</Link></li>
          </ul>
        </div>
      </Container>
    </footer >

  )
}

export default Footer