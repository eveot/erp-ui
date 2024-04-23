import { Icon } from '@components/Icon'
import { getIconColor } from '@utils/getIconColor'
import { FC, PropsWithChildren } from 'react'
import './style.scss'

export interface CheckboxProps {
  dataStyle?: 'dark' | 'light'
  disabled?: boolean
  active?: boolean
  onClick?: () => void
}

export const Checkbox: FC<PropsWithChildren<CheckboxProps>> = ({
  children,
  active,
  disabled,
  onClick,
  dataStyle = 'dark',
}) => {

  const iconColor = getIconColor({
    disabledOrInactive: { value: disabled || !active, color: 'transparent' },
    active: { value: active, color: 'white' },
  })

  return (
    <div 
      className="ev-checkbox"
      data-style={dataStyle}
      data-active={active}
      data-disabled={disabled}
      onClick={onClick}
    >
      <div className="ev-checkbox-mark">
        <Icon name='TbCheck' color={ iconColor } />
      </div>
      { children }
    </div>
  )
}