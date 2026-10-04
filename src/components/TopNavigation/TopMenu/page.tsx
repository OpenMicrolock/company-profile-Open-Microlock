'use client'
import { findAllParent, findMenuItem, getAppMenuItems, getMenuItemFromURL } from '@/helpers/menu'
import { MenuItemType } from '@/types/menu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Suspense, useCallback, useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import ProductMenu from './components/ProductMenu'


const loading = () => <div></div>

export type AppMenuProps = {
  mobileMenuOpen: boolean
  showMegaMenu?: boolean
  showResourceMenu?: boolean
  showContactUs?: boolean
  showDocs?: boolean
  ulClassName?: string
}


const TopMenuPage = ({ mobileMenuOpen }: AppMenuProps) => {

  const pathname = usePathname()
  const [activeMenuItems, setActiveMenuItems] = useState<string[]>([])

  const menuItems: MenuItemType[] = getAppMenuItems()
  /**
   * activate the menuitems
   */
  const activeMenu = useCallback(() => {
    // const trimmedURL = pathname?.replaceAll(basePath !== '' ? basePath : '', '/')

    const trimmedURL = pathname?.replaceAll('', '')
    const matchingMenuItem = getMenuItemFromURL(menuItems, trimmedURL)

    if (matchingMenuItem) {
      const activeMt = findMenuItem(menuItems, matchingMenuItem.key)
      if (activeMt) {
        setActiveMenuItems([activeMt.key, ...findAllParent(menuItems, activeMt)])
      }
    }
  }, [pathname, menuItems])

  useEffect(() => {
    activeMenu()
  }, [pathname, menuItems])


  return (
    <Collapse className="navbar-collapse" in={mobileMenuOpen}>
      <div>
        <ul className="navbar-nav navbar-nav-scroll dropdown-hover mx-auto">
          <ProductMenu />
          <li className="nav-item"> <Link className="nav-link" href="#docs">Docs</Link> </li>
          <li className="nav-item"> <Link className="nav-link" href="#community">Community</Link> </li>
          <li className="nav-item"> <Link className="nav-link" href="#about">About</Link> </li>
          <li className="nav-item"> <Link className="nav-link" href="#contact">Contact</Link> </li>
        </ul>
      </div>
    </Collapse>
  )
}

export default TopMenuPage