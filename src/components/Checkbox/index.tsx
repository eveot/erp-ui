import { Icon } from '@components/Icon'
import { FC, PropsWithChildren } from 'react'
import './style.scss'

export interface CheckboxProps {
  dataStyle?: 'dark' | 'light'
  disabled?: boolean
  active?: boolean
}

export const Checkbox: FC<PropsWithChildren<CheckboxProps>> = ({ children, active, dataStyle = 'dark' }) => {
  return (
    <div className="ev-checkbox" data-style={dataStyle} data-active={active}>
      <div className="ev-checkbox-mark">
        <Icon name='TbCheck' color={active ? 'white' : 'transparent'} />
      </div>
      { children }
    </div>
  )
}