import { FC } from 'react'

interface SelectorProps {
  type: 'text' | 'color'
}

export const Selector: FC<SelectorProps> = ({ type }) => {
  return (
    <div className="ev-selector"></div>
  )
}