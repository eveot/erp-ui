import { Button } from '@components/Button'
import { FC, MouseEvent, PropsWithChildren } from 'react'
import './style.scss'

interface DropdownProps {
  open?: boolean
  label?: string
  triggerSize: 'xs' | 'sm' | 'md'
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export const Dropdown: FC<PropsWithChildren<DropdownProps>> = ({ label, triggerSize = 'md', open, children }) => {
  // TODO: onMouseLeave?
  // TODO: on outer click close

  return (
    <div className="ev-dropdown" data-open={ open }>
      <Button iconRight='TbCaretDownFilled' size={ triggerSize }>
        { label }
      </Button>
      <div className="ev-dropdown-content">
        { children }
      </div>
    </div>
  )
}