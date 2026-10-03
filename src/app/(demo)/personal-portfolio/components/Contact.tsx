import Image from 'next/image'
import React from 'react'
import aboutImg from '@/assets/images/about/16.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Contact = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="g-4">
          <Col lg={6}  className="pe-lg-5">
            <Image src={aboutImg} className="rounded-4" alt="portfolio-img" />
          </Col>
          <Col lg={6}>
            <h2 className="mb-4">Say hi by filling out the form below</h2>
            <form className="row form-border-bottom g-3">
              <Col xs={12}>
                <div className="position-relative">
                  <input type="text" className="form-control" placeholder="What's Your good name?" />
                  <span className="focus-border" />
                  <span className="position-absolute top-50 end-0 translate-middle-y"><IconifyIcon icon='bi:emoji-smile' /></span>
                </div>
              </Col>
              <Col xs={12}>
                <div className="position-relative">
                  <input type="email" className="form-control" placeholder="Enter your email address" required />
                  <span className="focus-border" />
                  <span className="position-absolute top-50 end-0 translate-middle-y"><IconifyIcon icon='bi:envelope' /></span>
                </div>
              </Col>
              <Col xs={12}>
                <div className="position-relative">
                  <textarea className="form-control" id="floatingTextarea2" style={{ height: 100 }} placeholder="Describe about your project" defaultValue={""} />
                  <span className="focus-border" />
                  <span className="position-absolute top-0 end-0"><IconifyIcon icon='bi:chat-square-dots' /></span>
                </div>
              </Col>
              <Col xs={12} className="mt-4">
                <button className="btn btn-primary-grad mb-0">Send a message</button>
              </Col>
            </form>
            <div className="d-sm-flex gap-5 mt-5">
              <div className="d-flex gap-2 mb-4">
                <div className="heading-color lead"><IconifyIcon icon='bi:telephone' /></div>
                <div>
                  <p className="heading-color fw-semibold mb-0">Call me:</p>
                  <ul className="list-group list-group-borderless mb-0">
                    <li className="list-group-item pb-0"> <Link href="" className="text-primary-hover">+(251) 854-6308</Link></li>
                    <li className="list-group-item pb-0"> <Link href="" className="text-primary-hover">+(469) 537-2410</Link></li>
                  </ul>
                </div>
              </div>
              <div className="d-flex gap-2 mb-4">
                <div className="heading-color lead"><IconifyIcon icon='bi:envelope'  /></div>
                <div>
                  <p className="heading-color fw-semibold mb-0">E-mail:</p>
                  <ul className="list-group list-group-borderless mb-0">
                    <li className="list-group-item pb-0"> <Link href="" className="text-primary-hover">example@gmail.com</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact