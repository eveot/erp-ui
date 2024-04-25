import { FC } from 'react'
import './style.scss'

interface SwitchProps {
  toggle?: boolean
  disabled?: boolean
}

export const Switch: FC<SwitchProps> = ({ toggle, disabled }) => {
  return (
    <div className="ev-switch" data-toggle={ toggle } data-disabled={ disabled }>
      <div className="ev-switch-radio"></div>
    </div>
  )
}