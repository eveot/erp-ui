import { Icon, IconName } from '@components/Icon';
import { FC, PropsWithChildren, useState } from 'react';
import './style.scss';

interface TooltipProps {
  text: string
  align?: 'left' | 'right' | 'top' | 'bottom'
  iconLeft?: IconName
  iconRight?: IconName
}

export const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({ align = 'bottom', text, children, iconLeft, iconRight }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="ev-tooltip" data-show={ show } onMouseEnter={ () => setShow(true) } onMouseLeave={ () => setShow(false) }>
      { children }
      <div className="ev-tooltip-box" data-align={ align }>
        { iconLeft && <Icon name={ iconLeft } /> }
        { text }
        { iconRight && <Icon name={ iconRight } /> }
      </div>
    </div>
  )
}