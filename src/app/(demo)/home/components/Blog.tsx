import Image from 'next/image'
import React from 'react'
import blog1 from '@/assets/images/blog/01.jpg'
import blog2 from '@/assets/images/blog/02.jpg'
import { CardBody, CardFooter, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Blog = () => {
  return (
    <section>
      <Container>
        <div className="inner-container-small text-center mb-5">
          <h2 className="mb-0">Insights on our blog</h2>
        </div>
        <Row className="g-4 g-lg-5">
          <Col md={4}>
            <article className="card card-hover-shadow card-hover-transition border border-opacity-25 rounded-4 overflow-hidden h-100 p-0">
              <div className="badge text-bg-white position-absolute top-0 start-0 m-4">Lifestyle</div>
              <Image src={blog1} className="card-img-top" alt="Blog-img" />
              <CardBody className="pb-2">
                <h6 className="card-title mb-2"><Link href="#">Techniques to captivate your audience</Link></h6>
              </CardBody>
              <CardFooter className="pt-0">
                <Link className="icon-link icon-link-hover stretched-link" href="/blog/blog-single">Read more<i className="bi bi-arrow-right" /> </Link>
              </CardFooter>
            </article>
          </Col>
          <Col md={4}>
            <article className="card card-hover-shadow card-hover-transition bg-primary-grad rounded-4 overflow-hidden h-100 p-4">
              <CardBody className=" p-0 pb-2">
                <div className="badge text-bg-dark mb-3">Research</div>
                <h6 className="card-title text-white mb-5">Building a strong identity for your business</h6>
              </CardBody>
              <CardFooter className="bg-transparent p-0">
                <Link className="link-white icon-link icon-link-hover stretched-link" href="/blog/blog-single">Read more<i className="bi bi-arrow-right" /> </Link>
              </CardFooter>
            </article>
          </Col>
          <Col md={4}>
            <article className="card card-hover-shadow card-hover-transition border border-opacity-25 rounded-4 overflow-hidden h-100 p-0">
              <div className="badge text-bg-white position-absolute top-0 start-0 m-4">Lifestyle</div>
              <Image src={blog2} className="card-img-top" alt="Blog-img" />
              <CardBody className="pb-2">
                <h6 className="card-title mb-2"><Link href="#">Tips for improving your website's visibility</Link></h6>
              </CardBody>
              <CardFooter className="pt-0">
                <Link className="icon-link icon-link-hover stretched-link" href="/blog/blog-single">Read more<i className="bi bi-arrow-right" /> </Link>
              </CardFooter>
            </article>
          </Col>
        </Row>
        <div className="text-center mt-5">
          <p>Want more insights?</p>
          <Link href="/blog/blog-minimal" className="btn btn-white-shadow">Explore all resources</Link>
        </div>
      </Container>
    </section>
  )
}

export default Blog