import { Icon, IconName } from '@components/Icon';
import { TextInfo } from '@components/TextInfo';
import { ChangeEvent, FC, useRef } from 'react';
import './style.scss';

export interface InputProps {
  type: 'text' | 'number' | 'password'
  name?: string
  label?: string
  placeholder?: string
  value?: string
  size?: 'xs' | 'sm' | 'md'
  style?: 'light' | 'dark'
  invalid?: boolean
  disabled?: boolean
  leftIcon?: IconName
  rightIcon?: IconName
  textInfo: TextInfo
  onChange?: (value: string) => void
}

export const Input: FC<InputProps> = ({ style = 'dark', size = 'md', invalid, label, onChange, textInfo, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value)
    }
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
        <Icon name='TbMap' />
        <input ref={ inputRef } onChange={onInputChange} {...props} />
        <Icon name='TbSearch' />
        { textInfo && <TextInfo {...textInfo} /> }
      </div>
    </div>
  )
}