import { SVGProps } from 'react'

type EvIconProps = SVGProps<SVGSVGElement>

export const EvDollar = (props: EvIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.2519 8.07812V10.9381L10.2419 10.5881C9.73187 10.4081 9.42188 10.2381 9.42188 9.36812C9.42188 8.65812 9.95188 8.07812 10.6019 8.07812H11.2519Z" fill="currentColor"/>
    <path d="M14.58 14.6286C14.58 15.3386 14.05 15.9186 13.4 15.9186H12.75V13.0586L13.76 13.4086C14.27 13.5886 14.58 13.7586 14.58 14.6286Z" fill="currentColor"/>
    <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 19.83 4.17 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 4.17 19.83 2 16.19 2ZM14.26 12C15.04 12.27 16.08 12.84 16.08 14.63C16.08 16.17 14.88 17.42 13.4 17.42H12.75V18C12.75 18.41 12.41 18.75 12 18.75C11.59 18.75 11.25 18.41 11.25 18V17.42H10.89C9.25 17.42 7.92 16.03 7.92 14.33C7.92 13.92 8.25 13.58 8.67 13.58C9.08 13.58 9.42 13.92 9.42 14.33C9.42 15.21 10.08 15.92 10.89 15.92H11.25V12.53L9.74 12C8.96 11.73 7.92 11.16 7.92 9.37C7.92 7.83 9.12 6.58 10.6 6.58H11.25V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V6.58H13.11C14.75 6.58 16.08 7.97 16.08 9.67C16.08 10.08 15.75 10.42 15.33 10.42C14.92 10.42 14.58 10.08 14.58 9.67C14.58 8.79 13.92 8.08 13.11 8.08H12.75V11.47L14.26 12Z" 
    fill="currentColor"/>
  </svg>
)

export const EvFlagRU = (props: EvIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-ru" viewBox="0 0 640 480" {...props}>
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#fff" d="M0 0h640v480H0z"/>
      <path fill="#0039a6" d="M0 160h640v320H0z"/>
      <path fill="#d52b1e" d="M0 320h640v160H0z"/>
    </g>
  </svg>
)

export const EvFlagPL = (props: EvIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-pl" viewBox="0 0 640 480" {...props}>
    <g fillRule="evenodd">
      <path fill="#fff" d="M640 480H0V0h640z"/>
      <path fill="#dc143c" d="M640 480H0V240h640z"/>
    </g>
  </svg>
)

export const EvFlagUS = (props: EvIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-us" viewBox="0 0 640 480" {...props}>
    <path fill="#bd3d44" d="M0 0h640v480H0"/>
    <path stroke="#fff" strokeWidth="37" d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"/>
    <path fill="#192f5d" d="M0 0h364.8v258.5H0"/>
    <marker id="us-a" markerHeight="30" markerWidth="30">
      <path fill="#fff" d="m14 0 9 27L0 10h28L5 27z"/>
    </marker>
    <path fill="none" markerMid="url(#us-a)" d="m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60z"/>
  </svg>
)