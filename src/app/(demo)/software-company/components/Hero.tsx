'use client'
import Image from 'next/image'
import React from 'react'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar10 from '@/assets/images/avatar/10.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'
import gradShape from '@/assets/images/elements/grad-shape/07.png'
import Typist from 'react-text-typist'
import { Col, Container } from 'react-bootstrap'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="position-relative pt-sm-8 pt-lg-9 pb-4">
      <div className="position-absolute top-0 end-0 z-index-2 d-none d-md-block rtl-flip">
        <Image src={gradShape} alt='gradShape' />
      </div>
      <Container className="pt-4">
        <Col md={9} className="pe-3">
          <p className="heading-color bg-secondary d-inline-block rounded px-3 py-2 mb-3"><span className="badge bg-dark me-2">New</span> Maximize productivity with next-generation software</p>
          <h1 className="display-6 fw-semibold mb-4 lh-base">Creating software solutions for your &nbsp;
            <span className="text-primary ityped-cursor-opacity mb-0 d-block d-xxl-inline-block">
              <Typist
              className="typed"
                sentences={['business', 'agency', 'startup']}
                typingSpeed={1500}
                deletingSpeed={700}
                showCursor={true}
                startDelay={100}
                cursorSmooth
                pauseTime={2500}
              />
            </span>
          </h1>
          <div className="d-flex gap-3 gap-sm-4 flex-wrap">
            <Link href="/portfolio/modern" className="btn btn-primary-grad">Explore our work</Link>
            <div className="d-flex gap-2 align-items-center">
              <ul className="avatar-group mb-0 align-items-center">
                <li className="avatar">
                  <Image className="avatar-img rounded-circle" src={avatar2} alt="avatar" />
                </li>
                <li className="avatar">
                  <Image className="avatar-img rounded-circle" src={avatar5} alt="avatar" />
                </li>
                <li className="avatar">
                  <Image className="avatar-img rounded-circle" src={avatar10} alt="avatar" />
                </li>
                <li className="avatar">
                  <Image className="avatar-img rounded-circle" src={avatar9} alt="avatar" />
                </li>
              </ul>
              <p className="heading-color mb-0">15K+ happy clients</p>
            </div>
          </div>
        </Col>
      </Container>
    </section>  
  )
}

export default Hero