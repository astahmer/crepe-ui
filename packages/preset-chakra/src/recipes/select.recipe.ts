import { selectAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'
import { inputRecipe } from './input.recipe'
import { cssVar } from '@pacha/shared'

// most of this recipe is from Park-UI as the Chakra-UI select is very different
// Chakra's select is a native select styled like a Chakra Input
// Whereas Park-UI's (which is from Ark-UI) select is a custom select with a custom dropdown
// slight tweaks, used borderRadius md instead of sm
// I removed the Park-UI semantic token usage tho (things like fg.muted, border.accent, bg.subtle etc)

// https://github.com/cschroeter/park-ui/blob/1320a779d8ec2e6b6a0f9eeb9a9658aef4e2ea6f/packages/presets/src/theme/recipes/select.ts#L4
// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/theme/src/components/select.ts

const vars = cssVar.scope('select', ['bg'])
const $bg = vars.bg

export const selectRecipe = defineSlotRecipe({
  className: 'select',
  description: 'A select style',
  slots: selectAnatomy.keys(),
  base: {
    root: {
      colorPalette: 'gray',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5',
      width: 'full',
    },
    content: {
      // also need this one since the content will be inside a Portal
      colorPalette: 'gray',
      bg: { base: 'white', _dark: 'colorPalette.900' },
      borderRadius: 'md',
      borderWidth: '1px',
      boxShadow: 'sm',
      display: 'flex',
      flexDirection: 'column',
      _hidden: {
        display: 'none',
      },
      _open: {
        animation: 'fade-in 0.25s ease-out',
      },
      _closed: {
        animation: 'fade-out 0.2s ease-out',
      },
      _focusVisible: {
        outlineOffset: '2px',
        outline: '2px solid',
        outlineColor: { base: 'colorPalette.600', _dark: 'colorPalette.400' },
      },
    },
    item: {
      alignItems: 'center',
      borderRadius: 'xs',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      transitionDuration: 'fast',
      transitionProperty: 'background, color',
      transitionTimingFunction: 'default',
      _hover: {
        background: { base: 'colorPalette.100', _dark: 'colorPalette.800' },
      },
      _highlighted: {
        background: { base: 'colorPalette.100', _dark: 'colorPalette.800' },
      },
      _disabled: {
        colorAlpha: { base: 'gray.300', _dark: 'gray.300/50' },
        cursor: 'not-allowed',
        _hover: {
          background: 'transparent',
        },
      },
    },
    itemGroupLabel: {
      fontWeight: 'semibold',
      textStyle: 'sm',
    },
    itemIndicator: {
      color: 'accent.default',
    },
    label: {
      color: { base: 'colorPalette.700', _dark: 'colorPalette.200' },
      fontWeight: 'medium',
    },
    trigger: {
      // the only part that is from Chakra-UI
      ...inputRecipe.base?.field,
      appearance: 'none',
      paddingBottom: '1px',
      lineHeight: 'normal',
      bg: $bg.ref,
      [$bg.name]: 'colors.white',
      _dark: {
        [$bg.name]: 'colors.colorPalette.700',
      },
      alignItems: 'center',
      borderColor: { base: 'colorPalette.300', _dark: 'colorPalette.700' },
      borderRadius: 'md',
      cursor: 'pointer',
      display: 'inline-flex',
      justifyContent: 'space-between',
      outline: 0,
      position: 'relative',
      transitionDuration: 'normal',
      transitionProperty: 'background, box-shadow, border-color',
      transitionTimingFunction: 'default',
      width: 'full',
      _placeholderShown: {
        color: { base: 'colorPalette.500', _dark: 'colorPalette.400' },
      },
      '& :where(svg)': {
        color: { base: 'colorPalette.500', _dark: 'colorPalette.400' },
      },
    },
  },
  variants: {
    variant: {
      outline: {
        trigger: {
          bg: { base: 'white', _dark: 'colorPalette.800' },
          borderWidth: '1px',
          _focus: {
            borderColor: {
              base: 'colorPalette.200',
              _dark: 'colorPalette.800',
            },
            boxShadow: 'accent',
          },
        },
      },
      ghost: {
        trigger: {
          _hover: {
            background: { base: 'colorPalette.100', _dark: 'colorPalette.900' },
          },
          _focus: {
            background: { base: 'colorPalette.100', _dark: 'colorPalette.900' },
          },
        },
      },
    },
    size: {
      sm: {
        content: { p: '0.5', gap: '1' },
        item: { textStyle: 'sm', px: '2', height: '9' },
        itemIndicator: {
          '& :where(svg)': {
            width: '4',
            height: '4',
          },
        },
        itemGroupLabel: {
          px: '2',
          py: '1.5',
        },

        label: { textStyle: 'sm' },
        trigger: {
          px: '2.5',
          h: '9',
          minW: '9',
          fontSize: 'sm',
          gap: '2',
          '& :where(svg)': {
            width: '4',
            height: '4',
          },
        },
      },
      md: {
        content: { p: '1', gap: '1' },
        item: { textStyle: 'md', px: '2', height: '10' },
        itemIndicator: {
          '& :where(svg)': {
            width: '4',
            height: '4',
          },
        },
        itemGroupLabel: {
          px: '2',
          py: '1.5',
        },
        label: { textStyle: 'sm' },
        trigger: {
          px: '3',
          h: '10',
          minW: '10',
          fontSize: 'md',
          gap: '2',
          '& :where(svg)': {
            width: '4',
            height: '4',
          },
        },
      },
      lg: {
        content: { p: '1.5', gap: '1' },
        item: { textStyle: 'md', px: '2', height: '11' },
        itemIndicator: {
          '& :where(svg)': {
            width: '5',
            height: '5',
          },
        },
        itemGroupLabel: {
          px: '2',
          py: '1.5',
        },
        label: { textStyle: 'sm' },
        trigger: {
          px: '3.5',
          h: '11',
          minW: '11',
          fontSize: 'md',
          gap: '2',
          '& :where(svg)': {
            width: '5',
            height: '5',
          },
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
})
