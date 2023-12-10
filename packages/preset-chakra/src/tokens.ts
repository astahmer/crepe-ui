import { defineTokens } from '@pandacss/dev'
import { themeFoundations } from './foundations'
import { wrapValue } from '@pacha/shared'

export const tokens = defineTokens({
	borders: wrapValue(themeFoundations.borders),
	colors: wrapValue(themeFoundations.colors),
	fonts: wrapValue(themeFoundations.typography.fonts),
	fontSizes: wrapValue(themeFoundations.typography.fontSizes),
	fontWeights: wrapValue(themeFoundations.typography.fontWeights),
	letterSpacings: wrapValue(themeFoundations.typography.letterSpacings),
	lineHeights: wrapValue(themeFoundations.typography.lineHeights),
	shadows: wrapValue(themeFoundations.shadows),
	radii: wrapValue(themeFoundations.radii),
	sizes: wrapValue(themeFoundations.sizes),
	space: wrapValue(themeFoundations.space),
	zIndex: wrapValue(themeFoundations.zIndices),
})
