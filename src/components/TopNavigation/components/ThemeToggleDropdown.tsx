'use client'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { LayoutState, useLayoutContext } from '@/context/useLayoutContext'
import { toSentenceCase } from '@/utils/change-casing'
import { ReactNode } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap'

type ThemeModeType = {
  theme: LayoutState['theme']
  icon: ReactNode
}

const themeModes: ThemeModeType[] = [
  {
    icon: (
      <svg
        width={16}
        height={16}
        fill="currentColor"
        className="bi bi-brightness-high-fill fa-fw mode-switch me-1"
        viewBox="0 0 16 16"
      >
        <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zM16 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5z" />
      </svg>
    ),
    theme: 'light',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="currentColor"
        className="bi bi-moon-stars-fill fa-fw mode-switch me-1"
        viewBox="0 0 16 16"
      >
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
      </svg>
    ),
    theme: 'dark',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="currentColor"
        className="bi bi-circle-half fa-fw mode-switch me-1"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
      </svg>
    ),
    theme: 'auto',
  },
]

const ThemeToggleDropdown = () => {
  const { theme, changeTheme } = useLayoutContext()
  return (
    <Dropdown as={'li'} className="nav-item dropdown-animation" align="end">
      <DropdownToggle
      as={'button'}
        variant="link"
        className="btn btn-link mb-0 p-0 lh-1"
        id="bd-theme"
        type="button"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        data-bs-display="static">
         <IconifyIcon width={20} height={20} icon='bi-circle-half' className='theme-icon-active fill-mode fa-fw' />
      </DropdownToggle>
      <DropdownMenu as="ul" className="min-w-auto dropdown-menu-end" aria-labelledby="bd-theme">
        {(themeModes || []).map((mode) => {
          const Icon = mode.icon
          return (
            <li key={mode.theme} className="mb-1">
              <DropdownItem
                as="button"
                className={`d-flex align-items-center${mode.theme === theme ? ' active' : ''}`}
                data-bs-theme-value={mode.theme}
                onClick={() => changeTheme(mode.theme)}>
                {/* <Icon className="mode-switch me-1" size={16} /> */}
                {toSentenceCase(mode.theme)}
              </DropdownItem>
            </li>
          )
        })}
      </DropdownMenu>
    </Dropdown>
  )
}

export default ThemeToggleDropdown
