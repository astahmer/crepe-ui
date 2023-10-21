import { cssVar } from '@pacha/shared'
import { defineSlotRecipe } from '@pandacss/dev'

// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/theme/src/components/checkbox.ts
// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/components/src/checkbox/checkbox.tsx

const $size = cssVar.create('checkbox-size', '1em')

/**
 * chakra v3 parts - ark-ui slots
 *
 * @prop icon = -
 * @prop container = root
 * @prop control = control
 * @prop label = label
 */
export const checkboxRecipe = defineSlotRecipe({
  className: 'checkbox',
  slots: ['container', 'control', 'label', 'icon'],
  base: {
    container: {
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      verticalAlign: 'top',
      position: 'relative',
      //
      _disabled: { cursor: 'not-allowed' },
      //
      colorPalette: 'blue',
    },
    control: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      verticalAlign: 'top',
      userSelect: 'none',
      flexShrink: 0,
      //
      w: $size.ref,
      h: $size.ref,
      transitionProperty: 'box-shadow',
      transitionDuration: 'normal',
      border: '2px solid',
      borderRadius: 'sm',
      borderColor: 'inherit',
      color: 'white',

      _checked: {
        bg: { base: 'colorPalette.500', _dark: 'colorPalette.200' },
        borderColor: { base: 'colorPalette.500', _dark: 'colorPalette.200' },
        color: { base: 'white', _dark: 'gray.900' },

        _hover: {
          bg: { base: 'colorPalette.600', _dark: 'colorPalette.300' },
          borderColor: {
            base: 'colorPalette.600',
            _dark: 'colorPalette.300',
          },
        },

        _disabled: {
          borderColor: { base: 'gray.200', _dark: 'transparent' },
          bg: { base: 'gray.200', _dark: 'whiteAlpha.300' },
          color: { base: 'gray.500', _dark: 'whiteAlpha.500' },
        },
      },

      _indeterminate: {
        bg: { base: 'colorPalette.500', _dark: 'colorPalette.200' },
        borderColor: { base: 'colorPalette.500', _dark: 'colorPalette.200' },
        color: { base: 'white', _dark: 'gray.900' },
      },

      _disabled: {
        bg: { base: 'gray.100', _dark: 'whiteAlpha.100' },
        borderColor: { base: 'gray.100', _dark: 'transparent' },
      },

      _focusVisible: {
        boxShadow: 'outline',
      },

      _invalid: {
        borderColor: { base: 'red.500', _dark: 'red.300' },
      },
    },
    label: {
      ml: '0.5rem',
      userSelect: 'none',
      _disabled: { opacity: 0.4 },
    },
    icon: {
      animation: 'checkAnim 200ms linear',
      fontSize: $size.ref,
      color: 'var(--checkbox-icon-color, unset)',
      _indeterminate: {
        animation: 'indeterminateOpacityAnim 20ms linear, indeterminateScaleAnim 200ms linear',
      },
      //
      transitionProperty: 'transform',
      transitionDuration: 'normal',
    },
  },
  variants: {
    size: {
      sm: {
        control: { [$size.name]: 'sizes.3' },
        label: { fontSize: 'sm' },
        icon: { fontSize: '3xs' },
      },
      md: {
        control: { [$size.name]: 'sizes.4' },
        label: { fontSize: 'md' },
        icon: { fontSize: '2xs' },
      },
      lg: {
        control: { [$size.name]: 'sizes.5' },
        label: { fontSize: 'lg' },
        icon: { fontSize: '2xs' },
      },
    },
    shape: {
      circular: { control: { rounded: 'full' } },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
