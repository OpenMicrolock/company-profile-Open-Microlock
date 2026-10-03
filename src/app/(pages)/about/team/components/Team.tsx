import React from 'react'
import { teamData } from '../data'
import Image from 'next/image'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Team = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="g-4 g-sm-5">
          {
            teamData.map((item, idx) => (
              <Col sm={6} md={4} lg={3} key={idx}>
                <Card className="card-img-scale card-content-hover shadow rounded-top-pill  overflow-hidden">
                  <div className="card-img-scale-wrapper">
                    <div className="hover-content h-100">
                      <ul className="list-group list-group-borderless position-absolute bottom-0 end-0 me-3 mb-3">
                        {
                          item.social.map((icon, idx) => (
                            <li key={idx} className="list-group-item pb-0"> <Link className={`btn btn-sm btn-round ${icon == 'bi-instagram' ? 'bg-instagram-gradient' : icon == 'bi-facebook' ? 'bg-facebook' : icon == 'bi-linkedin' ? 'bg-linkedin' : 'bg-twitter-x'}  `} href="#"><IconifyIcon icon={icon} /></Link> </li>
                          ))
                        }
                      </ul>
                    </div>
                    <Image src={item.image} className="card-img-top img-scale" alt="card image" />
                  </div>
                  <CardBody className="text-center px-0">
                    <h6 className="mb-0">{item.name}</h6>
                    <small>{item.role}</small>
                  </CardBody>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}

export default Team