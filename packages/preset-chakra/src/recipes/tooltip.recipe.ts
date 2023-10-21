import { tooltipAnatomy } from '@ark-ui/anatomy'
import { cssVar } from '@pacha/shared'
import { defineSlotRecipe } from '@pandacss/dev'

// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/theme/src/components/tooltip.ts

const vars = cssVar.scope('tooltip', ['bg', 'fg', 'arrow-bg'])
const arrow = cssVar.scope('arrow', ['size', 'size-half', 'background', 'offset'])

export { vars as tooltipVars }

export const tooltipRecipe = defineSlotRecipe({
  className: 'tooltip',
  slots: tooltipAnatomy.keys(),
  base: {
    positioner: {
      [vars['arrow-bg'].name]: vars.bg.ref,
      [vars.bg.name]: 'colors.gray.700',
      [vars.fg.name]: 'colors.whiteAlpha.900',
      _dark: {
        [vars.bg.name]: 'colors.gray.300',
        [vars.fg.name]: 'colors.gray.900',
      },
    },
    content: {
      bg: vars.bg.ref,
      color: vars.fg.ref,
      px: '2',
      py: '0.5',
      borderRadius: 'sm',
      fontWeight: 'medium',
      fontSize: 'sm',
      boxShadow: 'md',
      maxW: 'xs',
      zIndex: 'tooltip',
      _open: {
        animation: 'fade-in 0.25s ease-out',
      },
      _closed: {
        animation: 'fade-out 0.2s ease-out',
      },
    },
    arrow: {
      // this is from Ark-UI/ZagJS
      // https://github.com/chakra-ui/zag/blob/9a3a82f0b3738beda59c313fafd51360e6b0322f/website/data/components/tooltip.mdx#L261
      [arrow.size.name]: 'sizes.3',
      [arrow.background.name]: vars['arrow-bg'].ref,
    },
    arrowTip: {
      _open: {
        animation: 'fade-in 0.25s ease-out',
      },
      _closed: {
        animation: 'fade-out 0.2s ease-out',
      },
    },
  },
})
