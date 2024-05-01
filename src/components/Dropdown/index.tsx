import { Button } from '@components/Button'
import { useOuterClick } from '@hooks/useOuterClick'
import { FC, PropsWithChildren } from 'react'
import './style.scss'

interface DropdownProps {
  open?: boolean
  label?: string
  triggerSize?: 'xs' | 'sm' | 'md'
  triggerCentered?: boolean
  onOpen?: () => void
  onClose?: () => void
}

export const Dropdown: FC<PropsWithChildren<DropdownProps>> = ({ label, triggerSize, triggerCentered = false, open, children, onOpen, onClose }) => {

  const { ref } = useOuterClick<HTMLDivElement>(() => onClose && onClose())

  return (
    <div className="ev-dropdown" ref={ ref } data-open={ open } onClick={ open ? onClose : onOpen }>
      <Button iconRight='TbCaretDownFilled' size={ triggerSize } centered={ triggerCentered }>
        { label }
      </Button>
      <div className="ev-dropdown-content">
        { children }
      </div>
    </div>
  )
}