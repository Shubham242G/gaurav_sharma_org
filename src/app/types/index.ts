export interface NavItem {
  label: string
  href: string
}

export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline'
  children: React.ReactNode
  onClick?: () => void
  className?: string
}
