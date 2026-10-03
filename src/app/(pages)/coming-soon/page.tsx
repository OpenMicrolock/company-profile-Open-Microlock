import Image from 'next/image'
import React from 'react'
import logo from '@/assets/images/logo.svg'
import logoLight from '@/assets/images/logo-light.svg'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration.svg'
import decoration2Img from '@/assets/images/elements/grad-shape/blur-decoration-2.svg'
import comingSoonImg from '@/assets/images/elements/coming-soon.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const ComingSoonPage = () => {
  return (
    <>
      <header className="header-sticky bg-transparent">
        <nav className="navbar navbar-expand-xl">
          <Container className="justify-content-center">
            <Link className="navbar-brand" href="/home">
              <Image className="light-mode-item navbar-brand-item" src={logo} alt="logo" />
              <Image className="dark-mode-item navbar-brand-item" src={logoLight} alt="logo" />
            </Link>
          </Container>
        </nav>
      </header>
      <main className="d-flex flex-column justify-content-center" style={{ minHeight: 'calc(100vh - 160px)' }}>
        <section className="py-5 p-lg-0">
          <div className="position-absolute top-0 start-0 mt-n9 ms-n5">
            <Image src={decorationImg} className="blur-7 opacity-2" alt="Grad shape" />
          </div>
          <div className="position-absolute top-0 end-0 mt-n9">
            <Image src={decoration2Img} className="blur-9 opacity-2" alt="Grad shape" />
          </div>
          <Container className="position-relative">
            <Row className="g-4 d-flex justify-content-center align-items-center">
              <Col sm={8} md={6}>
                <Image src={comingSoonImg} alt="coming soon image" />
              </Col>
              <Col md={6} xl={5} className="ms-auto">
                <h1 className="fw-bold">Cooking Up Something <span className="text-primary-grad">Great</span></h1>
                <p className="mb-0">We are going to launch our website very soon, Stay tune.</p>
                <form className="mt-5">
                  <b>Notify me when the website is launched</b>
                  <div className="bg-body shadow-primary rounded-2 p-1 mt-2">
                    <div className="input-group">
                      <input className="form-control border-0 me-1" type="email" placeholder="Enter your email" />
                      <button type="button" className="btn btn-dark rounded-2 mb-0">Notify Me!</button>
                    </div>
                  </div>
                </form>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <footer>
        <Container>
          <div className="d-md-flex justify-content-between align-items-center text-center text-lg-start pb-3 pb-md-0">
            <div className="mb-3 mb-md-0"> Copyrights ©2024 Folio. Build by <Link href="#" className="text-body text-primary-hover">Themesdesginer</Link>. </div>
            <ul className="list-inline align-items-center mb-0">
              <li className="list-inline-item"> <Link className="btn btn-xs btn-icon bg-facebook" href="#"><IconifyIcon icon='bi:facebook' className=" lh-base" /></Link> </li>&nbsp;
              <li className="list-inline-item"> <Link className="btn btn-xs btn-icon bg-instagram-gradient" href="#"><IconifyIcon icon='bi:instagram' className=" lh-base" /></Link> </li>&nbsp;
              <li className="list-inline-item"> <Link className="btn btn-xs btn-icon bg-twitter-x" href="#"><IconifyIcon icon='bi:twitter-x' className=" lh-base" /></Link> </li>&nbsp;
              <li className="list-inline-item"> <Link className="btn btn-xs btn-icon bg-linkedin" href="#"><IconifyIcon icon='bi:linkedin' className=" lh-base" /></Link> </li>&nbsp;
            </ul>
          </div>
        </Container>
      </footer>
    </>

  )
}

export default ComingSoonPage