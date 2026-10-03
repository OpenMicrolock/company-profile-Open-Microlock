import React from 'react'
import { teamData, TeamType } from '../data'
import Image from 'next/image'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const TeamCard = ({ image, name, role }: TeamType) => {
  return (
    <Card className="card-content-hover bg-transparent">
      <Image src={image} className="card-img" alt="team image" />
      <CardBody className="text-center px-0 pb-0">
        <h6 className="mb-1">{name}</h6>
        <p className="mb-0">{role}</p>
        <ul className="list-inline hover-content position-relative p-0 mb-0">
          <li className="list-inline-item"> <Link className="btn btn-icon w-auto lead text-facebook" href=""><IconifyIcon icon='bi-facebook' className=" lh-base" /></Link> </li>
          <li className="list-inline-item"> <Link className="btn btn-icon w-auto lead text-twitter-x" href=""><IconifyIcon icon='bi-twitter-x' className=" lh-base" /></Link> </li>
          <li className="list-inline-item"> <Link className="btn btn-icon w-auto lead text-danger" href=""><IconifyIcon icon='bi:instagram' className=" lh-base" /></Link> </li>
        </ul>
      </CardBody>
    </Card>
  )
}

const Team = () => {
  return (
    <section className="py-0">
      <Container>
        <h2 className="text-center mb-4 mb-lg-5">Our financial experts</h2>
        <Row className="g-4 g-lg-5">
          {teamData.map((item, idx) => (
            <Col sm={6} lg={3} key={idx}>
              <TeamCard {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Team