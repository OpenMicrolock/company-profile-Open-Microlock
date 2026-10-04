'use client'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { LayoutState, useLayoutContext } from '@/context/useLayoutContext'
import { toSentenceCase } from '@/utils/change-casing'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap'

type ThemeModeType = {
  theme: LayoutState['theme']
  icon: string
}

const themeModes: ThemeModeType[] = [
  { theme: 'light', icon: 'bi:sun-fill' },
  { theme: 'dark', icon: 'bi:moon-stars-fill' },
  { theme: 'auto', icon: 'bi:circle-half' },
]

const ThemeToggleDropdown = () => {
  const { theme, changeTheme } = useLayoutContext()
  const activeMode = themeModes.find((mode) => mode.theme === theme) ?? themeModes[2]

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
        <IconifyIcon width={20} height={20} icon={activeMode.icon} className="theme-icon-active fill-mode fa-fw" />
      </DropdownToggle>
      <DropdownMenu as="ul" className="min-w-auto dropdown-menu-end" aria-labelledby="bd-theme">
        {themeModes.map((mode) => (
          <li key={mode.theme} className="mb-1">
            <DropdownItem
              as="button"
              className={`d-flex align-items-center gap-2${mode.theme === theme ? ' active' : ''}`}
              data-bs-theme-value={mode.theme}
              onClick={() => changeTheme(mode.theme)}>
              <IconifyIcon width={16} height={16} icon={mode.icon} className="mode-switch" />
              {toSentenceCase(mode.theme)}
            </DropdownItem>
          </li>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

export default ThemeToggleDropdown
