import { FC } from 'react';
import './style.scss';

export interface InputProps {
  type: 'text' | 'number' | 'password'
  name?: string
  label?: string
  placeholder?: string
  value?: string
  size?: 'sm' | 'lg' | 'md'
  style?: 'light' | 'dark'
  onChange?: (value: string) => void
}

export const Input: FC<InputProps> = ({ type, label, style = 'dark' }) => {
  return (
    <div className="ev-input" data-style={ style }>
      { label && <label>{ label }</label> }
      <input type={ type } />
    </div>
  )
}