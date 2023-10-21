import { defineTextStyles } from '@pandacss/dev'

// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/theme/src/components/heading.ts

export const textStyles = defineTextStyles({
  heading: {
    '4xl': { value: { fontSize: { base: '6xl', md: '7xl' }, lineHeight: 1 } },
    '3xl': { value: { fontSize: { base: '5xl', md: '6xl' }, lineHeight: 1 } },
    '2xl': {
      value: {
        fontSize: { base: '4xl', md: '5xl' },
        lineHeight: { base: 1.2, md: 1 },
      },
    },
    xl: {
      value: {
        fontSize: { base: '3xl', md: '4xl' },
        lineHeight: { base: 1.33, md: 1.2 },
      },
    },
    lg: {
      value: {
        fontSize: { base: '2xl', md: '3xl' },
        lineHeight: { base: 1.33, md: 1.2 },
      },
    },
    md: { value: { fontSize: 'xl', lineHeight: 1.2 } },
    sm: { value: { fontSize: 'md', lineHeight: 1.2 } },
    xs: { value: { fontSize: 'sm', lineHeight: 1.2 } },
  },
})
