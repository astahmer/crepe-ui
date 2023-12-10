import { defineRecipe } from '@pandacss/dev'
import { badgeRecipe, badgeVars } from './badge.recipe'

// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/theme/src/components/code.ts
// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/components/src/layout/code.tsx

export const codeRecipe = defineRecipe({
	className: 'code',
	base: {
		fontFamily: 'mono',
		fontSize: 'sm',
		px: '0.2em',
		borderRadius: 'sm',
		bg: badgeVars.bg.ref,
		color: badgeVars.color.ref,
		boxShadow: badgeVars.shadow.ref,
	},
	variants: badgeRecipe.variants,
	defaultVariants: badgeRecipe.defaultVariants,
})
