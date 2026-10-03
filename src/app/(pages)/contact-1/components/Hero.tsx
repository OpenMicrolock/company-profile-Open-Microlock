import Image from 'next/image'
import React from 'react'
import decoration2Img from '@/assets/images/elements/grad-shape/blur-decoration-2.svg'
import { Container } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className="bg-dark position-relative overflow-hidden pt-xl-8" data-bs-theme="dark">
      <div className="position-absolute bottom-0 end-0 mb-n9">
        <Image src={decoration2Img} className="opacity-2 blur-9" alt="Grad shape" />
      </div>
      <Container className="position-relative pt-4 pt-sm-5">
        <span className="h2">👋</span>
        <h1 className="display-5 mt-3">Let's Connect</h1>
        <p className="mb-1">We’re here to help </p>
        <p>Support hours: <span className="text-primary fw-bold">24/7</span></p>
      </Container>
    </section>
  )
}

export default Hero