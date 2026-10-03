import Image from 'next/image'
import React from 'react'
import decoration from '@/assets/images/elements/grad-shape/blur-decoration-2.svg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container } from 'react-bootstrap'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-secondary position-relative overflow-hidden pt-xl-8">
      <div className="position-absolute start-0 top-0">
        <Image src={decoration} className="opacity-3 blur-9 h-300px rotate-335" alt="Grad shape" />
      </div>
      <div className="position-absolute end-0 top-0">
        <Image src={decoration} className="opacity-2 blur-8 h-300px rotate-335" alt="Grad shape" />
      </div>
      <Container className="inner-container position-relative pt-4 pt-sm-5">
        <nav className="mb-2 d-flex justify-content-center" aria-label="breadcrumb">
          <ol className="breadcrumb pt-0">
            <li className="breadcrumb-item"><Link href="/home">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Blog Minimal</li>
          </ol>
        </nav>
        <h1 className="fw-bold text-center mb-2">Hey,<span className="hand-wave-animate">🖐️</span> we’re <span className="text-primary-grad">Folio</span></h1>
        <h2 className="fs-1 text-center">Explore our stories, thoughts, and ideas.</h2>
        <Col md={8} className="mx-auto bg-body shadow-primary rounded-pill position-relative z-index-2 p-1 mt-5">
          <form className="input-group align-items-center">
            <input className="form-control bg-transparent border-0 me-1" type="email" placeholder="Search....." />
            <button type="button" className="btn btn-dark btn-round rounded-circle lh-1 mb-0 me-2"><IconifyIcon icon='bi:search'  /></button>
          </form>
        </Col>
      </Container>
    </section>
  )
}

export default Hero