import { HTMLAttributeAnchorTarget } from "react"

export type MenuItemType = {
  key: string
  label: string
  url?: string
  parentKey?: string
  isTitle?: boolean
  target?: HTMLAttributeAnchorTarget
  icon?: string
  children?: MenuItemType[]
  badge?: {
    variant: string
    text: string
  }
}