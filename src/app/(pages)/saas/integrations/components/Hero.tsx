import Image from 'next/image'
import React from 'react'
import decoration2Img from '@/assets/images/elements/grad-shape/blur-decoration-2.svg'
import integrationImg from '@/assets/images/elements/integration.png'
import iconLogo from '@/assets/images/logo-icon.svg'
import { Container } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className="position-relative overflow-hidden pt-lg-8 pb-md-7">
      <div className="position-absolute end-0 top-0">
        <Image src={decoration2Img} className="opacity-1 blur-8 h-300px rotate-335" alt="Grad shape" />
      </div>
      <Container className="position-relative pt-4 pt-md-5">
        <div className="inner-container text-center">
          <h1 className="mb-4">Elevate Your Performance with Integrations</h1>
          <p>Effortlessly connect to top platforms for CRM, marketing, payments, and more. Enhance workflows, automate tasks, and drive growth with ease.</p>
        </div>
        <div className="position-relative h-200px h-sm-300px h-lg-400px" style={{ backgroundImage: `url(${integrationImg.src})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
          <div className="position-absolute top-50 start-50 translate-middle">
            <div className="text-center shadow-primary-lg bg-body rounded-circle flex-shrink-0 ripple-anim" style={{ height: '6rem', width: '6rem', lineHeight: '6rem' }}>
              <Image src={iconLogo} className="h-50px" alt="integration icon" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero