import { styled } from '@pacha/styled-system'
import { badge } from '@pacha/styled-system'
import { createThemeStyled } from './create-theme-styled'

export const Badge = createThemeStyled(styled('span', badge), 'Badge')
