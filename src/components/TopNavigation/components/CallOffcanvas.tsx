import React from 'react'
import { Col, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'react-bootstrap'

type OffcanvasType = {
  show: boolean
  hide: () => void
}


const CallOffcanvas = ({hide,show}: OffcanvasType) => {
  return (
    <Offcanvas show={show} placement='end' onHide={hide} className="offcanvas-end" data-bs-scroll="true" tabIndex={-1} id="scheduleCall" aria-labelledby="scheduleCallLabel">
      <OffcanvasHeader>
        <h6 className="offcanvas-title" id="scheduleCallLabel">Schedule a call</h6>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </OffcanvasHeader>
      <OffcanvasBody>
        <form className="row g-3">
          <Col xs={12}>
            <label className="form-label">Your name *</label>
            <input type="text" className="form-control form-control-sm" placeholder="Full name" />
          </Col>
          <Col xs={12}>
            <label className="form-label">Email address *</label>
            <input type="email" className="form-control form-control-sm" id="floatingInput" placeholder="name@example.com" />
          </Col>
          <Col xs={6}>
            <label className="form-label">Schedule date *</label>
            <input type="date" className="form-control form-control-sm" />
          </Col>
          <Col xs={6}>
            <label className="form-label">Schedule date *</label>
            <input type="time" className="form-control form-control-sm" />
          </Col>
          <Col xs={12}>
            <label className="form-label">Phone number *</label>
            <input type="text" className="form-control form-control-sm" placeholder="(xxx) xx xxxx" />
          </Col>
          <Col xs={12}>
            <label className="form-label">Subject *</label>
            <input type="text" className="form-control form-control-sm" placeholder="Subject name" />
          </Col>
          <Col xs={12}>
            <label className="form-label">Message *</label>
            <textarea className="form-control" placeholder="Write your message here...." id="floatingTextarea2" style={{ height: 150 }} defaultValue={""} />
          </Col>
          <button className="btn btn-primary mb-0">Send a message</button>
        </form>
      </OffcanvasBody>
    </Offcanvas>

  )
}

export default CallOffcanvas