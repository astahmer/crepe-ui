import { cssVar, calc } from '@pacha/shared'
import { defineSlotRecipe } from '@pandacss/dev'
import { switchAnatomy } from '@ark-ui/anatomy'

// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/theme/src/components/switch.ts
// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/components/src/switch/switch.tsx

const vars = cssVar.scope('switch', ['track-width', 'track-height', 'track-diff', 'thumb-x', 'bg'])
const diffValue = calc.subtract(vars['track-width'], vars['track-height'])

/**
 * chakra v3 parts - ark-ui slots
 *
 * @prop container = root
 * @prop track = control
 * @prop thumb = thumb
 * @prop input = input
 */
export const switchRecipe = defineSlotRecipe({
  className: 'switch',
  slots: switchAnatomy.keys(),
  jsx: ['Switch'],
  base: {
    root: {
      colorPalette: 'blue',
      [vars['track-diff'].name]: diffValue,
      [vars['thumb-x'].name]: vars['track-diff'].ref,
      _rtl: {
        [vars['thumb-x'].name]: calc(vars['track-diff']).negate().toString(),
      },
      //
      position: 'relative',
      verticalAlign: 'middle',
      lineHeight: 0,
      //
      display: 'inline-flex',
      alignItems: 'center',
    },
    control: {
      borderRadius: 'full',
      p: '0.5',
      width: vars['track-width'].ref,
      height: vars['track-height'].ref,
      transitionProperty: 'background, transform',
      transitionDuration: 'fast',
      [vars.bg.name]: 'colors.gray.300',
      _dark: {
        [vars.bg.name]: 'colors.whiteAlpha.400',
      },
      _focusVisible: {
        boxShadow: 'outline',
      },
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
      _checked: {
        [vars.bg.name]: `colors.colorPalette.500`,
        _dark: {
          [vars.bg.name]: `colors.colorPalette.200`,
        },
      },
      bg: vars.bg.ref,
      //
      display: 'inline-flex',
      flexShrink: 0,
      justifyContent: 'flex-start',
      boxSizing: 'content-box',
      cursor: 'pointer',
    },
    thumb: {
      bg: 'white',
      transitionProperty: 'transform',
      transitionDuration: 'normal',
      borderRadius: 'inherit',
      width: vars['track-height'].ref,
      height: vars['track-height'].ref,
      _checked: {
        transform: `translateX(${vars['thumb-x'].ref})`,
      },
    },
    label: {
      userSelect: 'none',
      marginStart: '0.5rem',
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          [vars['track-width'].name]: '1.375rem',
          [vars['track-height'].name]: 'sizes.3',
        },
      },
      md: {
        root: {
          [vars['track-width'].name]: '1.875rem',
          [vars['track-height'].name]: 'sizes.4',
        },
      },
      lg: {
        root: {
          [vars['track-width'].name]: '2.875rem',
          [vars['track-height'].name]: 'sizes.6',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
