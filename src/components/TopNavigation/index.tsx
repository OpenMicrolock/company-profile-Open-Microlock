'use client'
import useToggle from '@/hooks/useToggle'
import Link from 'next/link'
import { ReactNode, Suspense, useEffect, useRef } from 'react'
import { ButtonProps, Container, Dropdown, DropdownMenu, DropdownToggle } from 'react-bootstrap'
import IconifyIcon from '../wrappers/IconifyIcon'
import CallOffcanvas from './components/CallOffcanvas'
import CartOffcanvas from './components/CartOffcanvas'
import LogoBox from './components/LogoBox'
import ThemeToggleDropdown from './components/ThemeToggleDropdown'
import TopMenuPage, { AppMenuProps } from './TopMenu/page'

type TopNavigationBarProps = {
  containerFluid?: boolean
  showSignUp?: boolean
  showBuyNow?: boolean
  showSearchInput?: boolean
  showShoppingCart?: boolean
  showFloatingSearch?: boolean
  hideThemeToggler?: boolean
  darkButton?: { text: string; size?: ButtonProps['size']; icon: string }
  navClassName?: string
  menuProps?: Omit<AppMenuProps, 'mobileMenuOpen'>
  children?: ReactNode
  position?: boolean
  showSignUpWithLogin?: boolean
  headerTheme?: boolean
}


const TopNavigationPage = ({
  showBuyNow,
  showSignUp,
  showSignUpWithLogin,
  showSearchInput,
  showShoppingCart,
  navClassName,
  hideThemeToggler,
  darkButton,
  showFloatingSearch,
  headerTheme,
  menuProps,
  containerFluid,
  children,
  position,
  ...props
}: TopNavigationBarProps) => {
  const { isTrue: isMenuOpen, toggle: toggleMenu } = useToggle(false)

  const navbar = useRef<HTMLElement>(null)

  const { isTrue, toggle } = useToggle()
  const { isTrue: isCallTrue, toggle: callToggle } = useToggle()

  useEffect(() => {
    const handleScroll = () => {
      if (navbar.current) navbar.current.classList.toggle('header-sticky-on', window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header ref={navbar} className={`header-sticky  ${position && 'header-absolute'}`} {...(headerTheme && { 'data-bs-theme': 'dark' })}>
        <nav className="navbar navbar-expand-xl">
          <Container>
            <LogoBox />

            <Suspense>
              <TopMenuPage mobileMenuOpen={isMenuOpen} {...menuProps} />
            </Suspense>

            <ul className="nav align-items-center dropdown-hover ms-sm-2">

              {
                !hideThemeToggler && <ThemeToggleDropdown />
              }


              {
                showSignUp &&
                <li className="nav-item ms-2 d-none d-sm-block">
                  <Link href="/auth/sign-up" className="btn btn-sm btn-primary-grad mb-0">Sign up</Link>
                </li>
              }

              {
                showSignUpWithLogin &&
                <li className="nav-item bg-secondary rounded d-none d-sm-block gap-1 ms-2 p-1">
                  <Link href="/auth/sign-up" className="btn btn-sm btn-secondary mb-0">Login</Link>&nbsp;
                  <Link href="/auth/sign-in" className="btn btn-sm btn-primary mb-0">Sign up</Link>
                </li>

              }

              {darkButton &&
                <li className="nav-item ms-2 d-none d-sm-block">
                  <Link href="" onClick={callToggle} className="btn btn-sm btn-dark mb-0" data-bs-toggle="offcanvas" data-bs-target="#scheduleCall" aria-controls="scheduleCall"><IconifyIcon icon={darkButton.icon} className="me-2" />{darkButton.text}</Link>
                </li>
              }

              {
                showSearchInput &&
                <>
                  <li className='nav-item '>
                    <Dropdown align={'end'} as={Link} href='' className="dropdown-animation nav nav-item nav-search">
                      <DropdownToggle className="btn btn-secondary drop-arrow-none btn-round d-flex justify-content-center align-items-center mb-0" href="#" id="navSearch" data-bs-toggle="dropdown" aria-expanded="true" data-bs-auto-close="outside" data-bs-display="static">
                        <svg width={14} height={15} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.4016 13.9001L9.56434 10.0629M9.56434 10.0629C10.5141 9.11275 11.1015 7.80033 11.1015 6.35073C11.1015 3.45087 8.75104 1.1001 5.85155 1.1001C2.95205 1.1001 0.601562 3.45087 0.601562 6.35073C0.601562 9.2505 2.95205 11.6013 5.85155 11.6013C7.30151 11.6013 8.61429 11.0134 9.56434 10.0629Z" stroke="currentColor" strokeWidth="1.06667" strokeLinecap="round" />
                        </svg>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-center shadow rounded p-1" aria-labelledby="navSearch" data-bs-popper="none">
                        <form className="input-group">
                          <input className="form-control form-control-sm border-primary" type="search" placeholder="Search..." aria-label="Search" />
                          <button className="btn btn-sm btn-primary m-0" type="submit">Search</button>
                        </form>
                      </DropdownMenu>
                    </Dropdown>
                  </li>
                  <li className="nav-item position-relative ms-2 me-1">
                    <Link onClick={toggle} className="btn btn-secondary btn-round d-flex justify-content-center align-items-center mb-0" data-bs-toggle="offcanvas" href="#offcanvasMenu" role="button" aria-controls="offcanvasMenu">
                      <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" data-bs-target="#offcanvasMenu">
                        <path d="M10.5751 4.15553C10.5751 2.19185 8.98322 0.599976 7.01956 0.599976C5.05589 0.599976 3.46401 2.19185 3.46401 4.15553M5.50425 13.4H8.53487C9.64797 13.4 10.2045 13.4 10.6762 13.2505C11.4659 13.0003 12.1279 12.4535 12.5228 11.7252C12.7586 11.2903 12.8637 10.7437 13.0739 9.65064C13.3705 8.10824 13.5188 7.33711 13.392 6.71574C13.1791 5.67247 12.4613 4.80345 11.4771 4.39739C10.8909 4.15553 10.1055 4.15553 8.53487 4.15553H5.50425C3.93362 4.15553 3.1483 4.15553 2.56206 4.39739C1.5778 4.80345 0.859967 5.67247 0.647082 6.71574C0.52029 7.33711 0.668593 8.10824 0.965204 9.65064C1.17541 10.7437 1.2805 11.2903 1.51637 11.7252C1.91124 12.4535 2.57316 13.0003 3.36291 13.2505C3.83464 13.4 4.39117 13.4 5.50425 13.4Z" stroke="currentColor" strokeWidth="1.06667" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                    <span className="position-absolute top-0 start-100 translate-middle badge smaller rounded-circle bg-success mt-xl-2 ms-n1">2
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </li>
                  <li className="nav-item vr bg-primary opacity-1 ms-3 d-none d-sm-block"> </li>
                  <li className="nav-item ms-3 d-none d-xl-block">
                    <Link className="m-0" href="#">
                      <span className="hamburger-menu">
                        <span className="hamburger-menu-line" />
                        <span className="hamburger-menu-line" />
                        <span className="hamburger-menu-line" />
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item ms-3">
                    <button className="navbar-toggler p-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-animation">
                        <span />
                        <span />
                        <span />
                      </span>
                    </button>
                  </li>
                </>
              }

              <li className="nav-item">
                <button className="navbar-toggler ms-sm-3 p-2" aria-expanded={isMenuOpen} onClick={toggleMenu} type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-label="Toggle navigation">
                  <span className="navbar-toggler-animation">
                    <span />
                    <span />
                    <span />
                  </span>
                </button>
              </li>
            </ul>
          </Container>
        </nav>
      </header>
      <CartOffcanvas show={isTrue} hide={toggle} />
      <CallOffcanvas show={isCallTrue} hide={callToggle} />
    </>


  )
}

export default TopNavigationPage
