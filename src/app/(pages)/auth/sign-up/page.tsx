
import Image from 'next/image'
import React from 'react'
import ufoImg from '@/assets/images/elements/ufo.png'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration.svg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const SignUpPage = () => {
  return (
    <section className="bg-secondary position-relative vh-100">
      <Container className="h-100 d-flex flex-column justify-content-center">
        <Row className="justify-content-center align-items-center">
          <Col sm={10} md={8} lg={7} xl={6} xxl={5} className="position-relative">
            <div className="vert-move position-absolute top-0 start-0 ms-n5 mt-n5 z-index-9 d-none d-sm-block">
              <Image src={ufoImg} height={100} className="h-100px rotate-343" alt="ufo image" />
            </div>
            <div className="position-absolute bottom-0 end-0 mb-n8 me-n5 d-none d-sm-block">
              <Image src={decorationImg} className="blur-8 opacity-2" alt="Grad shape" />
            </div>
            <Card className="card-body bg-body bg-opacity-25 bg-blur border border-white border-opacity-10 position-relative rounded-4 shadow-primary text-center p-4 p-sm-5">
              <h1 className="mb-2 h3 fw-bold">Create Account</h1>
              <p className="mb-0">Already have an account?<Link href="/auth/sign-in" className="text-primary-grad"> Sign in here</Link></p>
              <form className="mt-2 mt-sm-4">
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="mb-3 position-relative">
                  <div className="mb-3 position-relative">
                    <input type="password" className="form-control fakepassword pe-6" id="psw-input" placeholder="Enter your password" />
                    <span className="position-absolute top-50 end-0 translate-middle-y p-0 me-2">
                      <IconifyIcon icon='bi:eye-slash-fill' className="fakepasswordicon cursor-pointer p-2" />
                    </span>
                  </div>
                </div>
                <div className="mb-3 text-start form-check">
                  <input type="checkbox" className="form-check-input border" id="exampleCheck1" />
                  <label className="form-check-label small" htmlFor="exampleCheck1">I agree to all Terms &amp; conditions and the privacy policy.</label>
                </div>
                <div className="d-grid"><button type="submit" className="btn btn-primary">Create an account</button></div>
                <div className="d-flex align-items-center my-3">
                  <hr className="w-100" />
                  <p className="small px-4 mb-0">Or</p>
                  <hr className="w-100" />
                </div>
                <div className="d-flex justify-content-center gap-3">
                  <Link className="btn btn-icon bg-facebook" href="#"><IconifyIcon icon='bi:facebook' className="lh-base" /></Link>
                  <Link className="btn btn-icon border bg-white" href="#"><IconifyIcon icon='bi:google' className="lh-base text-google-icon" /></Link>
                </div>
                <div className="text-body small mt-3"> Copyrights ©2024 Folio. Build by <Link href="#" target="_blank" className="text-body text-primary-hover hover-underline-animation">Themesdesginer</Link>. </div>
              </form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>

  )
}

export default SignUpPage