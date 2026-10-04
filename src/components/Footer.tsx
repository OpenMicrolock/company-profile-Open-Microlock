import Image from 'next/image'
import React from 'react'
import googleImg from '@/assets/images/elements/google-play.svg'
import appImg from '@/assets/images/elements/app-store.svg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import logoLight from '@/assets/images/logo-light.svg'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-dark position-relative pt-6 pt-lg-8" data-bs-theme="dark">
      <Container className="position-relative">
        <Row className="g-4">
          <Col md={6} xl={4}>
            <Link href="/">
              <Image className="h-40px w-auto" src={logoLight} alt="logo" />
            </Link>
            <p className="my-3 my-xl-4">A Bootstrap theme that's both stylish and functional, perfect for any type of technology or corporate website.</p>
          </Col>
          <Col xl={7} className="ms-auto">
            <Row className="g-4">
              <Col xs={6} md={3}>
                <h6 className="mb-3 mb-xl-4">Navigation</h6>
                <ul className="nav flex-column gap-1">
                  <li className="nav-item"><Link className="nav-link pt-0" href="/about">About</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/community">Community</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/documentation">Documentation</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/contact">Contact</Link></li>
                </ul>
              </Col>
              <Col xs={6} md={3}>
                <h6 className="mb-3 mb-xl-4">Product</h6>
                <ul className="nav flex-column gap-1">
                  <li className="nav-item"><Link className="nav-link pt-0" href="#product">Hardware</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="#product">Firmware</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="#product">DARMI App</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="#product">Integrations</Link></li>
                </ul>
              </Col>
              <Col sm={6} md={6}>
                <h6 className="mb-3 mb-xl-4">Download our app</h6>
                <p className="mb-3">Get instant access to exclusive features for FREE!</p>
                <Row className="g-2 mb-4 mb-sm-5">
                  <Col xs={5} sm={6} md={5} lg={4} xl={5}>
                    <Link href="#"> <Image width={140} height={44} src={googleImg} alt='googleImg' /> </Link>
                  </Col>
                  <Col xs={5} sm={6} md={5} lg={4} xl={5}>
                    <Link href="#"> <Image src={appImg} width={140} height={44} alt="app-store" /> </Link>
                  </Col>
                </Row>
                <span className="heading-color fw-semibold">Follow on:</span>
                <ul className="list-inline align-items-center mb-0 mt-3">
                  <li className="list-inline-item"> <Link className="btn btn-xs btn-icon bg-facebook" href="#"><IconifyIcon icon='bi:facebook' className=" lh-base" /></Link> </li>&nbsp;
                  <li className="list-inline-item"> <Link className="btn btn-xs btn-icon bg-instagram" href="#"><IconifyIcon icon='bi:instagram' className=" lh-base" /></Link> </li>&nbsp;
                  <li className="list-inline-item"> <Link className="btn btn-xs btn-icon bg-twitter-x" href="#"><IconifyIcon icon='bi:twitter-x' className=" lh-base" /></Link> </li>&nbsp;
                  <li className="list-inline-item"> <Link className="btn btn-xs btn-icon bg-linkedin" href="#"><IconifyIcon icon='bi:linkedin' className=" lh-base" /></Link> </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className="mt-xl-5 mb-0 opacity-1" />
        <div className="d-md-flex justify-content-between align-items-center text-center text-lg-start py-4">
          <div className="text-body small mb-3 mb-md-0"> Copyrights ©2024 Folio. Build by <Link href="#" target="_blank" className="text-body text-primary-hover hover-underline-animation">Themesdesginer</Link>. </div>
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