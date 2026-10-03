import Image from 'next/image'
import React from 'react'
import icons4 from '@/assets/images/client/icons/04.svg'
import icons5 from '@/assets/images/client/icons/05.svg'
import icons2 from '@/assets/images/client/icons/02.svg'
import icons1 from '@/assets/images/client/icons/01.svg'
import logoIcon from '@/assets/images/logo-icon.svg'
import icons6 from '@/assets/images/client/icons/06.svg'
import icons7 from '@/assets/images/client/icons/07.svg'
import icons8 from '@/assets/images/client/icons/08.svg'
import icons9 from '@/assets/images/client/icons/09.svg'
import { integrationsData } from '../data'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import IconifyIcon from '@/components/wrappers/IconifyIcon'

const Integrations = () => {
  return (
    <section className="position-relative pt-0">
      <Container fluid className=" px-xxl-6">
        <div className="bg-secondary bg-opacity-50 position-relative rounded-4 overflow-hidden pt-6 pt-md-8 px-sm-4 px-xxl-6">
          <Container className="position-relative z-index-2">
            <Row className="mb-6 mb-md-8">
              <Col xs={12} className="mb-6">
                <div className="d-flex justify-content-center align-items-center gap-2 gap-sm-4">
                  <div className="icon-md text-center shadow-primary bg-body rounded-circle flex-shrink-0 d-none d-md-block">
                    <Image src={icons4} className="w-20px" alt={icons4} />
                  </div>
                  <div className="icon-lg text-center shadow-primary bg-body rounded-circle flex-shrink-0 d-none d-sm-block">
                    <Image src={icons5} className="w-30px" alt={icons5} />
                  </div>
                  <div className="icon-xl text-center shadow-primary bg-body rounded-circle flex-shrink-0">
                    <Image src={icons2} className="h-40px" alt={icons2} />
                  </div>
                  <div className="icon-xl text-center shadow-primary bg-body rounded-circle flex-shrink-0">
                    <Image src={icons1} className="h-40px" alt={icons1} />
                  </div>
                  <div className="icon-xxl text-center shadow-primary bg-body rounded-circle flex-shrink-0 ripple-anim">
                    <Image src={logoIcon} className="h-60px" alt={logoIcon} />
                  </div>
                  <div className="icon-xl text-center shadow-primary bg-body rounded-circle flex-shrink-0">
                    <Image src={icons6} className="h-40px" alt={icons6} />
                  </div>
                  <div className="icon-xl text-center shadow-primary bg-body rounded-circle flex-shrink-0">
                    <Image src={icons7} className="w-30px" alt={icons7} />
                  </div>
                  <div className="icon-lg text-center shadow-primary bg-body rounded-circle flex-shrink-0 d-none d-sm-block">
                    <Image src={icons8} className="w-30px" alt={icons8} />
                  </div>
                  <div className="icon-md text-center shadow-primary bg-body rounded-circle flex-shrink-0 d-none d-md-block">
                    <Image src={icons9} className="w-20px" alt={icons9} />
                  </div>
                </div>
              </Col>
              <Col xxl={8} className="text-center mx-auto">
                <h1 className="fw-bold mb-4 lh-base">Easily bring <span className="text-primary">AI</span> in your workflow to create content</h1>
                <p className="mb-4">Our robust integration capabilities ensure your data flows smoothly across systems, empowering you to streamline operations and boost productivity</p>
                <Link href="integrations.html" className="btn btn-primary-grad icon-link icon-link-hover mb-0">Integrate with your apps <IconifyIcon icon='bi:arrow-right' /></Link>
              </Col>
            </Row>
            <Row className="g-4 g-lg-6">
              {
                integrationsData.map((item, idx) => (
                  <Col md={6} lg={4} key={idx}>
                    <Card className="card-body bg-transparent text-center p-0">
                      <div className="text-center mb-3">
                        {item.icon}
                      </div>
                      <h6 className="mb-3">{item.title}</h6>
                      <p className="mb-md-0">{item.description}</p>
                    </Card>
                  </Col>
                ))
              }
            </Row>
          </Container>
        </div>
      </Container>
      <div className="bg-body h-300px w-100 blur-7 position-absolute start-0 bottom-0" />
    </section>
  )
}

export default Integrations