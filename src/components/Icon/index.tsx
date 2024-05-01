import { FC } from 'react'
import { IconBaseProps } from 'react-icons'
import * as tbicons from 'react-icons/tb'
import * as evicons from './icons'
import './style.scss'

type TablerIconName = keyof typeof tbicons
type EveotIconName =  keyof typeof evicons
export type IconName = TablerIconName | EveotIconName

export interface IconProps {
  name: IconName
  size?: IconBaseProps['size']
  color?: IconBaseProps['color']
  onClick?: () => void
}

export const IconNames = Object.keys(evicons).concat(Object.keys(tbicons))

export const Icon: FC<IconProps> = ({ name, color = 'currentColor', size = '1.063rem', onClick }) => {

  const ParsedIcon = Object.keys(evicons).includes(name) ? evicons[name as EveotIconName] : tbicons[name as TablerIconName]

  // const getParsedIcon = (): React.ElementType | null => Object.keys(evicons).includes(name) ? evicons[name as EveotIconName] : tbicons[name as TablerIconName];
  // const ParsedIcon = getParsedIcon();

  if (!ParsedIcon) {
    return <p style={{color: '#F44336'}}>ICON:ERR</p>;
  }

  return (
    <div className="ev-icon" onClick={onClick}>
      <ParsedIcon size={size} color={color} />
    </div>
  )
}