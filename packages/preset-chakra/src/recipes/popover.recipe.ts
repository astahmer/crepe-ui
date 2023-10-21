import { popoverAnatomy } from '@ark-ui/anatomy'
import { cssVar } from '@pacha/shared'
import { defineSlotRecipe } from '@pandacss/dev'

// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/theme/src/components/popover.ts

const vars = cssVar.scope('popper', ['bg', 'arrow-bg', 'arrow-shadow-color'])
const arrow = cssVar.scope('arrow', ['size', 'size-half', 'background', 'offset'])

/**
 * chakra v3 parts - ark-ui slots
 *
 * @prop popper = positioner
 * @prop content = content
 * @prop header = title
 * @prop body = description
 * @prop trigger = trigger
 * @prop closeButton = closeTrigger
 * @prop arrow = arrow
 * @prop - = arrowTip
 * @prop - = anchor
 */
export const popoverRecipe = defineSlotRecipe({
  className: 'popover',
  slots: popoverAnatomy.extendWith('footer').keys(),
  base: {
    positioner: {
      position: 'relative',
      zIndex: 'popover',
    },
    content: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      //
      [vars.bg.name]: `colors.white`,
      bg: vars.bg.ref,
      [vars['arrow-bg'].name]: vars.bg.ref,
      [vars['arrow-shadow-color'].name]: `colors.gray.200`,
      _dark: {
        [vars.bg.name]: `colors.grayDark.800`,
        [vars['arrow-shadow-color'].name]: `colors.whiteAlpha.300`,
      },
      width: 'xs',
      border: '1px solid',
      borderColor: 'inherit',
      borderRadius: 'md',
      boxShadow: 'sm',
      zIndex: 'inherit',
      _focusVisible: {
        outline: 0,
        boxShadow: 'outline',
      },
      // |
      // v from Park-UI
      _open: {
        animation: 'fade-in 0.25s ease-out',
      },
      _closed: {
        animation: 'fade-out 0.2s ease-out',
      },
    },
    title: {
      px: 3,
      py: 2,
      borderBottomWidth: '1px',
    },
    description: {
      px: 3,
      py: 2,
    },
    footer: {
      px: 3,
      py: 2,
      borderTopWidth: '1px',
    },
    closeTrigger: {
      position: 'absolute',
      borderRadius: 'md',
      top: 1,
      insetEnd: 2,
      padding: 2,
    },
    arrow: {
      // this is from Ark-UI/ZagJS
      // https://github.com/chakra-ui/zag/blob/9a3a82f0b3738beda59c313fafd51360e6b0322f/website/data/components/popover.mdx#L246
      // https://github.com/chakra-ui/zag/blob/3765f9d6e75465475a4823a3b36d771796fc901a/packages/utilities/popper/src/middleware.ts#L10
      // https://github.com/chakra-ui/zag/blob/9a3a82f0b3738beda59c313fafd51360e6b0322f/website/data/components/tooltip.mdx#L261
      [arrow.size.name]: 'sizes.3',
      [arrow.background.name]: vars['arrow-bg'].ref,
    },
    arrowTip: {
      borderTopWidth: '1px',
      borderLeftWidth: '1px',
    },
  },
})
