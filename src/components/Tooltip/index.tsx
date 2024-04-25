import { FC, PropsWithChildren, useState } from 'react';
import './style.scss';

interface TooltipProps {
  text: string
  align?: 'left' | 'right' | 'top' | 'bottom'
}

export const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({ align, text, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="ev-tooltip" data-show={ show } onMouseEnter={ () => setShow(true) } onMouseLeave={ () => setShow(false) }>
      { children }
      <div className="ev-tooltip-box" data-align={ align }>
        { text }
      </div>
    </div>
  )
}