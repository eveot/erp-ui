import { Icon, IconName } from '@components/Icon'
import { FC, PropsWithChildren } from 'react'
import './style.scss'

export interface TextInfoProps {
  active?: boolean
  disabled?: boolean
  leftIcon?: IconName
  rightIcon?: IconName
}

export type TextInfo = {
  label: string
  leftIcon?: IconName
  rightIcon?: IconName
}

export const TextInfo: FC<PropsWithChildren<TextInfoProps>> = ({ active, disabled, leftIcon, rightIcon, children }) => {

  return (
    <div className="ev-text-info" data-active={active} data-disabled={disabled}>
      { leftIcon &&  <Icon name={ leftIcon } /> }
      { children }
      { rightIcon && <Icon name={ rightIcon } /> }
    </div>
  )
}