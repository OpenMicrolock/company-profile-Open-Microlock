import React from 'react'
import { Container } from 'react-bootstrap'

const NewsLetter = () => {
  return (
    <section className="position-relative overflow-hidden">
      <Container>
        <div className="inner-container-small text-center">
          <h2 className="mb-4">Discover the latest in <span className="text-primary">watch</span> innovation</h2>
          <p className="mb-4">Subscribe to our newsletter for updates on new arrivals, exclusive offers, and special events.</p>
          <div className="bg-body rounded-2 position-relative z-index-2 p-2">
            <form className="input-group">
              <input className="form-control bg-transparent border-0 me-1" type="email" placeholder="Enter your email address" />
              <button type="button" className="btn btn-dark rounded-2 mb-0">Subscribe!</button>
            </form>
          </div>
          <div className="form-text mt-3">✌️ No Spam — We Promise!</div>
        </div>
      </Container>
      <div className="bg-blur-grad opacity-3 position-absolute top-100 start-50 translate-middle mt-n7" />
    </section>
  )
}

export default NewsLetter