import Image from 'next/image'
import React from 'react'
import logo from '@/assets/images/logo.svg'
import logoLight from '@/assets/images/logo-light.svg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-dark position-relative pt-6 pt-xl-8" data-bs-theme="dark">
      <Container>
        <Row className="g-4">
          <Col lg={4}>
            <Link className="navbar-brand me-0" href="/home">
              <Image className="light-mode-item navbar-brand-item h-40px" src={logo} alt="logo" />
              <Image className="dark-mode-item navbar-brand-item h-40px" src={logoLight} alt="logo" />
            </Link>
            <p className="my-3 my-lg-4">A Bootstrap theme that's both stylish and functional, perfect for any type of technology or corporate website.</p>
            <ul className="list-group list-group-borderless">
              <li className="d-flex mb-2"><Link href="" className="text-primary-hover"><IconifyIcon icon='bi:headset' className="me-2 text-primary " /> (251) 854-6308 </Link></li>
              <li className="d-flex mb-2"><Link href="" className="text-primary-hover"><IconifyIcon icon='bi:envelope' className="me-2 text-primary " /> example@gmail.com</Link></li>
            </ul>
          </Col>
          <Col xs={6} md={3} lg={2}>
            <h6 className="mb-3 mb-sm-4">Company</h6>
            <ul className="nav flex-column gap-1">
              <li className="nav-item"><Link className="nav-link pt-0" href="/about/about-v1">About us</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/about/career">Career <span className="badge bg-primary ms-2">2 jobs</span></Link></li>
              <li className="nav-item"><Link className="nav-link" href="/about/career-single">Career detail</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/contact-2">Become a partner</Link></li>
              <li className="nav-item"><Link className="nav-link" href="service-v1.html">Services</Link></li>
            </ul>
          </Col>
          <Col xs={6} md={3} lg={2}>
            <h6 className="mb-3 mb-sm-4">Resources</h6>
            <ul className="nav flex-column gap-1">
              <li className="nav-item"><Link className="nav-link pt-0" href="/portfolio/study1">Case studies</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/pricing-1">Pricing <span className="badge bg-success ms-2">New</span></Link></li>
              <li className="nav-item"><Link className="nav-link" href="/blog/blog-minimal">Blogs</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/blog/blog-single">Blog detail</Link></li>
              <li className="nav-item"><Link className="nav-link" href="">Success stories<IconifyIcon icon='bi:box-arrow-up-right' className="small ms-2" /></Link></li>
            </ul>
          </Col>
          <Col md={6} lg={4}>
            <h6 className="mb-3 mb-sm-4">Stay connected with us</h6>
            <form className="input-group bg-body p-2 rounded-3 mb-2">
              <input className="form-control form-control-sm rounded border-0 me-3" type="email" placeholder="Enter your email" />
              <button type="button" className="btn btn-sm btn-primary-grad px-3 rounded-2 mb-0"><IconifyIcon icon='bi:send-fill' /></button>
            </form>
            <p className="small mb-0">✌️ No Spam — We Promise!</p>
            <ul className="list-inline align-items-center mb-0 mt-3 mt-sm-4">
              <li className="list-inline-item heading-color fw-semibold">Follow on:</li>
              <li className="list-inline-item"> <Link className="btn btn-xs btn-icon bg-facebook" href=""><IconifyIcon icon='bi:facebook' className=" lh-base" /></Link> </li>
              <li className="list-inline-item"> <Link className="btn btn-xs btn-icon bg-instagram" href=""><IconifyIcon icon='bi:instagram' className=" lh-base" /></Link> </li>
              <li className="list-inline-item"> <Link className="btn btn-xs btn-icon bg-twitter-x" href=""><IconifyIcon icon='bi:twitter-x' className=" lh-base" /></Link> </li>
              <li className="list-inline-item"> <Link className="btn btn-xs btn-icon bg-linkedin" href=""><IconifyIcon icon='bi:linkedin' className=" lh-base" /></Link> </li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4 mt-xl-5 mb-0" />
        <div className="d-md-flex justify-content-between align-items-center text-center text-lg-start py-4">
          <div className="text-body small mb-3 mb-md-0"> Copyrights ©2024 Folio. Build by <Link href="#" target="_blank" className="text-body text-primary-hover hover-underline-animation">Themesdesginer</Link>. </div>
          <ul className="nav d-flex justify-content-center gap-1 mb-0">
            <li className="nav-item"><Link className="nav-link small py-0" href="#">Privacy policy</Link></li>
            <li className="nav-item"><Link className="nav-link small py-0 pe-0" href="#">Terms &amp; conditions</Link></li>
          </ul>
        </div>
      </Container>
    </footer>

  )
}

export default Footer