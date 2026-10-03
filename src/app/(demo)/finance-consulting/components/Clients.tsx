import React from 'react'
import { clientData } from '../data'
import Image from 'next/image'
import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar8 from '@/assets/images/avatar/08.jpg'
import avatar7 from '@/assets/images/avatar/07.jpg'
import { Col, Container, Row } from 'react-bootstrap'

const Clients = () => {
  return (
    <section className="pt-5 pt-xl-7">
      <Container>
        <Row className="g-4">
          <Col lg={5}>
            <h2 className="mb-4">Trusted by industry leaders</h2>
            <p className="mb-2">3000+ Users rated us <span className="text-warning fw-bold">4.85</span> out of 5.</p>
            <ul className="avatar-group mb-sm-0">
              <li className="avatar avatar-sm">
                <Image className="avatar-img rounded-circle" src={avatar1} alt="avatar" />
              </li>
              <li className="avatar avatar-sm">
                <Image className="avatar-img rounded-circle" src={avatar2} alt="avatar" />
              </li>
              <li className="avatar avatar-sm">
                <Image className="avatar-img rounded-circle" src={avatar3} alt="avatar" />
              </li>
              <li className="avatar avatar-sm">
                <Image className="avatar-img rounded-circle" src={avatar8} alt="avatar" />
              </li>
              <li className="avatar avatar-sm">
                <Image className="avatar-img rounded-circle" src={avatar7} alt="avatar" />
              </li>
            </ul>
          </Col>
          <Col lg={7}>
            <Row className="row-cols-2 row-cols-sm-auto g-3">
              {
                clientData.map((item, idx) => {
                  return (
                    <Col key={idx}>
                      <div className="bg-secondary bg-opacity-50 rounded-3 p-3">
                        <Image src={item.light} className="light-mode-item h-30px w-auto" alt="client logo" />
                        <Image src={item.dark} className="dark-mode-item h-30px w-auto" alt="client logo" />
                      </div>
                    </Col>
                  )
                })
              }
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Clients