import Image from 'next/image'
import React from 'react'
import blog3 from '@/assets/images/blog/4by3/03.jpg'
import blog4 from '@/assets/images/blog/4by3/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-secondary position-relative pt-xl-8 pb-3">
      <span>
        <svg className="position-absolute bottom-0 start-0" viewBox="0 0 1920 193.5" xmlSpace="preserve">
          <path className="fill-body" d="M556,116.1c-184.7-78.7-447.6-32.8-556,0v77.4h1920V0c-56.4,35.6-132.2,69.4-285.5,38 C1481.2,6.6,1333-21.5,1125.7,55.4C1012.7,108.5,740.7,194.8,556,116.1z" />
        </svg>
      </span>
      <Container className="position-relative pt-4 pt-sm-5">
        <Row className="mb-5 mb-md-7">
          <Col lg={6} xl={5}>
            <h1 className="fw-bold display-6 mb-3 mb-sm-4 mb-lg-0">The Creative Insight <span className="text-primary-grad">Blogs</span></h1>
          </Col>
          <Col lg={5} className="ms-auto">
            <p className="mb-0">Dive into expert insights, innovative ideas, and inspiring stories to elevate your brand. Explore the forefront of design and marketing with The Creative Insight Blog.</p>
            <div className="bg-body rounded-pill position-relative z-index-2 p-1 mt-4">
              <form className="input-group align-items-center">
                <input className="form-control bg-transparent border-0 me-1" type="email" placeholder="Search....." />
                <button type="button" className="btn btn-dark btn-round rounded-circle lh-1 mb-0 me-2"><IconifyIcon icon='bi:search' /></button>
              </form>
            </div>
          </Col>
        </Row>
        <Row className="g-4 mb-n8">
          <Col lg={6}>
            <article className="card card-img-scale overflow-hidden rounded-4">
              <Image src={blog3} className="img-scale" alt="blog-img" />
              <div className="bg-overlay bg-dark opacity-3" />
              <div className="card-img-overlay d-flex flex-column align-items-start p-sm-5">
                <div className="badge text-bg-dark mb-3">Lifestyle</div>
                <div className="card-text mt-auto">
                  <h5 className="mb-3"><Link href="/blog/blog-single" className="text-white">Building a strong identity for your business</Link></h5>
                  <ul className="nav nav-divider align-items-center">
                    <li className="nav-item">
                      <div className="nav-link">
                        <div className="d-flex align-items-center text-white position-relative">
                          <div className="avatar avatar-sm">
                            <Image className="avatar-img rounded-circle" src={avatar5} alt="avatar" />
                          </div>
                          <span className="ms-3">by <Link href="">Louis</Link></span>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item text-white d-none d-sm-block">June 28, 2024</li>
                    <li className="nav-item text-white d-none d-xl-block">5 min read</li>
                  </ul>
                </div>
              </div>
            </article>
          </Col>
          <Col lg={6}>
            <article className="card card-img-scale overflow-hidden rounded-4">
              <Image src={blog4} className="img-scale" alt="blog-img" />
              <div className="bg-overlay bg-dark opacity-3" />
              <div className="card-img-overlay d-flex flex-column align-items-start p-sm-5">
                <div className="badge text-bg-dark mb-3">Research</div>
                <div className="card-text mt-auto">
                  <h5 className="mb-3"><Link href="/blog/blog-single" className="text-white">Tips for improving your website's visibility</Link></h5>
                  <ul className="nav nav-divider align-items-center">
                    <li className="nav-item">
                      <div className="nav-link">
                        <div className="d-flex align-items-center text-white position-relative">
                          <div className="avatar avatar-sm">
                            <Image className="avatar-img rounded-circle" src={avatar9} alt="avatar" />
                          </div>
                          <span className="ms-3">by <Link href="">Amanda</Link></span>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item text-white d-none d-sm-block">July 15, 2024</li>
                    <li className="nav-item text-white d-none d-xl-block">5 min read</li>
                  </ul>
                </div>
              </div>
            </article>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero