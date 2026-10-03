import React from 'react'
import { productData, ProductType } from '../data'
import Image from 'next/image'
import discountImg from '@/assets/images/elements/discount-label.svg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, CardBody, CardFooter, CardHeader, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const ProductCard = ({ description, image, name, price, old_price, popular }: ProductType) => {
  return (
    <Card className="card-img-scale text-center bg-secondary p-4 h-100 bg-opacity-40">
      {
        popular &&
        <div className="position-absolute top-0 start-0 mt-n3 ms-n3">
          <Image src={discountImg} className="position-relative" alt='discountImg' />
          <span className="small text-white position-absolute top-50 start-50 translate-middle">20% off</span>
        </div>
      }
      <CardHeader className="bg-transparent p-3 mt-n7">
        <Image src={image} className="img-scale" alt="watch image" />
        {
          old_price &&
          <span className="small text-white position-absolute top-50 start-50 translate-middle">20% off</span>
        }
      </CardHeader>
      <CardBody className="p-0 mt-3">
        <h6 className="mb-2"><Link href="#">{name}</Link></h6>
        <p className="mb-3">{description}</p>
        <span className="text-success h6">${price}</span>
        {
          old_price &&
          <small className="text-decoration-line-through">${old_price}</small>
        }
      </CardBody>
      <CardFooter className="bg-transparent p-0 pt-3">
        <Link href="#" className="btn btn-sm btn-dark mb-0">Buy now</Link>
      </CardFooter>
    </Card >
  )
}

const ProductsGrid = () => {
  return (
    <section className="pb-0 pb-xl-8">
      <Container>
        <div className="d-sm-flex justify-content-between text-center mb-7">
          <h2 className="mb-3 mb-sm-0">Our collections</h2>
          <Link href="#" className="link-primary-grad icon-link icon-link-hover mb-0">View all products <IconifyIcon icon='bi:arrow-right' /></Link>
        </div>
        <Row>
          {
            productData.map((item, idx) => (
              <Col md={6} xl={3} className="mb-7 mb-xl-0" key={idx}>
                <ProductCard {...item} />
              </Col>
            ))
          }
        </Row >
      </Container >
    </section >

  )
}

export default ProductsGrid