import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { reviewData, ReviewType } from '../data'
import Image from 'next/image'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar10 from '@/assets/images/avatar/10.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const ReviewCard = ({avatar,date,name,testimonial,userName}: ReviewType) => {
  return (
    <Card className="border rounded-4 p-3 m-0">
      <CardHeader className="d-flex justify-content-between pb-0">
        <div className="d-flex align-items-center">
          <div className="avatar flex-shrink-0">
            <Image className="avatar-img rounded-circle" src={avatar} alt="avatar" />
          </div>
          <div className="ms-3">
            <p className="heading-color fw-semibold mb-0">{name}</p>
            <small>{userName}</small>
          </div>
        </div>
        <Link href="" className="heading-color fs-5"><IconifyIcon icon='bi:twitter-x' /></Link>
      </CardHeader>
      <CardBody>
        <blockquote>
          <p>{testimonial}</p>
        </blockquote>
        <span className="small text-body-secondary">{date}</span>
      </CardBody>
    </Card>
  )
}

const Review = () => {
  return (
    <section className="position-relative overflow-hidden py-0">
      <div className="bg-body blur-6 h-300px w-100 position-absolute bottom-0 start-0 z-index-2 mb-n6" />
      <Container className="position-relative mb-n5">
        <div className="text-center mb-4 mb-md-5">
          <h2 className="mb-4">Trusted by industry leaders</h2>
          <ul className="avatar-group align-items-center justify-content-center mb-2">
            <li className="avatar avatar-sm">
              <Image className="avatar-img rounded-circle" src={avatar2} alt="avatar" />
            </li>
            <li className="avatar avatar-sm">
              <Image className="avatar-img rounded-circle" src={avatar5} alt="avatar" />
            </li>
            <li className="avatar avatar-sm">
              <Image className="avatar-img rounded-circle" src={avatar10} alt="avatar" />
            </li>
            <li className="avatar avatar-sm">
              <Image className="avatar-img rounded-circle" src={avatar9} alt="avatar" />
            </li>
            <li className="avatar avatar-sm">
              <Image className="avatar-img rounded-circle" src={avatar6} alt="avatar" />
            </li>
          </ul>
          <p>Rated <span className="badge bg-primary">4.9/5.0</span> by over 100.000+ users</p>
        </div>
        <Row className="g-4 filter-container" data-isotope="{&quot;layoutMode&quot;: &quot;masonry&quot;}">
          {
            reviewData.map((item, idx) => (
              <Col md={6} lg={4} className="grid-item" key={idx}>
                <ReviewCard {...item}/>
              </Col>
            ))
          }
        </Row>
      </Container>
      <div className="position-absolute bottom-0 start-50 translate-middle-x z-index-9 mb-4 mb-sm-7">
        <Link className="btn btn-primary-grad icon-link icon-link-hover text-nowrap" href="#">View all reviews<IconifyIcon icon='bi:arrow-right' /> </Link>
      </div>bi-arrow-right
    </section>
  )
}

export default Review