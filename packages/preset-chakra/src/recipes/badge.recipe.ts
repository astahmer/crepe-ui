import { defineRecipe } from '@pandacss/dev'
import { colorMixVar, cssVar } from '@pacha/shared'

// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/components/src/layout/badge.tsx
// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/theme/src/components/badge.ts

const vars = cssVar.scope('badge', [['bg', 'inherit'], ['bg-alpha', 'inherit'], ['color', 'inherit'], 'shadow'])
const bgDark = {
  solid: colorMixVar('colorPalette.500/40', vars['bg-alpha']),
  subtle: colorMixVar('colorPalette.200/16', vars['bg-alpha']),
  outline: colorMixVar('colorPalette.200/20', vars['bg-alpha']),
}

export { vars as badgeVars }

export const badgeRecipe = defineRecipe({
  className: 'badge',
  base: {
    colorPalette: 'gray',
    px: 1,
    textTransform: 'uppercase',
    fontSize: 'xs',
    borderRadius: 'sm',
    fontWeight: 'bold',
    bg: vars.bg.ref,
    color: vars.color.ref,
    boxShadow: vars.shadow.ref,
    //
    display: 'inline-block',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
  },
  variants: {
    variant: {
      solid: {
        [vars.bg.name]: 'colors.colorPalette.500',
        [vars.color.name]: 'colors.white',
        _dark: {
          [vars['bg-alpha'].name]: bgDark.solid.colorMixValue,
          [vars.bg.name]: bgDark.solid.value,
          [vars.color.name]: 'colors.whiteAlpha.800',
        },
      },
      subtle: {
        [vars.bg.name]: 'colorPalette.100',
        [vars.color.name]: 'colors.colorPalette.800',
        _dark: {
          [vars['bg-alpha'].name]: bgDark.subtle.colorMixValue,
          [vars.bg.name]: bgDark.subtle.value,
          [vars.color.name]: 'colors.colorPalette.200',
        },
      },
      outline: {
        [vars.color.name]: 'colors.colorPalette.500',
        _dark: {
          [vars['bg-alpha'].name]: bgDark.outline.colorMixValue,
          [vars.bg.name]: bgDark.outline.value,
        },
        [vars.shadow.name]: `inset 0 0 0px 1px ${vars.color.ref}`,
      },
    },
  },
  defaultVariants: {
    variant: 'subtle',
  },
})
