import Image from 'next/image'
import React from 'react'
import gradShapeImg from '@/assets/images/elements/grad-shape/05.png'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration.svg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import bgImg from '@/assets/images/bg/03.jpg'
import { Container } from 'react-bootstrap'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="position-relative pt-sm-8 pt-lg-9 pb-0 overflow-hidden">
      <div className="position-absolute top-0 end-0 z-index-2 mt-7 me-n9 d-none d-md-block">
        <Image src={gradShapeImg} className="rotate-180" alt='gradShapeImg' />
      </div>
      <div className="position-absolute top-0 start-0 ms-n4 mt-7">
        <Image src={decorationImg} className="blur-7 opacity-1" alt="Grad shape" />
      </div>
      <Container className="position-relative z-index-2 pt-4 pb-5 pb-lg-8">
        <nav className="mb-2" aria-label="breadcrumb">
          <ol className="breadcrumb pt-0">
            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">About us</li>
          </ol>
        </nav>
        <h1>Building a Better</h1>
        <h6 className="display-1"><span className="text-primary">Future</span> Together</h6>
        <div className="d-lg-flex justify-content-end align-items-start gap-3 mt-4 mt-sm-5">
          <p className="inner-container-small border-purple border-2 border-start mx-0 ps-2">With a rich history of innovation and creativity, our team is dedicated to transforming ideas into visual masterpieces. Join us on our journey as we continue to push the boundaries of design and deliver excellence in every project we undertake.</p>
          <Link className="btn btn-light icon-link icon-link-hover mt-2" href="team.html">Meet our team<IconifyIcon icon='bi:arrow-right'  /> </Link>
        </div>
      </Container>
      <div className="bg-secondary-grad position-relative pb-5 pb-lg-8 px-2 px-md-5">
        <div className="bg-body blur-5 h-300px w-100 position-absolute top-0 start-0 mt-n5" />
        <div className="h-300px h-md-500px h-xl-700px z-index-2 position-relative rounded-4" style={{ background: `url(${bgImg.src}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'top' }}> </div>
      </div>
    </section>
  )
}

export default Hero