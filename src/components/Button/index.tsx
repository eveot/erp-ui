import { Icon, IconName } from '@components/Icon'
import { getIconColor } from '@utils/getIconColor'
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
  dataStyle = 'dark',
  dataSize = 'md',
  children,
  iconLeft,
  iconRight,
  disabled,
  active,
  ...props
}) => {

  const iconColor = getIconColor({
    active: { value: active, color: 'white' },
    disabled: { value: disabled, color: dataStyle === 'dark' ? '#515356' : '#D7D7D7' },
  })
  
  return (  
    <button className="ev-button" data-style={dataStyle} data-size={dataSize} disabled={disabled} data-active={active} {...props}>
      { iconLeft && <Icon name={iconLeft} color={iconColor} /> }
      {children}
      { iconRight && <Icon name={iconRight} color={iconColor} /> }
    </button>
  )
}