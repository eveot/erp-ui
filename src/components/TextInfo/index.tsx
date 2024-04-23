import { Icon, IconName } from '@components/Icon'
import { getIconColor } from '@utils/getIconColor'
import { FC, PropsWithChildren } from 'react'
import './styles.scss'

export interface TextInfoProps {
  active?: boolean
  disabled?: boolean
  leftIcon?: IconName
  rightIcon?: IconName
}

export const TextInfo: FC<PropsWithChildren<TextInfoProps>> = ({ active, disabled, leftIcon, rightIcon, children }) => {

  const iconColor = getIconColor({
    active: { value: active, color: 'white' },
    disabled: { value: disabled, color: '#515356' }
  })

  return (
    <div className="ev-text-info" data-active={active} data-disabled={disabled}>
      { leftIcon &&  <Icon name={ leftIcon } color={ iconColor } /> }
      { children }
      { rightIcon && <Icon name={ rightIcon } color={ iconColor } /> }
    </div>
  )
}