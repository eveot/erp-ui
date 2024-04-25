import { Icon, IconName } from '@components/Icon';
import { TextInfo } from '@components/TextInfo';
import { ChangeEventHandler, FC, useRef } from 'react';
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
  onChange?: ChangeEventHandler<HTMLInputElement>
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
        <input ref={ inputRef } onChange={ onChange } value={ value } type={ type } {...props} />
        { iconRight && <Icon name={iconRight } /> }
        { textInfo && <TextInfo {...textInfo} /> }
      </div>
    </div>
  )
}