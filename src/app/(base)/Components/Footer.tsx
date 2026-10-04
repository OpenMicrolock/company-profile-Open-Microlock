import Image from 'next/image'
import React from 'react'
import logoLight from '@/assets/images/logo-light.svg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-dark pt-6 pt-md-8 position-relative" data-bs-theme="dark">
      <Container>
        <Row className="g-4 justify-content-between">
          <Col lg={4}>
            <Link href="/">
              <Image className="h-40px w-auto" src={logoLight} alt="logo" />
            </Link>
            <p className="my-3 my-lg-4">An open source smart lock and smart home platform built on ESP32 and C++, monitored through the DARMI app.</p>
            <ul className="list-inline mb-0">
              <li className="list-inline-item"> <Link className="btn btn-xs btn-icon btn-secondary" href=""><IconifyIcon icon='bi-facebook' className=" lh-base" /></Link> </li>
              <li className="list-inline-item"> <Link className="btn btn-xs btn-icon btn-secondary" href=""><IconifyIcon icon='bi-instagram' className=" lh-base" /></Link> </li>
              <li className="list-inline-item"> <Link className="btn btn-xs btn-icon btn-secondary" href=""><IconifyIcon icon='bi-twitter-x' className=" lh-base" /></Link> </li>
              <li className="list-inline-item"> <Link className="btn btn-xs btn-icon btn-secondary" href=""><IconifyIcon icon='bi-linkedin' className=" lh-base" /></Link> </li>
            </ul>
          </Col>
          <Col lg={6} xxl={4}>
            <Row className="g-4">
              <Col xs={6}>
                <h6 className="mb-3 mb-sm-4">Company</h6>
                <ul className="nav flex-column gap-1">
                  <li className="nav-item"><Link className="nav-link pt-0" href="/about/about-v1">About us</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="contact-us.html">Contact us</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/about/career">Contribute <span className="badge bg-primary ms-2">Open</span></Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/about/career-single">Contribution guide</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/contact-2">Become a partner</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="service-v1.html">Products</Link></li>
                </ul>
              </Col>
              <Col xs={6}>
                <h6 className="mb-3 mb-sm-4">Resources</h6>
                <ul className="nav flex-column gap-1">
                  <li className="nav-item"><Link className="nav-link pt-0" href="/portfolio/study1">Showcase</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/pricing-1">Documentation <span className="badge bg-success ms-2">New</span></Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/blog/blog-minimal">Blog</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/blog/blog-single">Changelog</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="">GitHub<IconifyIcon icon='bi:box-arrow-up-right' className="small ms-2" /></Link></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className="mt-xl-5 mb-0 opacity-1" />
        <div className="d-md-flex justify-content-between align-items-center text-center text-lg-start py-4">
          <div className="text-body small mb-3 mb-md-0"> Copyright ©2026 OpenMicroLock. Built as an <Link href="#" target="_blank" className="text-body text-primary-hover hover-underline-animation">open source project</Link>. </div>
          <ul className="nav d-flex justify-content-center gap-1 mb-0">
            <li className="nav-item"><Link className="nav-link small py-0" href="">Privacy policy</Link></li>
            <li className="nav-item"><Link className="nav-link small py-0 pe-0" href="">Terms &amp; conditions</Link></li>
          </ul>
        </div>
      </Container>
    </footer>

  )
}

export default Footer