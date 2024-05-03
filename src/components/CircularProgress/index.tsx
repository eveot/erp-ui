import { FC } from 'react';
import './style.scss';

interface CircularProgressProps {
  progress: number
}

export const CircularProgress: FC<CircularProgressProps> = ({ progress = 0 }) => {
  const radius = 40;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="ev-circular-progress">
      <svg className='ev-circular-progress-svg' width="100%" height="100%" viewBox="0 0 100 100">
        <circle r={radius} cx="50" cy="50" className="ev-circular-progress-track" />
        <circle 
          r={radius}
          cx="50"
          cy="50"
          className="progress"
          strokeDasharray={ circumference }
          strokeDashoffset={ strokeDashoffset }
        />
      </svg>
    </div>
  )
}