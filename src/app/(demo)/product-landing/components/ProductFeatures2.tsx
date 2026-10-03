import Image from 'next/image'
import React from 'react'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration-2.svg'
import featureImg from '@/assets/images/product/feature-bg.png'
import { productFeatures2Data } from '../data'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'

const ProductFeatures2 = () => {
  return (
    <section className="bg-dark overflow-hidden position-relative" data-bs-theme="dark">
      <Col md={8} lg={7} xl={12} xxl={9} className="position-absolute bottom-0 end-0 me-xl-n9 d-none d-md-block">
        <Image src={featureImg} className="ps-8 position-relative z-index-2" alt='featureImg' />
      </Col>
      <div className="position-absolute bottom-50 end-0">
        <Image src={decorationImg} className="opacity-2 blur-9" alt="Grad shape" />
      </div>
      <Container>
        <Row>
          <Col xl={6}>
            <h2 className="mb-4 mb-md-6">Advanced functionality for every moment</h2>
            <Row className=" g-4 g-lg-5">
              {
                productFeatures2Data.map((item, idx) => (
                  <Col md={6} key={idx}>
                    <span className={`${item.variant} fs-3`}><IconifyIcon icon={item.icon} /></span>
                    <h6 className="my-3">{item.title}</h6>
                    <p className="mb-0">{item.description}</p>
                  </Col>
                ))
              }
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ProductFeatures2