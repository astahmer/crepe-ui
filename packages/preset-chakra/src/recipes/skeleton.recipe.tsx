import { defineRecipe } from '@pandacss/dev'
import { cssVar } from '@pacha/shared'

import { cssVariables } from '../vars'

// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/theme/src/components/skeleton.ts
// https://github.com/chakra-ui/chakra-ui/blob/b904bbccab7d9c3b7ead48043b0e0652701f31f8/packages/components/src/skeleton/skeleton.tsx

const $speed = cssVar.create('skeleton-speed', '0.8s')

export const skeletonRecipe = defineRecipe({
	className: 'skeleton',
	base: {
		// https://github.com/chakra-ui/chakra-ui-docs/blob/7e0869341db671880ea08ec74b84a93817f32845/configs/sandpack-contents/component-theming/skeleton.js#L116
		h: '20px',
		//
		[cssVariables.skeleton['start-color'].name]: 'colors.gray.100',
		[cssVariables.skeleton['end-color'].name]: 'colors.gray.400',
		_dark: {
			[cssVariables.skeleton['start-color'].name]: 'colors.gray.800',
			[cssVariables.skeleton['end-color'].name]: 'colors.gray.600',
		},
		background: cssVariables.skeleton['start-color'].ref,
		borderColor: cssVariables.skeleton['end-color'].ref,
		opacity: 0.7,
		borderRadius: 'sm',
		//
		boxShadow: 'none',
		backgroundClip: 'padding-box',
		cursor: 'default',
		pointerEvents: 'none',
		userSelect: 'none',
		'&::before, &::after, *': {
			visibility: 'hidden',
		},
		//
		animation: `${$speed.ref} linear infinite alternate skeleton-bg-fade`,
	},
})
