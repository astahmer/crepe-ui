import { styled } from '@pacha/styled-system'
import { code } from '@pacha/styled-system'
import { createThemeStyled } from './create-theme-styled'

export const Code = createThemeStyled(styled('code', code), 'Code')
