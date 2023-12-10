import { defineRecipe } from '@pandacss/dev'
import { cssVar } from '@pacha/shared'

// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/theme/src/components/kbd.ts

const $bg = cssVar.create('kbd-bg')

export const kbdRecipe = defineRecipe({
	className: 'kbd',
	base: {
		[$bg.name]: 'gray.100',
		_dark: {
			[$bg.name]: 'whiteAlpha.100',
		},
		bg: $bg.ref,
		borderRadius: 'md',
		borderWidth: '1px',
		borderBottomWidth: '3px',
		fontSize: '0.8em',
		fontWeight: 'bold',
		lineHeight: 'normal',
		px: '0.4em',
		whiteSpace: 'nowrap',
	},
})
