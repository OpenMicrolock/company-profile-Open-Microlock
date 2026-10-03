import Image from 'next/image'
import React from 'react'
import watchesImg from '@/assets/images/product/watches/01.png'
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from 'react-bootstrap'
import Link from 'next/link'

type OffcanvasType = {
  show: boolean
  hide: () => void
}

const CartOffcanvas = ({show, hide}: OffcanvasType) => {
  return (
    <>
      <Offcanvas placement='end' show={show} onHide={hide} className="offcanvas-end" tabIndex={-1} id="offcanvasMenu">
        <OffcanvasHeader className="justify-content-between border-bottom px-3">
          <h6 className="mb-0">My Cart</h6>
          <button type="button" className="btn-close text-reset" onClick={hide} data-bs-dismiss="offcanvas" aria-label="Close" />
        </OffcanvasHeader>
        <OffcanvasBody className="d-flex flex-column px-3">
          <div className="d-flex align-items-center gap-2">
            <Image src={watchesImg} height={70} width={61} className="rounded-2 bg-light p-2 h-70px" alt="product image" />
            <div className="ms-2">
              <p className="heading-color fw-semibold mb-1">Apex Pro</p>
              <select className="form-select form-select-sm w-auto" aria-label="Default select example">
                <option value={1}>01</option>
                <option value={2}>02</option>
                <option value={3}>03</option>
              </select>
            </div>
            <Link href="" className="btn btn-sm btn-link p-0 ms-auto">Remove</Link>
          </div>
          <div className="mt-auto">
            <div className="d-flex justify-content-between mb-2">
              <span className="heading-color fw-semibold">Subtotal</span>
              <h6 className="text-success mb-0">$358</h6>
            </div>
            <div className="d-grid">
              <Link href="" className="btn btn-lg btn-dark mb-0">Continue to Checkout</Link>
            </div>
          </div>
        </OffcanvasBody>
      </Offcanvas>

    </>
  )
}

export default CartOffcanvas