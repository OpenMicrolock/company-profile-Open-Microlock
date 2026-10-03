import Image from 'next/image'
import React from 'react'
import gradImg from '@/assets/images/elements/grad-shape/11.png'
import decoration from '@/assets/images/elements/grad-shape/blur-decoration.svg'
import about8 from '@/assets/images/about/08.jpg'
import about9 from '@/assets/images/about/09.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const About = () => {
  return (
    <section className="bg-secondary pt-0">
      <Container>
        <Row>
          <Col xl={10} className="mx-auto">
            <Row className=" g-4 g-lg-6 mb-6 mb-md-8">
              <Col md={7} className="position-relative">
                <div className="position-absolute bottom-0 start-50 translate-middle-x ms-n5">
                  <Image src={gradImg} className="blur-2" alt="Decoration shape" />
                </div>
                <div className="position-absolute top-0 start-50 translate-middle-x ms-7">
                  <Image src={decoration} className="opacity-3 blur-8" alt="Grad shape" />
                </div>
                <Row className=" position-relative">
                  <Col sm={6}>
                    <Image src={about8} className="rounded-4" alt='about' />
                  </Col>
                  <Col sm={6} className="mt-5 mt-sm-8">
                    <Image src={about9} className="rounded-4" alt='about' />
                  </Col>
                </Row>
              </Col>
              <Col md={5}>
                <h2 className="mb-3">Crafting stunning visuals</h2>
                <p>We specialize in elevating brands through distinctive solutions that captivate and inspire.</p>
                <p>Our creative team combines innovative design with <b>strategic insights to deliver visuals</b> that make a lasting impact. From concept to execution, we ensure your brand stands out in a crowded marketplace.</p>
                <p>We focus on creating high-impact visuals that leave a lasting impression.</p>
                <Link className="btn btn-primary icon-link icon-link-hover mt-3" href="/portfolio/portfolio-grid">Explore our work<IconifyIcon icon='bi:arrow-right' /> </Link>
              </Col>
            </Row>
            <Row className="g-4 g-lg-5">
              <Col md={4}>
                <h6 className="mb-2"><IconifyIcon icon='bi:lightning-charge-fill' className="text-success me-2" />Our mission</h6>
                <p>We empower brands with visually compelling solutions that drive engagement and leave a lasting impact.</p>
              </Col>
              <Col md={4}>
                <h6 className="mb-2"><IconifyIcon icon='bi:rocket-takeoff-fill' className="text-pink me-2" />Our vision</h6>
                <p>Folio is to be recognized as a leading force in the world of visual communication.</p>
              </Col>
              <Col md={4}>
                <h6 className="mb-2"><IconifyIcon icon='bi:bullseye' className=" text-warning me-2" />Our goal</h6>
                <p>Our aim is to not only meet our clients' objectives but to surpass them, earning their trust and loyalty along the way.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About