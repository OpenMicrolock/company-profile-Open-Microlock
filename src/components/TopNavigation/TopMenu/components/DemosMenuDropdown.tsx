import navCta from '@/assets/images/elements/nav-cta.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { getActiveClass } from '@/helpers/menu'
import type { MenuItemType } from '@/types/menu'
import { splitArray } from '@/utils/array'
import Link from 'next/link'
import { useState } from 'react'
import { Col, Dropdown, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap'

type DemosMenuDropdownProps = {
  menuItems: MenuItemType[]
  activeMenuItems: string[]
}

const DemosMenuDropdown = ({ menuItems, activeMenuItems }: DemosMenuDropdownProps) => {
  const splitMenuitems = splitArray(menuItems, 5)
  return (
    <Dropdown className="nav-item dropdown-animation">
      <DropdownToggle
        as={Link}
        href=""
        variant='link'
        className={`nav-link mb-0 arrow-none d-flex w-100 justify-content-between align-items-center ${getActiveClass(activeMenuItems, 'demos')}`}
        aria-haspopup="true"
        data-bs-auto-close="outside"
        data-bs-toggle="dropdown"
      >
        Demos
        <IconifyIcon height={12} width={19} icon="bi:chevron-down" className="ms-1" />
      </DropdownToggle>
      <div className="dropdown-menu dropdown-menu-size-lg .overflow-hidden p-0">
        <Row className="px-3 py-4">
          {
            splitMenuitems.map((chunk, idx) => (
              <Col sm={6} key={idx}>
                <ul className="list-unstyled">
                  {
                    chunk.map((item, key) => {
                      return (
                        <li key={key}>
                          <Link className={`dropdown-item ${getActiveClass(activeMenuItems, item.key)}`} href={`${item.url}`}>{item.label}</Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </Col>
            ))
          }
        </Row>
        <div
          className="h-200px position-relative rounded-bottom-3"
          style={{
            background: `url(${navCta.src}) no-repeat`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="bg-overlay bg-dark bg-opacity-10 rounded-bottom-3" />
        </div>
      </div>
    </Dropdown>
  )
}

export default DemosMenuDropdown
