import Image from 'next/image'
import React from 'react'
import rocketImg from '@/assets/images/elements/rocket-03.png'
import decoration2Img from '@/assets/images/elements/grad-shape/blur-decoration-2.svg'
import decoration1Img from '@/assets/images/elements/grad-shape/blur-decoration.svg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { teamData } from '../data'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Team = () => {
  return (
    <section className="bg-secondary position-relative overflow-hidden py-0">
      <span className="position-absolute start-0 bottom-0 mb-n1">
        <svg className="fill-body" width={1950} height={237} viewBox="0 0 1950 237" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 236.442H1949.5V72.4424C1232.3 -58.7576 351 17.7757 0 72.4424V236.442Z" />
        </svg>
      </span>
      <Container fluid className="position-relative">
        <div className="position-absolute end-0 bottom-0 me-6 z-index-9 d-none d-lg-block">
          <Image src={rocketImg} height={200} className="h-200px" alt="rocket image" />
        </div>
        <div className="max-width-1550 bg-dark position-relative rounded-4 overflow-hidden py-5 py-sm-6 py-lg-8" data-bs-theme="dark">
          <div className="position-absolute top-0 start-50 translate-middle">
            <Image src={decoration2Img} className="opacity-2 blur-9" alt="Grad shape" />
          </div>
          <div className="position-absolute bottom-0 start-0 mb-n8 ms-n5">
            <Image src={decoration1Img} className="blur-7 opacity-2" alt="Grad shape" />
          </div>
          <Container className="position-relative">
            <h2 className="text-center mb-4 mb-md-6">Meet our creative team</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4 justify-content-center">
              {
                teamData.map((item, idx) => (
                  <Col key={idx}>
                    <Card className="card-body bg-transparent text-center p-0">
                      <div className="avatar avatar-xxl mx-auto flex-shrink-0 mb-3">
                        <Image className="avatar-img rounded-circle" src={item.image} alt="avatar" />
                      </div>
                      <h6 className="mb-1"><Link href="#">{item.name}</Link></h6>
                      <small>{item.role}</small>
                      <ul className="list-inline mb-0 mt-2">
                        {
                          item.icon.map((icon, idx) => (
                            <li key={idx} className="list-inline-item"> <Link className={`btn btn-icon w-auto lead ${icon == 'bi-facebook' ? 'text-facebook' : icon == 'bi-twitter-x' ? 'text-white' : 'text-danger'}`} href="#"><IconifyIcon icon={icon} className=" lh-base" /></Link> </li>
                          ))
                        }
                      </ul>
                    </Card>
                  </Col>
                ))
              }
            </Row>
            <div className="text-center d-inline-flex flex-column align-items-center gap-2 w-100 mt-5">
              <Button variant='primary-grad'>Connect with our team</Button>
              <Link className="link-white icon-link icon-link-hover mb-0" href="/about/career">Explore career options<IconifyIcon icon='bi:arrow-right' /> </Link>
            </div>
          </Container>
        </div>
      </Container>
    </section>
  )
}

export default Team