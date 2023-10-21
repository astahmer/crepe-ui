import { styled } from '@pacha/styled-system'
import { heading } from '@pacha/styled-system'
import { createThemeStyled } from './create-theme-styled'

// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/theme/src/components/heading.ts

export const Heading = createThemeStyled(styled('h2', heading), 'Heading')
