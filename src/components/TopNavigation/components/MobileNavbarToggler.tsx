import React from 'react'

type MobileNavbarTogglerProps = {
  isMenuOpen: boolean
  toggleMenu: () => void
}

const MobileNavbarToggler = ({ isMenuOpen, toggleMenu }: MobileNavbarTogglerProps) => {
  return (
    <li className="nav-item">
      <button className="navbar-toggler ms-sm-3 p-2" aria-expanded={isMenuOpen} onClick={toggleMenu} type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-label="Toggle navigation">
        <span className="navbar-toggler-animation">
          <span />
          <span />
          <span />
        </span>
      </button>
    </li>
  )
}

export default MobileNavbarToggler