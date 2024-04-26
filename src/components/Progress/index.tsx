import { FC } from 'react';
import './style.scss';

interface ProgressProps {
  variant: 'circular' | 'horizontal'
  progress: number
}

export const Progress: FC<ProgressProps> = ({ progress = 0, variant = 'circular' }) => {
  const radius = 100;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="ev-progress">
      {
        variant === 'circular' && (
          <svg width="250" height="250" className='ev-progress-circular'>
            <circle r="100" cx="125" cy="125" className="ev-progress-circular-track" />
            <circle 
              r="100"
              cx="125"
              cy="125"
              className="ev-progress-circular-progress"
              strokeDasharray={ circumference }
              strokeDashoffset={ strokeDashoffset }
            />
          </svg>
        )
      }
    </div>
  )
}