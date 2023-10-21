import { styled } from '@pacha/styled-system'
import { kbd } from '@pacha/styled-system'
import { createThemeStyled } from './create-theme-styled'

export const Kbd = createThemeStyled(styled('span', kbd), 'Kbd')
