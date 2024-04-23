import * as evicons from '@components/Icon/icons'
import { FC } from 'react'
import { IconBaseProps } from 'react-icons'
import * as tbicons from 'react-icons/tb'
import './style.scss'

type TablerIconName = keyof typeof tbicons
type EveotIconName =  keyof typeof evicons
export type IconName = TablerIconName | EveotIconName

export interface IconProps {
  name: IconName
  size?: IconBaseProps['size']
  color?: IconBaseProps['color']
}

export const IconNames = Object.keys(evicons).concat(Object.keys(tbicons))

export const Icon: FC<IconProps> = ({ name, color = 'currentColor', size = '1.063rem' }) => {
  const ParsedIcon = Object.keys(evicons).includes(name) ? evicons[name as EveotIconName] : tbicons[name as TablerIconName]
  
  return (
    <div className="ev-icon">
      <ParsedIcon size={size} color={color} />
    </div>
  )
}