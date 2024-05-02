import { Icon, IconName } from '@components/Icon';
import { TextInfo } from '@components/TextInfo';
import { ChangeEvent, FC, useRef } from 'react';
import './style.scss';

export interface InputProps {
  type?: 'text' | 'number' | 'password'
  name?: string
  label?: string
  placeholder?: string
  value?: string | number
  size?: 'xs' | 'sm' | 'md'
  style?: 'light' | 'dark'
  invalid?: boolean
  disabled?: boolean
  iconLeft?: IconName
  iconRight?: IconName
  textInfo?: TextInfo
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  min?: number
  max?: number
}

export const Input: FC<InputProps> = ({ 
  style = 'dark',
  size = 'md',
  type = 'text',
  invalid,
  label,
  value,
  textInfo,
  iconLeft,
  iconRight,
  onChange,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const _onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (type === 'number') {
      const value = Number(event.currentTarget.value)
      event.currentTarget.value = String(value).replace(/[^\d]/g, '')
      if (props.max && value > props.max) {
        event.currentTarget.value = String(props.max)
      } else if (props.min && value < props.min) {
        event.currentTarget.value = String(props.min)
      }
    }
    onChange && onChange(event)
  }

  return (
    <div
      className="ev-input"
      data-style={ style }
      data-invalid={ invalid }
      data-size={ size }
      onClick={ () => inputRef.current?.focus() }
    >
      { label && <label>{ label }</label> }
      <div className="ev-input-wrapper">
        { iconLeft && <Icon name={ iconLeft } /> }
        <input ref={ inputRef } onChange={ _onChange } value={ value } type={ type !== 'number' ? type : 'text' } {...props} />
        { iconRight && <Icon name={iconRight } /> }
        { textInfo && <TextInfo {...textInfo} /> }
      </div>
    </div>
  )
}