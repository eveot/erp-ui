import { Icon, IconName } from '@components/Icon'
import { FC } from 'react'
import './style.scss'

interface HintProps {
  tooltip: string
  iconLeft?: IconName
  iconRight?: IconName
  textLeft?: string
  textRight?: string
}


export const Hint: FC<HintProps> = ({ tooltip, iconLeft, iconRight, textLeft, textRight }) => {

  return (
    <div className="ev-hint">
      { textLeft && <p>{ textLeft }</p> }
      <div className="ev-hint-box">
        { iconLeft && <Icon name={ iconLeft } /> }
        <p>{ tooltip }</p>
        { iconRight && <Icon name={ iconRight } /> }
      </div>
      { textRight && <p>{ textRight }</p> }
    </div>
  )
}