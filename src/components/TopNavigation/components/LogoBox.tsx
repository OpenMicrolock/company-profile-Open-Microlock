import Image from 'next/image'
import React from 'react'
import logo from '@/assets/images/logo.svg'
import logoLight from '@/assets/images/logo-light.svg'
import Link from 'next/link'

const LogoBox = () => {
  return (
    <Link className="navbar-brand me-0" href="/home">
      <Image className="light-mode-item navbar-brand-item" src={logo} alt="logo" />
      <Image className="dark-mode-item navbar-brand-item" src={logoLight} alt="logo" />
    </Link>
  )
}

export default LogoBox