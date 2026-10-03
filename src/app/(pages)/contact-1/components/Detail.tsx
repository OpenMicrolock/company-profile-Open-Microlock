import Image from 'next/image'
import React from 'react'
import relexImg from '@/assets/images/elements/relex-slay.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import flagsIn from '@/assets/images/flags/in.svg'
import flagsUk from '@/assets/images/flags/uk.svg'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Detail = () => {
  return (
    <section className="position-relative pt-0 overflow-hidden">
      <div className="position-absolute bottom-0 end-0 mb-n3 me-n7 d-none d-xl-block">
        <Image src={relexImg} height={500} className="h-400px h-xxl-500px rtl-flip" alt="image" />
      </div>
      <Container>
        <Row className="g-4 align-items-center">
          <Col lg={5}>
            <iframe className="w-100 h-200px h-lg-500px grayscale rounded-4 d-block mb-3 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin" style={{ marginBottom: '-5px' }} aria-hidden="false" tabIndex={0} />
          </Col>
          <Col lg={7} className="ps-lg-6">
            <h2 className="mb-4">Our offices</h2>
            <Row className="g-4 mb-4">
              <Col md={6} >
                <div className="d-flex align-items-center gap-2">
                  <div className="avatar avatar-xs flex-shrink-0">
                    <Image className="avatar-img rounded-circle" src={flagsUk} alt="avatar" />
                  </div>
                  <h6 className="mb-0">New York, USA (HQ)</h6>
                </div>
                <ul className="mb-0 mt-3">
                  <li className="mb-2">750 Sing Sing Rd, Horseheads, NY, 14845</li>
                  <li className="mb-2">Call: 469-537-2410 (Toll-free)</li>
                  <li className="mb-2">Support time: Monday to Saturday 9:00 am to 5:30 pm</li>
                </ul>
              </Col>
              <Col md={6} >
                <div className="d-flex align-items-center gap-2">
                  <div className="avatar avatar-xs flex-shrink-0">
                    <Image className="avatar-img rounded-circle" src={flagsIn} alt="avatar" />
                  </div>
                  <h6 className="mb-0">India</h6>
                </div>
                <ul className="mb-0 mt-3">
                  <li className="mb-2">55/123 Norman street, Banking road, Sydney NSW 5000</li>
                  <li className="mb-2">Call: 258-698-2410 (Toll-free)</li>
                  <li className="mb-2">Support time: Monday to Saturday 9:00 am to 5:30 pm</li>
                </ul>
              </Col>
            </Row>
            <Button variant='secondary' className="icon-link icon-link-hover">Contact our help center<IconifyIcon icon='bi:arrow-right' /> </Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Detail