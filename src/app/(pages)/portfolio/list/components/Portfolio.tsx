import React from 'react'
import { portfolioData } from '../data'
import Image from 'next/image'
import IconifyIcon from '@/components/wrappers/IconifyIcon'

import portfolio4 from "@/assets/images/portfolio/list/04.jpg"
import portfolio2 from "@/assets/images/portfolio/list/02.jpg"
import portfolio3 from "@/assets/images/portfolio/list/03.jpg"
import portfolio1 from "@/assets/images/portfolio/list/01.jpg"
import logoDark1 from "@/assets/images/client/logo-dark/01.svg"
import logoDark3 from "@/assets/images/client/logo-dark/03.svg"
import logoDark8 from "@/assets/images/client/logo-dark/08.svg"
import logoDark5 from "@/assets/images/client/logo-dark/05.svg"
import logoLight1 from "@/assets/images/client/logo-light/01.svg"
import logoLight3 from "@/assets/images/client/logo-light/03.svg"
import logoLight8 from "@/assets/images/client/logo-light/08.svg"
import logoLight5 from "@/assets/images/client/logo-light/05.svg"
import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <section className="pt-0">
      <Container>
        <Card className="card-img-scale bg-transparent p-0 mb-4 mb-lg-0">
          <div className="position-absolute top-50 start-50 translate-middle border opacity-4 h-100 d-none d-lg-block" />
          <span className="position-absolute top-50 start-50 translate-middle rounded-circle bg-primary p-1 d-none d-lg-block">
            <span className="d-block rounded-circle bg-body p-1"> </span>
          </span>
          <Row className="align-items-center g-0">
            <Col lg={6}  className="p-lg-5">
              <div className="card-img-scale-wrapper rounded-4">
                <Link href="/portfolio/study1"><Image height={411} src={portfolio4} className="rounded-4 img-scale" alt="portfolio image" /></Link>
              </div>
            </Col>
            <Col lg={6}>
              <CardBody className="px-2 p-lg-5">
                <div className="mb-3 mb-lg-4">
                  <Image src={logoDark1} className="light-mode-item h-30px w-auto" alt="client logo" />
                  <Image src={logoLight1} className="dark-mode-item h-30px w-auto" alt="client logo" />
                </div>
                <h5 className="mb-3">Mobile app development</h5>
                <p>The app received positive feedback for its functionality and user experience, helping the client reach a wider audience.</p>
                <ul className="nav nav-divider align-items-center mb-3 mb-lg-4">
                  <li className="nav-item heading-color">2024</li>
                  <li className="nav-item heading-color">Branding</li>
                  <li className="nav-item heading-color">Packaging</li>
                  <li className="nav-item heading-color">UI/UX design</li>
                </ul>
                <Link href="/portfolio/study1" className="link-primary-grad icon-link icon-link-hover">Read more <IconifyIcon icon='bi:arrow-right' /></Link>
              </CardBody>
            </Col>
          </Row>
        </Card>
        <Card className="card-img-scale bg-transparent p-0 mb-4 mb-lg-0">
          <div className="position-absolute top-50 start-50 translate-middle border opacity-4 h-100 d-none d-lg-block" />
          <span className="position-absolute top-50 start-50 translate-middle rounded-circle bg-primary p-1 d-none d-lg-block">
            <span className="d-block rounded-circle bg-body p-1"> </span>
          </span>
          <Row className="align-items-center g-0">
            <Col lg={6} className="order-2">
              <CardBody className="px-2 p-lg-5">
                <div className="mb-3 mb-lg-4">
                  <Image src={logoDark3} className="light-mode-item h-30px w-auto" alt="client logo" />
                  <Image src={logoLight3} className="dark-mode-item h-30px w-auto" alt="client logo" />
                </div>
                <h5 className="mb-3">Brand identity development</h5>
                <p>The most powerful software &amp; app landing page for any kind of app and software marketing business.</p>
                <ul className="nav nav-divider align-items-center mb-3 mb-lg-4">
                  <li className="nav-item heading-color">2023</li>
                  <li className="nav-item heading-color">Graphics</li>
                  <li className="nav-item heading-color">UI/UX design</li>
                </ul>
                <Link href="/portfolio/study2" className="link-primary-grad icon-link icon-link-hover">Read more <IconifyIcon icon='bi:arrow-right' /></Link>
              </CardBody>
            </Col>
            <Col lg={6} className="order-1 order-lg-2 p-lg-5">
              <div className="card-img-scale-wrapper rounded-4">
                <Link href="/portfolio/study2"><Image src={portfolio2} className="rounded-4 img-scale" alt="portfolio image" /></Link>
              </div>
            </Col>
          </Row>
        </Card>
        <Card className="card-img-scale bg-transparent p-0 mb-4 mb-lg-0">
          <div className="position-absolute top-50 start-50 translate-middle border opacity-4 h-100 d-none d-lg-block" />
          <span className="position-absolute top-50 start-50 translate-middle rounded-circle bg-primary p-1 d-none d-lg-block">
            <span className="d-block rounded-circle bg-body p-1"> </span>
          </span>
          <Row className="align-items-center g-0">
            <Col lg={6}  className="p-lg-5">
              <div className="card-img-scale-wrapper rounded-4">
                <Link href="/portfolio/study1"><Image src={portfolio3} className="rounded-4 img-scale" alt="portfolio image" /></Link>
              </div>
            </Col>
            <Col lg={6}>
              <CardBody className="px-2 p-lg-5">
                <div className="mb-3 mb-lg-4">
                  <Image src={logoDark8} className="light-mode-item h-30px w-auto" alt="client logo" />
                  <Image src={logoLight8} className="dark-mode-item h-30px w-auto" alt="client logo" />
                </div>
                <h5 className="mb-3">Transforming ideas into reality</h5>
                <p>The website significantly improved the client's online sales and customer engagement.</p>
                <ul className="nav nav-divider align-items-center mb-3 mb-lg-4">
                  <li className="nav-item heading-color">2021</li>
                  <li className="nav-item heading-color"> Web Design</li>
                  <li className="nav-item heading-color">Branding</li>
                  <li className="nav-item heading-color">UI/UX design</li>
                </ul>
                <Link href="/portfolio/study1" className="link-primary-grad icon-link icon-link-hover">Read more <IconifyIcon icon='bi:arrow-right' /></Link>
              </CardBody>
            </Col>
          </Row>
        </Card>
        <Card className="card-img-scale bg-transparent p-0 mb-4 mb-lg-0">
          <div className="position-absolute top-50 start-50 translate-middle border opacity-4 h-100 d-none d-lg-block" />
          <span className="position-absolute top-50 start-50 translate-middle rounded-circle bg-primary p-1 d-none d-lg-block">
            <span className="d-block rounded-circle bg-body p-1"> </span>
          </span>
          <Row className="align-items-center g-0">
            <Col lg={6} className="order-2">
              <CardBody className="px-2 p-lg-5">
                <div className="mb-3 mb-lg-4">
                  <Image src={logoDark5} className="light-mode-item h-30px w-auto" alt="client logo" />
                  <Image src={logoLight5} className="dark-mode-item h-30px w-auto" alt="client logo" />
                </div>
                <h5 className="mb-3">Digital marketing overhaul</h5>
                <p> Designed and developed a responsive e-commerce platform for folio agency retail.</p>
                <ul className="nav nav-divider align-items-center mb-3 mb-lg-4">
                  <li className="nav-item heading-color">2020</li>
                  <li className="nav-item heading-color">Marketing</li>
                  <li className="nav-item heading-color">SEO</li>
                  <li className="nav-item heading-color">Social media</li>
                </ul>
                <Link href="/portfolio/study2" className="link-primary-grad icon-link icon-link-hover">Read more <IconifyIcon icon='bi:arrow-right' /></Link>
              </CardBody>
            </Col>
            <Col lg={6} className="order-1 order-lg-2 p-lg-5">
              <div className="card-img-scale-wrapper rounded-4">
                <Link href="/portfolio/study2"><Image src={portfolio1} className="rounded-4 img-scale" alt="portfolio image" /></Link>
              </div>
            </Col>
          </Row>
        </Card>
        <div className="d-grid justify-content-center mt-6">
          <Button variant='secondary' role="button" className="mb-0"> Load more work </Button>
        </div>
      </Container>
    </section >
  )
}

export default Portfolio