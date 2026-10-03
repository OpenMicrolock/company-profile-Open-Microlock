import React from 'react'
import contactImg from '@/assets/images/bg/contact.jpg'
import { Container } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className="position-relative py-xl-9" style={{ background: `url(${contactImg.src}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-overlay bg-dark opacity-2" />
      <Container className="position-relative z-index-2">
        <h1 className="display-6 text-white">Contact us</h1>
      </Container>
    </section>
  )
}

export default Hero