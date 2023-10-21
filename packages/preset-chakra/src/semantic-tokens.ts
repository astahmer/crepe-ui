import { defineSemanticTokens } from '@pandacss/dev'

export const semanticTokens = defineSemanticTokens({
  colors: {
    // https://github.com/chakra-ui/chakra-ui/blob/v3/packages/theme/src/semantic-tokens.ts#L3
    'chakra-body-text': {
      value: { base: '{colors.gray.800}', _dark: '{colors.whiteAlpha.900}' },
    },
    'chakra-body-bg': { value: { base: 'white', _dark: '{colors.gray.800}' } },
    'chakra-border-color': {
      value: { base: '{colors.gray.200}', _dark: '{colors.whiteAlpha.300}' },
    },
    'chakra-inverse-text': {
      value: { base: 'white', _dark: '{colors.gray.800}' },
    },
    'chakra-subtle-bg': {
      value: { base: '{colors.gray.100}', _dark: '{colors.gray.700}' },
    },
    'chakra-subtle-text': {
      value: { base: '{colors.gray.600}', _dark: '{colors.gray.400}' },
    },
    'chakra-placeholder-color': {
      value: { base: '{colors.gray.500}', _dark: '{colors.whiteAlpha.400}' },
    },
    background: {
      value: { base: '{colors.white}', _dark: '{colors.gray.800}' },
    },
    // https://github.com/chakra-ui/chakra-ui-docs/blob/71d44a6de8de3a221222f9b0cc2a4fc13916929e/theme.ts#L14
    foreground: {
      value: { base: '{colors.gray.700}', _dark: '{colors.gray.100}' },
    },
    // Used when implementing components that do not exist in Chakra UI but does in Ark-UI
    // made some slight tweaks to the colors (gray-palette -> gray)
    // https://github.com/cschroeter/park-ui/blob/1320a779d8ec2e6b6a0f9eeb9a9658aef4e2ea6f/packages/presets/src/theme/semantic-tokens.ts#L4
    bg: {
      canvas: {
        value: {
          base: '{colors.gray.25}',
          _dark: '{colors.gray.950}',
        },
      },
      default: {
        value: { base: '{colors.white}', _dark: '{colors.gray.800}' },
      },
      subtle: {
        value: {
          base: '{colors.gray.100}',
          _dark: '{colors.gray.900}',
        },
      },
      muted: {
        value: {
          base: '{colors.gray.200}',
          _dark: '{colors.gray.800}',
        },
      },
      emphasized: {
        value: {
          base: '{colors.gray.300}',
          _dark: '{colors.gray.600}',
        },
      },
      disabled: {
        value: {
          base: '{colors.gray.200}',
          _dark: '{colors.gray.700}',
        },
      },
    },
    fg: {
      default: {
        value: { base: '{colors.gray.950}', _dark: '{colors.white}' },
      },
      emphasized: {
        value: {
          base: '{colors.gray.700}',
          _dark: '{colors.gray.200}',
        },
      },
      muted: {
        value: {
          base: '{colors.gray.600}',
          _dark: '{colors.gray.300}',
        },
      },
      subtle: {
        value: {
          base: '{colors.gray.500}',
          _dark: '{colors.gray.400}',
        },
      },
      disabled: {
        value: {
          base: '{colors.gray.300}',
          _dark: '{colors.gray.700}',
        },
      },
    },
    accent: {
      default: {
        value: { base: '{colors.gray.950}', _dark: '{colors.white}' },
      },
      emphasized: {
        value: {
          base: '{colors.gray.800}',
          _dark: '{colors.gray.200}',
        },
      },
      fg: {
        value: { base: '{colors.white}', _dark: '{colors.gray.950}' },
      },
    },

    border: {
      default: {
        value: {
          base: '{colors.gray.200}',
          _dark: '{colors.gray.800}',
        },
      },
      emphasized: {
        value: {
          base: '{colors.gray.300}',
          _dark: '{colors.gray.700}',
        },
      },
      outline: {
        value: {
          base: '{colors.gray.600}',
          _dark: '{colors.gray.400}',
        },
      },
      accent: {
        value: { base: '{colors.gray.900}', _dark: '{colors.white}' },
      },
      disabled: {
        value: {
          base: '{colors.gray.200}',
          _dark: '{colors.gray.800}',
        },
      },
    },
  },
  shadows: {
    accent: {
      value: '0 0 0 1px {colors.border.accent}',
    },
    outline: {
      value: '0 0 0 1px {colors.border.outline}',
    },
    xs: {
      value: {
        base: '0px 1px 2px rgba(23, 23, 23,  0.1)',
        _dark: '0px 1px 2px rgba(0, 0, 0, 1.0)',
      },
    },
    sm: {
      value: {
        base: '0px 2px 4px rgba(23, 23, 23,  0.1)',
        _dark: '0px 2px 4px rgba(0, 0, 0, 1.0)',
      },
    },
    md: {
      value: {
        base: '0px 4px 8px rgba(23, 23, 23,  0.1)',
        _dark: '0px 4px 8px rgba(0, 0, 0, 1.0)',
      },
    },
    lg: {
      value: {
        base: '0px 8px 16px rgba(23, 23, 23,  0.1)',
        _dark: '0px 8px 16px rgba(0, 0, 0, 1.0)',
      },
    },
    xl: {
      value: {
        base: '0px 16px 24px rgba(23, 23, 23,  0.1)',
        _dark: '0px 16px 24px rgba(0, 0, 0, 1.0)',
      },
    },
  },
})
