import { cssVar } from '@pacha/shared'
import { defineSlotRecipe } from '@pandacss/dev'

// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/theme/src/components/form-control.ts
// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/theme/src/components/form-error.ts
// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/theme/src/components/form-label.ts

const vars = cssVar.scope('form', ['control-color', 'error-color'])

export const formControlRecipe = defineSlotRecipe({
  className: 'form-control',
  slots: ['container', 'required-indicator', 'helper', 'label', 'error', 'error-icon'],
  base: {
    container: {
      width: '100%',
      position: 'relative',
    },
    'required-indicator': {
      marginStart: '1',
      [vars['control-color'].name]: 'colors.red.500',
      _dark: {
        [vars['control-color'].name]: 'colors.red.300',
      },
      color: vars['control-color'].ref,
    },
    helper: {
      mt: '2',
      [vars['control-color'].name]: 'colors.gray.600',
      _dark: {
        [vars['control-color'].name]: 'colors.whiteAlpha.600',
      },
      color: vars['control-color'].ref,
      lineHeight: 'normal',
      fontSize: 'sm',
    },
    label: {
      display: 'block',
      textAlign: 'start',
      //
      fontSize: 'md',
      marginEnd: '3',
      mb: '2',
      fontWeight: 'medium',
      transitionProperty: 'common',
      transitionDuration: 'normal',
      opacity: 1,
      _disabled: {
        opacity: 0.4,
      },
    },
    error: {
      display: 'flex',
      alignItems: 'center',
      //
      [vars['error-color'].name]: `colors.red.500`,
      _dark: {
        [vars['error-color'].name]: `colors.red.300`,
      },
      color: vars['error-color'].ref,
      mt: '2',
      fontSize: 'sm',
      lineHeight: 'normal',
    },
    'error-icon': {
      marginEnd: '0.5em',
      [vars['error-color'].name]: `colors.red.500`,
      _dark: {
        [vars['error-color'].name]: `colors.red.300`,
      },
      color: vars['error-color'].ref,
    },
  },
})
