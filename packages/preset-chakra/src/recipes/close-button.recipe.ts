import { defineRecipe } from '@pandacss/dev'
import { cssVar } from '@pacha/shared'

// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/theme/src/components/modal.ts
// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/components/src/close-button/close-button.tsx

const $size = cssVar.create('btn-bg')
const $bg = cssVar.create('btn-size')

export const closeButtonRecipe = defineRecipe({
  className: 'close-btn',
  base: {
    w: $size.ref,
    h: $size.ref,
    borderRadius: 'md',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
      boxShadow: 'none',
    },
    _hover: {
      [$bg.name]: 'colors.blackAlpha.100',
      _dark: {
        [$bg.name]: 'colors.whiteAlpha.100',
      },
    },
    _active: {
      [$bg.name]: 'colors.blackAlpha.200',
      _dark: {
        [$bg.name]: 'colors.whiteAlpha.200',
      },
    },
    _focusVisible: {
      boxShadow: 'outline',
    },
    bg: $bg.ref,
  },
  variants: {
    size: {
      lg: {
        [$size.name]: 'sizes.10',
        fontSize: 'md',
      },
      md: {
        [$size.name]: 'sizes.8',
        fontSize: 'xs',
      },
      sm: {
        [$size.name]: 'sizes.6',
        fontSize: '2xs',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
