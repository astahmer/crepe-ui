import type { PropertyTransform } from '@pandacss/types'
import { CssVar, cssVar } from './css-var'
import { dashCase } from './utils'

export const colorMix: (...args: Parameters<PropertyTransform>) => {
  color: string
  amount: string | number
  value: string
} = (value: string, { token }) => {
  const [color, opacityAmount] = value.split('/')
  const amount = !isNaN(Number(opacityAmount)) ? Number(opacityAmount) : 100
  const colorValue = token(`colors.${color}`)
  const opacityValue = token(`opacity.${amount}`)
  const amountValue = opacityValue ? Number(opacityValue) * 100 : `${100 - amount}%`

  return {
    color: colorValue ?? color,
    amount: amountValue,
    value: `color-mix(in srgb, transparent ${amountValue}, ${colorValue})`,
  }
}

/**
 * @example tokenValue: `colorPalette.200` = `var(--colors-color-palette-200)`
 * @example tokenValue: `colorPalette.200/16` = `color-mix(in srgb, transparent var(--colors-color-palette-200)`
 */
export const colorMixVar = (tokenValue: string, fallbackVar: CssVar<string>) => {
  const [color, opacityAmount] = tokenValue.split('/')
  const amount = !isNaN(Number(opacityAmount)) ? Number(opacityAmount) : 100
  const amountValue = 100 - amount

  const colorName = dashCase(color).replace('.', '-')
  const colorVar = cssVar.create(`colors-${colorName}`)

  return {
    ref: colorVar.ref,
    colorMixValue: `color-mix(in srgb, transparent ${amountValue}%, ${colorVar.ref})` as const,
    value: `var(${fallbackVar?.name}, ${colorVar.ref})` as const,
    fallbackVar,
  }
}
