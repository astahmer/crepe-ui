import type { StaticCssOptions } from '@pandacss/types'

const staticCss: StaticCssOptions = {
  recipes: {
    alert: ['*'],
    avatar: ['*'],
    button: ['*'],
    card: ['*'],
    checkbox: ['*'],
    closeButton: ['*'],
    code: ['*'],
    badge: ['*'],
    formControl: ['*'],
    heading: ['*'],
    icon: ['*'],
    input: ['*'],
    kbd: ['*'],
    link: ['*'],
    modal: ['*'],
    popover: ['*'],
    select: ['*'],
    skeleton: ['*'],
    switchRecipe: ['*'],
    tabs: ['*'],
    table: ['*'],
    tag: ['*'],
    textarea: ['*'],
    tooltip: ['*'],
  },
}

const themeVarsClass = 'pacha-vars'
const cssVarRoot = `:where(.${themeVarsClass})`

export const defaultConfig = {
  // themeVarsClass,
  // prefix: 'p',
  // cssVarRoot,
  extendCssVarRoot: (root: string) => cssVarRoot.replace(')', `, ${root})`),
  staticCss,
  presets: ['@pandacss/preset-panda', '@pacha/preset-chakra'],
}
