import { defaultConfig } from '@pacha/shared'
import { defineGlobalStyles } from '@pandacss/dev'

export const globalStyles = defineGlobalStyles({
  [`${defaultConfig.cssVarRoot} body`]: {
    fontFamily: 'body', // TODO
    color: 'chakra-body-text',
    bg: 'chakra-body-bg',
    transitionProperty: 'background-color',
    transitionDuration: 'normal',
    lineHeight: 'base',
  },
  [`${defaultConfig.cssVarRoot} *::placeholder`]: {
    color: 'chakra-placeholder-color',
  },
  [`${defaultConfig.cssVarRoot} *, *::before, &::after`]: {
    borderColor: 'chakra-border-color',
  },
})
