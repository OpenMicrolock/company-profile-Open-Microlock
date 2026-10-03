import Image from 'next/image'
import rocketImg from '@/assets/images/elements/rocket-02.png'
import laptopImg from '@/assets/images/elements/person-laptop.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const BoxLast = () => {
  return (
    <section className="bg-secondary overflow-hidden pt-0 pb-5 mb-n8">
      <Container className="z-index-9 position-relative">
        <Row className="g-5">
          <Col xl={6}>
            <Card className="bg-primary h-100">
              <div className="position-absolute bottom-0 end-0 me-n6 mb-n5 d-none d-sm-block">
                <Image src={rocketImg} alt="rocket image" />
              </div>
              <Row className="align-items-center h-100 p-3 p-sm-4">
                <Col sm={8} className="d-flex h-100">
                  <CardBody className="d-flex flex-column text-white">
                    <h4 className="mb-5 text-white">Stay connected with us</h4>
                    <div className="mt-auto">
                      <form className="input-group mb-2">
                        <input className="form-control form-control-sm rounded border me-3" type="email" placeholder="Enter your email" />
                        <button type="button" className="btn btn-sm btn-dark px-3 rounded-2 mb-0"><IconifyIcon icon='bi-send-fill' /></button>
                      </form>
                      <p className="small mb-0">✌️ No Spam — We Promise!</p>
                    </div>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xl={6}>
            <Card className="bg-primary-grad h-100 overflow-hidden">
              <div className="position-absolute end-0 top-0 me-n8 d-none d-sm-block">
                <Image src={laptopImg} alt='laptopImg' />
              </div>
              <Row className="align-items-center p-3 p-sm-4">
                <Col sm={8}>
                  <CardBody className="text-white">
                    <p>Apply to work with us</p>
                    <h4 className="mb-5 text-white">Explore Career Opportunities</h4>
                    <Link className="btn btn-sm btn-dark icon-link icon-link-hover" href="/about/career">View open positions<IconifyIcon icon='bi-arrow-right' /> </Link>
                    <p className="small mb-0">3 jobs are available</p>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BoxLast