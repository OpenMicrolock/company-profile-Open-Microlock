import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { getActiveClass } from '@/helpers/menu'
import type { MenuItemType } from '@/types/menu'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap'

type PagesMenuDropdownProps = {
  menuItems: MenuItemType[]
  activeMenuItems: string[]
}

type SubMenuType = {
  item: MenuItemType
  itemClassName?: string
  linkClassName?: string
  activeMenuItems: string[]
  level: number
}

const MenuItemWithChildren = ({ item, itemClassName, linkClassName, activeMenuItems, level }: SubMenuType) => {
  return (
    <Dropdown className={itemClassName} drop={level > 1 ? 'end' : undefined}>
      <DropdownToggle
        variant='link'
        className={linkClassName}
        data-bs-toggle="dropdown"
        aria-haspopup="true"
      >
        {item.label}
        <IconifyIcon width={11} height={24} icon='bi:chevron-right' />
      </DropdownToggle>
      <div className={`dropdown-menu`} data-bs-popper="static">
        {(item.children || []).map((child, idx) => (
          <Fragment key={idx + child.key + idx}>
            {child.children ? (
              <MenuItemWithChildren
                item={child}
                level={1}
                activeMenuItems={activeMenuItems}
                itemClassName="dropdown dropend"
                linkClassName={`nav-link dropdown-link d-flex justify-content-between align-items-center dropdown-toggle${getActiveClass(activeMenuItems, child.key)}`}
              />
            ) : (
              <MenuItem level={level + 1} item={child} linkClassName={`dropdown-item${getActiveClass(activeMenuItems, child.key)}`} activeMenuItems={activeMenuItems} />
            )}
          </Fragment>
        ))}
      </div>
    </Dropdown>
  )
}

const MenuItem = ({ item, linkClassName }: SubMenuType) => {
  return (
    <li>
      <DropdownItem as={Link} className={linkClassName} target={item.target} href={item.url ?? ''}>
        {item.label}
        {item.badge && <span className="badge text-bg-success ms-2">{item.badge.text}</span>}
      </DropdownItem>
    </li>
  )
}

const PagesMenuDropdown = ({ menuItems, activeMenuItems }: PagesMenuDropdownProps) => {
  return (
    <Dropdown className="nav-item dropdown-animation"  >
      <DropdownToggle

        as={Link}
        href=""
        variant='link'
        className={`nav-link mb-0 arrow-none d-flex w-100 justify-content-between align-items-center dropdown-toggle${getActiveClass(activeMenuItems, 'pages')}`}
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Pages
        <IconifyIcon height={12} width={19} icon='bi:chevron-down' className="ms-1" />
      </DropdownToggle>
      <div className="dropdown-menu" data-bs-popper="static"  >
        {(menuItems ?? []).map((item, idx) => {
          return (
            <Fragment key={item.key + idx}>
              {item.children ? (
                <MenuItemWithChildren
                  item={item}
                  level={1}
                  activeMenuItems={activeMenuItems}
                  itemClassName="dropend"
                  linkClassName={`nav-link dropdown-link arrow-none d-flex justify-content-between align-items-center dropdown-toggle${getActiveClass(activeMenuItems, item.key)}`}
                />
              ) : (
                <MenuItem  level={1} item={item} linkClassName={`dropdown-item${getActiveClass(activeMenuItems, item.key)}`} activeMenuItems={activeMenuItems} />
              )}
            </Fragment>
          )
        })}
      </div>
    </Dropdown>
  )
}

export default PagesMenuDropdown
