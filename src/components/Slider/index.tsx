import { ChangeEvent, FC, useCallback } from 'react';
import './style.scss';

interface SliderProps {
  label?: string
  style?: 'light' | 'dark'
  value?: number
  step?: number
  disabled?: boolean
  min?: number
  max?: number
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Slider: FC<SliderProps> = ({ label, value = 0, min = 0, max, step, style = 'dark', disabled, onChange }) => {

  const calculateTrackWidth = useCallback(() => {
    if (!max) return value;
    const safeMax = Math.max(max, min);
    const relativeValue = value - min;
    const range = safeMax - min;
    const width = (relativeValue / range) * 100;
    return Math.min(Math.max(width, 0), 100);
  }, [value, max, min]);

  const rangeVar = { "--track-width": `${calculateTrackWidth()}%` } as React.CSSProperties;

  return (
    <div className="ev-slider" style={ rangeVar } data-style={ style }>
      <input
        type="range"
        value={ value }
        min={ min }
        max={ max }
        step={ step }
        readOnly={ !onChange }
        onChange={ onChange }
        disabled={ disabled }
      />
      <p>{label}</p>
    </div>
  )
}