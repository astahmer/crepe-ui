import { defineRecipe } from '@pandacss/dev'

// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/theme/src/components/heading.ts

export const headingRecipe = defineRecipe({
  className: 'heading',
  base: {
    fontFamily: 'heading',
    fontWeight: 'bold',
  },
  variants: {
    size: {
      '4xl': { textStyle: 'heading.4xl' },
      '3xl': { textStyle: 'heading.3xl' },
      '2xl': { textStyle: 'heading.2xl' },
      xl: { textStyle: 'heading.xl' },
      lg: { textStyle: 'heading.lg' },
      md: { textStyle: 'heading.md' },
      sm: { textStyle: 'heading.sm' },
      xs: { textStyle: 'heading.xs' },
    },
  },
  defaultVariants: {
    size: 'xl',
  },
})
