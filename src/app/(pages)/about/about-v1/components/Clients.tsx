import React from 'react'
import icon2 from '@/assets/images/client/icons/02.svg'
import icon8 from '@/assets/images/client/icons/08.svg'
import icon9 from '@/assets/images/client/icons/09.svg'
import icon4 from '@/assets/images/client/icons/04.svg'
import icon5 from '@/assets/images/client/icons/05.svg'
import icon3 from '@/assets/images/client/icons/03.svg'
import icon12 from '@/assets/images/client/icons/12.svg'
import icon10 from '@/assets/images/client/icons/10.svg'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Clients = () => {

  const icons = [icon8, icon4, icon12, icon9, icon5, icon3, icon2, icon10]

  return (
    <section>
      <Container>
        <Row className="g-4 align-items-center">
          <Col md={3}>
            <h6 className="text-center text-md-start mb-0">Join the 1,000+ companies using Folio</h6>
          </Col>
          <Col md={9} xxl={7} className="ms-auto">
            <ul className="list-inline d-flex justify-content-center justify-content-md-end flex-wrap gap-3 gap-lg-5">
              {
                icons.map((icon, idx) => (
                  <li className="list-inline-item me-0" key={idx}>
                    <Link href="" className="btn-transition d-flex">
                      <Image src={icon} className="h-40px w-auto" alt="icon" />
                    </Link>
                  </li>
                ))
              }
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Clients