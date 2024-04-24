<<<<<<<< HEAD:src/legacycomponents/ButtonLegacy/index.tsx
import './Button.scss';

export interface ButtonProps {
  children: string | JSX.Element | JSX.Element[];
  onClick: () => void;
  disabled?: boolean;
  mode?: 'default' | 'primary' | 'white';
  size?: 'sm' | 'lg' | 'md' | 'xlg';
  icon?: {
    value: JSX.Element,
    position: 'right' | 'left'
  }
}
/**
 * @deprecated
 */
export const ButtonLegacy = ({
                  icon,
                  mode = 'default',
                  size = 'lg',
                  disabled = false,
                  onClick,
                  children,
                }: ButtonProps) => {

  return (
    <button
      onClick={onClick}
      className={
        [
          "ev-button",
          `ev-button-mode--${mode}`,
          `ev-button-size--${size}`,
          disabled && `ev-button-disabled--${mode}`
        ].join(' ')
      }
    >
      { icon && icon.position === 'left' && icon.value }
      { children }
      { icon && icon.position === 'right' && icon.value }
    </button>
  );
};
========
import { Icon, IconName } from '@components/Icon'
import { FC, PropsWithChildren } from 'react'
import './style.scss'

// "prop?" - because Partial<> broke the doc page
export interface ButtonProps {
  dataStyle?: 'dark' | 'light'
  dataSize?: 'xs' | 'sm' | 'md'
  iconLeft?: IconName
  iconRight?: IconName
  disabled?: boolean
  active?: boolean
  onClick?: () => void
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  dataStyle = 'dark',
  dataSize = 'md',
  iconLeft,
  iconRight,
  disabled,
  active,
  ...props
}) => {

  const getIconColor = () => {
    if (active && !disabled) return 'white'
    if (dataStyle === 'dark' && disabled) return '#515356'
    if (dataStyle === 'light' && disabled) return '#D7D7D7'
    return dataStyle === 'light' ? 'black' : 'white'
  }
  
  return (  
    <button className="ev-button" data-style={dataStyle} data-size={dataSize} disabled={disabled} data-active={active} {...props}>
      { iconLeft && <Icon name={iconLeft} color={getIconColor()} /> }
      {children}
      { iconRight && <Icon name={iconRight} color={getIconColor()} /> }
    </button>
  )
}
>>>>>>>> c94bd08a77b26691ff899fcf9b5d2923cc5cbfcb:src/components/Button/Button.tsx
