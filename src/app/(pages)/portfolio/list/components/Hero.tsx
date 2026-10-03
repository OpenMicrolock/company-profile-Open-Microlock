import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className="pt-xl-8 pb-5 pb-md-7">
      <Container className="text-center position-relative pt-4 pt-sm-5">
        <nav className="d-flex justify-content-center mb-2" aria-label="breadcrumb">
          <ol className="breadcrumb pt-0 mb-0">
            <li className="breadcrumb-item"><Link href="/home">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Portfolio case study</li>
          </ol>
        </nav>
        <h1>Case studies</h1>
      </Container>
    </section>
  )
}

export default Hero