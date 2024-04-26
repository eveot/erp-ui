import { Icon, IconName } from '@components/Icon'
import { FC, PropsWithChildren } from 'react'
import './style.scss'

// "prop?" - because Partial<> broke the doc page
export interface ButtonProps {
  style?: 'dark' | 'light'
  size?: 'xs' | 'sm' | 'md'
  iconLeft?: IconName
  iconRight?: IconName
  disabled?: boolean
  active?: boolean
  centered?: boolean
  onClick?: () => void
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  style = 'dark',
  size = 'md',
  children,
  iconLeft,
  iconRight,
  disabled,
  centered = true,
  active,
  ...props
}) => {
  return (  
    <button
      className="ev-button"
      data-style={ style }
      data-size={ size }
      disabled={ disabled }
      data-active={ active }
      data-centered={ centered }
      {...props}
    >
      { iconLeft && <Icon name={iconLeft} /> }
      {children}
      { iconRight && <Icon name={iconRight} /> }
    </button>
  )
}