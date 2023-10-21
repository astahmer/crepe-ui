import { defineSlotRecipe } from '@pandacss/dev'
import { cssVar } from '@pacha/shared'

// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/components/src/avatar/avatar.tsx
// https://github.com/chakra-ui/chakra-ui/blob/b904bbccab7d9c3b7ead48043b0e0652701f31f8/packages/theme/src/components/avatar.ts
// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/components/src/avatar/avatar-image.tsx

const vars = cssVar.scope('avatar', ['border-color', ['border-radius', 'token(sizes.full)'], 'bg', 'font-size', 'size'])

function getSize(size: string | number, fontSize: string | number) {
  return {
    root: {
      [vars.size.name]: size,
      [vars['font-size'].name]: fontSize,
    },
  }
}

export const avatarRecipe = defineSlotRecipe({
  className: 'avatar',
  slots: ['root', 'fallback', 'image'],
  base: {
    root: {
      bg: vars.bg.ref,
      fontSize: vars['font-size'].ref,
      color: { base: 'white', '&[data-is-bg-dark]': 'gray.800' },
      borderColor: vars['border-color'].ref,
      verticalAlign: 'top',
      width: vars.size.ref,
      height: vars.size.ref,
      '&:not([data-loaded])': {
        [vars.bg.name]: 'colors.gray.400',
      },
      [vars['border-color'].name]: 'colors.white',
      _dark: {
        [vars['border-color'].name]: 'colors.gray.800',
      },
      //
      display: 'inline-flex',
      // alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: 'medium',
      position: 'relative',
      flexShrink: 0,
      borderRadius: vars['border-radius'].ref,
    },
    fallback: {
      alignItems: 'center',
      // background: 'gray.300',
      // borderWidth: '1px',
      display: 'flex',
      fontWeight: 'semibold',
      height: 'inherit',
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: vars['border-radius'].ref,
    },
  },
  variants: {
    size: {
      '2xs': getSize('sizes.4', 'fontSizes.3xs'),
      xs: getSize('sizes.6', 'fontSizes.2xs'),
      sm: getSize('sizes.8', 'fontSizes.xs'),
      md: getSize('sizes.12', 'fontSizes.md'),
      lg: getSize('sizes.16', 'fontSizes.lg'),
      xl: getSize('sizes.24', 'fontSizes.3xl'),
      '2xl': getSize('sizes.32', 'fontSizes.4xl'),
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
