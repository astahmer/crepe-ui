// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/theme/src/components/modal.ts

import { dialogAnatomy } from '@ark-ui/anatomy'

import { defineSlotRecipe } from '@pandacss/dev'
import { cssVar } from '@crepe-ui/shared'

const $bg = cssVar.create('modal-bg')
const $shadow = cssVar.create('modal-shadow')

/**
 * Since the `maxWidth` prop references theme.sizes internally,
 * we can leverage that to size our modals.
 */
function getSize(value: string) {
	if (value === 'full') {
		return {
			content: {
				maxW: '100vw',
				minH: '100vh',
				my: '0',
				borderRadius: '0',
			},
		}
	}
	return {
		content: { maxW: value },
	}
}

/**
 * chakra v3 parts - ark-ui slots
 *
 * @prop content = dialog
 * @prop overlay = backdrop
 * @prop close = closeTrigger
 * @prop dialogContainer = container
 * @prop body = description
 * @prop header = title
 * @prop trigger = trigger
 */
export const modalRecipe = defineSlotRecipe({
	className: 'modal',
	slots: dialogAnatomy.extendWith('root', 'footer').keys(),
	base: {
		backdrop: {
			bg: 'blackAlpha.600',
			zIndex: 'modal',
			// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/components/src/modal/modal-overlay.tsx
			pos: 'fixed',
			left: '0',
			top: '0',
			w: '100vw',
			h: '100vh',
		},
		container: {
			display: 'flex',
			zIndex: 'modal',
			justifyContent: 'center',
			overscrollBehaviorY: 'none',
			// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/components/src/modal/modal-content.tsx
			width: '100vw',
			height: '100vh',
			position: 'fixed',
			left: 0,
			top: 0,
		},
		content: {
			// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/components/src/modal/modal-content.tsx
			display: 'flex',
			flexDirection: 'column',
			position: 'relative',
			width: '100%',
			outline: 0,
			// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/theme/src/components/modal.ts#L36
			borderRadius: 'md',
			color: 'inherit',
			zIndex: 'modal',
			[$bg.name]: 'colors.white', // TODO check
			[$shadow.name]: 'shadows.lg',
			_dark: {
				[$bg.name]: 'colors.gray.700',
				[$shadow.name]: 'shadows.dark-lg',
			},
			bg: $bg.ref,
			boxShadow: $shadow.ref,
			px: '6',
			py: '2',
			flex: '1',
		},
		description: {
			px: '6',
			py: '2',
			flex: '1',
		},
		title: {
			px: '6',
			py: '4',
			fontSize: 'xl',
			fontWeight: 'semibold',
			// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/components/src/modal/modal-header.tsx
			flex: 0,
		},
		closeTrigger: {
			position: 'absolute',
			top: '2',
			insetEnd: '3',
		},
		footer: {
			px: '6',
			py: '4',
			// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/components/src/modal/modal-footer.tsx
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-end',
		},
	},
	variants: {
		size: {
			xs: getSize('xs'),
			sm: getSize('sm'),
			md: getSize('md'),
			lg: getSize('lg'),
			xl: getSize('xl'),
			'2xl': getSize('2xl'),
			'3xl': getSize('3xl'),
			'4xl': getSize('4xl'),
			'5xl': getSize('5xl'),
			'6xl': getSize('6xl'),
			full: getSize('full'),
		},
		isCentered: {
			true: {
				content: {
					my: 'auto',
					mx: 'auto',
				},
				container: {
					alignItems: 'center',
				},
			},
			false: {
				content: {
					my: '16',
					mx: undefined,
				},
				container: {
					alignItems: 'flex-start',
				},
			},
		},
		scrollOverflowBehavior: {
			inside: {
				content: {
					maxH: 'calc(100% - 7.5rem)',
				},
				container: {
					overflow: 'hidden',
				},
				body: {
					overflow: 'auto',
				},
			},
			outside: {
				content: {
					maxH: undefined, // TODO unset ?
				},
				container: {
					overflow: 'auto',
				},
				body: {
					overflow: undefined, // TODO unset ?
				},
			},
		},
	},
	// https://chakra-ui.com/docs/components/modal/props
	defaultVariants: {
		size: 'md',
		isCentered: false,
		scrollOverflowBehavior: 'outside',
	},
})
