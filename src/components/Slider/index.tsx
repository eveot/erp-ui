import { ChangeEvent, FC } from 'react';
import './style.scss';

interface SliderProps {
  label?: string
  style?: 'light' | 'dark'
  value?: number
  disabled?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Slider: FC<SliderProps> = ({ label, value = 0, style = 'dark', disabled, onChange }) => {

  const rangeVar = { "--track-width": `${value}%` } as React.CSSProperties;

  return (
    <div className="ev-slider" style={ rangeVar } data-style={ style }>
      <input type="range" value={ value } readOnly={ !onChange } onChange={ onChange } disabled={ disabled } />
      <p>{label}</p>
    </div>
  )
}