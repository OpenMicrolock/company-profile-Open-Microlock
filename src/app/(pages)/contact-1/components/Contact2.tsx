'use client'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Typist from 'react-text-typist'
import React from 'react'
import { Col, Container } from 'react-bootstrap'
import Link from 'next/link'

const Contact2 = () => {
  return (
    <section className="position-relative pt-0">
      <Container className="bg-secondary-grad rounded-4 p-4 p-md-6 p-xxl-8">
        <div className="inner-container-small">
          <h1 className="fw-bold mb-2 lh-base text-center"><IconifyIcon icon='bi:emoji-smile' className="me-2" />Say &nbsp;
            <span className="cd-headline clip big-clip is-full-width text-primary-grad mb-0">
              <Typist
              className="typed"
                sentences={['Hello', 'Hola', 'Ciao', 'Bonjour']}
                typingSpeed={1500}
                deletingSpeed={700}
                showCursor={true}
                startDelay={100}
                cursorSmooth
                pauseTime={2500}
              />
            </span>
          </h1>
          <p className="text-center">Have an idea, need advice, or just want to say hello? We’re all ears.</p>
          <form className="row form-border-transparent g-3 mt-4">
            <Col md={6}>
              <label className="form-label">Your name</label>
              <input type="text" className="form-control" />
            </Col>
            <Col md={6}>
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" id="floatingInput" />
            </Col>
            <Col md={6}>
              <label className="form-label">Mobile number</label>
              <input type="text" className="form-control" />
            </Col>
            <Col md={6}>
              <label className="form-label">Subject</label>
              <input type="text" className="form-control" />
            </Col>
            <Col xs={12}>
              <label className="form-label">Message</label>
              <textarea className="form-control" id="floatingTextarea2" style={{ height: 100 }} defaultValue={""} />
            </Col>
            <Col xs={12}>
              <div className="form-check">
                <input type="checkbox" className="form-check-input border" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">I agree that my data is <Link href="" className=" hover-underline-animation text-primary-hover">collected and stored</Link>.</label>
              </div>
            </Col>
            <Col xs={12} className="d-sm-flex align-items-center gap-3 mt-4">
              <button className="btn btn-primary mb-2 mb-md-0">Send a message</button>
              <ul className="list-inline mb-0 ms-auto">
                <li className="list-inline-item small heading-color">Connect with:</li>
                <li className="list-inline-item"> <Link href="#" className="heading-color text-primary-hover"><IconifyIcon width={16} height={16} icon='bi:facebook' /></Link> </li>
                <li className="list-inline-item"> <Link href="#" className="heading-color text-primary-hover"><IconifyIcon width={16} height={16} icon='bi:instagram' /></Link> </li>
                <li className="list-inline-item"> <Link href="#" className="heading-color text-primary-hover"><IconifyIcon width={16} height={16} icon='bi:twitter-x' /></Link> </li>
                <li className="list-inline-item"> <Link href="#" className="heading-color text-primary-hover"><IconifyIcon width={16} height={16} icon='bi:linkedin' /></Link> </li>
              </ul>
            </Col>
          </form>
        </div>
      </Container>
    </section>
  )
}

export default Contact2