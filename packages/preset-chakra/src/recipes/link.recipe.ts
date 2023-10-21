import { defineRecipe } from '@pandacss/dev'

export const linkRecipe = defineRecipe({
  className: 'link',
  base: {
    transitionProperty: 'common',
    transitionDuration: 'fast',
    transitionTimingFunction: 'ease-out',
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    color: 'inherit',
    _hover: {
      textDecoration: 'underline',
    },
    _focusVisible: {
      boxShadow: 'outline',
    },
  },
})
