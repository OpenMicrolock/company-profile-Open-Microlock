import React from 'react'
import career1 from '@/assets/images/career/01.jpg'
import career2 from '@/assets/images/career/02.jpg'
import career3 from '@/assets/images/career/03.jpg'
import career5 from '@/assets/images/career/05.jpg'
import career4 from '@/assets/images/career/04.jpg'
import career6 from '@/assets/images/career/06.jpg'
import Image from 'next/image'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import GlightBox from '@/components/GlightBox'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Gallery = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="row-cols-2 row-cols-md-4 g-lg-5 align-items-center">
          <Col>
            <Card className="card-content-hover overflow-hidden">
              <Image src={career1} className="rounded-4" alt="course image" />
              <GlightBox className="hover-content position-absolute w-100 h-100" data-glightbox data-gallery="gallery" href={career1.src}>
                <IconifyIcon icon='bi:fullscreen' className=" fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-3 p-2 lh-1" />
              </GlightBox>
            </Card>
          </Col>
          <Col>
            <Card className="card-content-hover overflow-hidden mb-5">
              <Image src={career2} className="rounded-4" alt="course image" />
              <GlightBox className="hover-content position-absolute w-100 h-100" data-glightbox data-gallery="gallery" href={career2.src}>
                <IconifyIcon icon='bi:fullscreen' className=" fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-3 p-2 lh-1" />
              </GlightBox>
            </Card>
            <Card className="card-content-hover overflow-hidden">
              <Image src={career3} className="rounded-4" alt="course image" />
              <GlightBox className="hover-content position-absolute w-100 h-100" data-glightbox data-gallery="gallery" href={career3.src}>
                <IconifyIcon icon='bi:fullscreen' className=" fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-3 p-2 lh-1" />
              </GlightBox>
            </Card>
          </Col>
          <Col>
            <Card className="card-content-hover overflow-hidden mb-5">
              <Image src={career5} className="rounded-4" alt="course image" />
              <GlightBox className="hover-content position-absolute w-100 h-100" data-glightbox data-gallery="gallery" href={career5.src}>
                <IconifyIcon icon='bi:fullscreen' className=" fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-3 p-2 lh-1" />
              </GlightBox>
            </Card>
            <Card className="card-content-hover overflow-hidden">
              <Image src={career4} className="rounded-4" alt="course image" />
              <GlightBox className="hover-content position-absolute w-100 h-100" data-glightbox data-gallery="gallery" href={career4.src}>
                <IconifyIcon icon='bi:fullscreen' className=" fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-3 p-2 lh-1" />
              </GlightBox>
            </Card>
          </Col>
          <Col>
            <Card className="card-content-hover overflow-hidden">
              <Image src={career6} className="rounded-4" alt="course image" />
              <GlightBox className="hover-content position-absolute w-100 h-100" data-glightbox data-gallery="gallery" href={career6.src}>
                <IconifyIcon icon='bi:fullscreen' className=" fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-3 p-2 lh-1" />
              </GlightBox>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Gallery