import { Icon, IconName } from '@components/Icon'
import { FC, PropsWithChildren } from 'react'
import './style.scss'

// "prop?" - because Partial<> broke the doc page
export interface ButtonProps {
  dataStyle?: 'dark' | 'light'
  dataSize?: 'xs' | 'sm' | 'md'
  iconLeft?: IconName
  iconRight?: IconName
  disabled?: boolean
  active?: boolean
  centered?: boolean
  onClick?: () => void
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  dataStyle = 'dark',
  dataSize = 'md',
  children,
  iconLeft,
  iconRight,
  disabled,
  centered = true,
  active,
  ...props
}) => {
  return (  
    <button className="ev-button" data-style={dataStyle} data-size={dataSize} disabled={disabled} data-active={active} data-centered={centered} {...props}>
      { iconLeft && <Icon name={iconLeft} /> }
      {children}
      { iconRight && <Icon name={iconRight} /> }
    </button>
  )
}