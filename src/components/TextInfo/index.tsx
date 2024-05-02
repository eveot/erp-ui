import { Icon, IconName } from '@components/Icon'
import { FC, PropsWithChildren } from 'react'
import './style.scss'

export interface TextInfoProps {
  active?: boolean
  disabled?: boolean
  iconLeft?: IconName
  iconRight?: IconName
}

export type TextInfo = {
  label: string
  iconLeft?: IconName
  iconRight?: IconName
}

export const TextInfo: FC<PropsWithChildren<TextInfoProps>> = ({ active, disabled, iconLeft, iconRight, children }) => {

  return (
    <div className="ev-text-info" data-active={active} data-disabled={disabled}>
      { iconLeft &&  <Icon name={ iconLeft } /> }
      <p>{ children }</p>
      { iconRight && <Icon name={ iconRight } /> }
    </div>
  )
}