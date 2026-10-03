import React from 'react'
import { featuresData, FeaturesType } from '../data'
import { Card, Col, Container, Row } from 'react-bootstrap'

const FeaturesCard = ({ description, icon, title,variant }: FeaturesType) => {
  return (
    <Card className="card-body bg-transparent text-center p-0">
      <div className={`icon-xl ${variant} bg-opacity-25 rounded-2 m-auto d-flex justify-content-center align-items-center mb-4`}>
        {icon}
      </div>
      <h6 className="mb-3">{title}</h6>
      <p className="mb-0">{description}</p>
    </Card>
  )
}

const Features = () => {
  return (
    <section className="pt-4 pt-sm-6">
      <Container>
        <Row className="g-4 g-lg-5">
          {
            featuresData.map((item, idx) => (
              <Col md={4}  className="mb-4 mb-sm-0" key={idx}>
                <FeaturesCard {...item} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}

export default Features