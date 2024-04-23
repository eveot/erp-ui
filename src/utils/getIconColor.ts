

export type ColorVariant = {
  color: string
  value?: boolean
}

export type IconColorVariants = {
  [key: string]: ColorVariant
}

/**
 * @description use this to make `react-icons` correctly change the color of the **filled** icons
 * @param variant priority works
 */
export const getIconColor = (variants: IconColorVariants) => {
  const color = Object.keys(variants).find(key => variants[key].value === true && variants[key].color)
  return color ? variants[color].color : 'currentColor'
}