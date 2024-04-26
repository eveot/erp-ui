import { Button } from '@components/Button'
import { FC, PropsWithChildren } from 'react'
import './style.scss'

interface DropdownProps {
  open?: boolean
  label?: string
}

export const Dropdown: FC<PropsWithChildren<DropdownProps>> = ({ label, open, children }) => {
  return (
    <div className="ev-dropdown" data-open={ open }>
      <Button iconRight='TbCaretDownFilled'>
        { label }
      </Button>
      <div className="ev-dropdown-content">
        { children }
      </div>
    </div>
  )
}