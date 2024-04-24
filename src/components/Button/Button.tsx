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
  onClick?: () => void
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  dataStyle = 'dark',
  dataSize = 'md',
  iconLeft,
  iconRight,
  disabled,
  active,
  ...props
}) => {

  const getIconColor = () => {
    if (active && !disabled) return 'white'
    if (dataStyle === 'dark' && disabled) return '#515356'
    if (dataStyle === 'light' && disabled) return '#D7D7D7'
    return dataStyle === 'light' ? 'black' : 'white'
  }
  
  return (  
    <button className="ev-button" data-style={dataStyle} data-size={dataSize} disabled={disabled} data-active={active} {...props}>
      { iconLeft && <Icon name={iconLeft} color={getIconColor()} /> }
      {children}
      { iconRight && <Icon name={iconRight} color={getIconColor()} /> }
    </button>
  )
}