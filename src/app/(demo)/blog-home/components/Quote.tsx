import Image from 'next/image'
import React from 'react'
import team1 from '@/assets/images/team/01.jpg'
import team2 from '@/assets/images/team/02.jpg'
import team4 from '@/assets/images/team/04.jpg'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration-2.svg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Quote = () => {
  return (
    <section className="position-relative z-index-2 py-0 mb-n8">
      <Container fluid className="position-relative">
        <div className="max-width-1550 bg-dark position-relative rounded-4 overflow-hidden py-6 py-xl-8">
          <div className="position-absolute top-100 start-50 translate-middle">
            <Image src={decorationImg} className="opacity-2 blur-9" alt="Grad shape" />
          </div>
          <Container className="position-relative" data-bs-theme="dark">
            <Row className="align-items-center">
              <Col lg={5} className="mb-5 mb-lg-0">
                <blockquote className="fs-6 fw-semibold text-white mb-sm-4">
                  “Our dedicated team works tirelessly to turn your vision into a digital reality, using innovative strategies and cutting-edge solutions.”
                </blockquote>
                <span className="text-white">Jacqueline Miller, CEO at Folio</span>
              </Col>
              <Col lg={6} className="ms-auto">
                <h5 className="mb-4 text-center text-md-start">Top Author</h5>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                  <Col>
                    <Card className="card-body bg-transparent text-center p-0">
                      <div className="avatar avatar-xl mx-auto flex-shrink-0 mb-3">
                        <Image className="avatar-img rounded-circle" src={team1} alt="avatar" />
                      </div>
                      <h6 className="mb-1"><Link href="">Emma Watson</Link></h6>
                      <small>36 Blogs</small>
                      <ul className="list-inline mb-0 mt-2">
                        <li className="list-inline-item"> <Link className="btn btn-icon w-auto lead text-facebook" href=""><IconifyIcon icon='bi:facebook' className="lh-base" /></Link> </li>
                        <li className="list-inline-item"> <Link className="btn btn-icon w-auto lead text-white" href=""><IconifyIcon icon='bi:twitter-x' className="lh-base" /></Link> </li>
                        <li className="list-inline-item"> <Link className="btn btn-icon w-auto lead" href=""><IconifyIcon icon='bi:instagram' className="text-instagram-gradient lh-base" /></Link> </li>
                      </ul>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="card-body bg-transparent text-center p-0">
                      <div className="avatar avatar-xl mx-auto flex-shrink-0 mb-3">
                        <Image className="avatar-img rounded-circle" src={team2} alt="avatar" />
                      </div>
                      <h6 className="mb-1"><Link href="">Allen Smith</Link></h6>
                      <small>25 Blogs</small>
                      <ul className="list-inline mb-0 mt-2">
                        <li className="list-inline-item"> <Link className="btn btn-icon w-auto lead text-facebook" href=""><IconifyIcon icon='bi:facebook' className="lh-base" /></Link> </li>
                        <li className="list-inline-item"> <Link className="btn btn-icon w-auto lead text-white" href=""><IconifyIcon icon='bi:twitter-x' className="lh-base" /></Link> </li>
                        <li className="list-inline-item"> <Link className="btn btn-icon w-auto lead" href=""><IconifyIcon icon='bi:instagram' className="text-instagram-gradient lh-base" /></Link> </li>
                      </ul>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="card-body bg-transparent text-center p-0">
                      <div className="avatar avatar-xl mx-auto flex-shrink-0 mb-3">
                        <Image className="avatar-img rounded-circle" src={team4} alt="avatar" />
                      </div>
                      <h6 className="mb-1"><Link href="">Louis Ferguson</Link></h6>
                      <small>15 Blogs</small>
                      <ul className="list-inline mb-0 mt-2">
                        <li className="list-inline-item"> <Link className="btn btn-icon w-auto lead text-facebook" href=""><IconifyIcon icon='bi:facebook' className="lh-base" /></Link> </li>
                        <li className="list-inline-item"> <Link className="btn btn-icon w-auto lead text-white" href=""><IconifyIcon icon='bi:twitter-x' className="lh-base" /></Link> </li>
                        <li className="list-inline-item"> <Link className="btn btn-icon w-auto lead" href=""><IconifyIcon icon='bi:instagram' className="text-instagram-gradient lh-base" /></Link> </li>
                      </ul>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </section>
  )
}

export default Quote