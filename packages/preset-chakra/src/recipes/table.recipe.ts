import { defineSlotRecipe, defineStyles } from '@pandacss/dev'

// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/theme/src/components/table.ts

const numericStyles = defineStyles({
  '&[data-is-numeric=true]': {
    textAlign: 'end',
  },
})

export const tableRecipe = defineSlotRecipe({
  className: 'table',
  jsx: ['Table', 'Table.Container', 'Table.Root'],
  slots: ['container', 'table', 'caption', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr'],
  base: {
    // https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/components/src/table/table-container.tsx
    container: {
      display: 'block',
      whiteSpace: 'nowrap',
      WebkitOverflowScrolling: 'touch',
      overflowX: 'auto',
      overflowY: 'hidden',
      maxWidth: '100%',
    },
    table: {
      fontVariantNumeric: 'lining-nums tabular-nums',
      borderCollapse: 'collapse',
      width: 'full',
      //
      colorPalette: 'gray',
    },
    th: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 'wider',
      textAlign: 'start',
    },
    td: {
      textAlign: 'start',
    },
    caption: {
      mt: 4,
      fontFamily: 'heading',
      textAlign: 'center',
      fontWeight: 'medium',
      //   https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/components/src/table/table-caption.tsx
      captionSide: 'bottom',
    },
  },
  variants: {
    variant: {
      simple: {
        th: {
          color: { base: 'gray.600', _dark: 'gray.400' },
          borderBottom: '1px',
          borderColor: { base: `colorPalette.100`, _dark: `colorPalette.700` },
          ...numericStyles,
        },
        td: {
          borderBottom: '1px',
          borderColor: { base: `colorPalette.100`, _dark: `colorPalette.700` },
          ...numericStyles,
        },
        caption: {
          color: { base: 'gray.600', _dark: 'gray.100' },
        },
      },
      tfoot: {
        tr: {
          '&:last-of-type': {
            th: { borderBottomWidth: 0 },
          },
        },
      },
      striped: {
        th: {
          color: { base: 'gray.600', _dark: 'gray.400' },
          borderBottom: '1px',
          borderColor: { base: `colorPalette.100`, _dark: `colorPalette.700` },
          ...numericStyles,
        },
        td: {
          borderBottom: '1px',
          borderColor: { base: `colorPalette.100`, _dark: `colorPalette.700` },
          ...numericStyles,
        },
        caption: {
          color: { base: 'gray.600', _dark: 'gray.100' },
        },
        tbody: {
          '& tr:nth-of-type(odd)': {
            '& th, & td': {
              borderBottomWidth: '1px',
              borderColor: {
                base: `colorPalette.100`,
                _dark: `colorPalette.700`,
              },
            },
            '& td': {
              background: {
                base: `colorPalette.100`,
                _dark: `colorPalette.700`,
              },
            },
          },
        },
        tfoot: {
          '& tr:last-of-type': {
            th: { borderBottomWidth: 0 },
          },
        },
      },
      unstyled: {},
    },
    size: {
      sm: {
        th: {
          px: '4',
          py: '1',
          lineHeight: '4',
          fontSize: 'xs',
        },
        td: {
          px: '4',
          py: '2',
          fontSize: 'sm',
          lineHeight: '4',
        },
        caption: {
          px: '4',
          py: '2',
          fontSize: 'xs',
        },
      },
      md: {
        th: {
          px: '6',
          py: '3',
          lineHeight: '4',
          fontSize: 'xs',
        },
        td: {
          px: '6',
          py: '4',
          lineHeight: '5',
        },
        caption: {
          px: '6',
          py: '2',
          fontSize: 'sm',
        },
      },
      lg: {
        th: {
          px: '8',
          py: '4',
          lineHeight: '5',
          fontSize: 'sm',
        },
        td: {
          px: '8',
          py: '5',
          lineHeight: '6',
        },
        caption: {
          px: '6',
          py: '2',
          fontSize: 'md',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'simple',
    size: 'md',
  },
})
