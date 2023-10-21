import { styled } from '@pacha/styled-system'
import { tag } from '@pacha/styled-system'
import { createThemeStyled } from './create-theme-styled'

export const Tag = createThemeStyled(styled('span', tag), 'Tag')
