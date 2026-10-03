import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className="bg-secondary pt-xl-8 pb-5 pb-md-7">
      <Container className="position-relative pt-4 pt-sm-5">
        <nav className="mb-2" aria-label="breadcrumb">
          <ol className="breadcrumb pt-0">
            <li className="breadcrumb-item"><Link href="/home">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Portfolio</li>
          </ol>
        </nav>
        <h1 className="display-5">Portfolio Modern Grid</h1>
      </Container>
    </section>
  )
}

export default Hero