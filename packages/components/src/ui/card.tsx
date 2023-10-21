import { styled } from '@pacha/styled-system'
import { card } from '@pacha/styled-system'
import { createStyleContext } from './create-style-context'
import { createThemeStyled } from './create-theme-styled'

const { withProvider, withContext } = createStyleContext(card)

const CardRoot = createThemeStyled(withProvider(styled('div'), 'container'), 'Card')
const CardBody = withContext(styled('div'), 'body')
const CardHeader = withContext(styled('div'), 'header')
const CardFooter = withContext(styled('div'), 'footer')

export const Card = Object.assign(CardRoot, {
  Root: CardRoot,
  Body: CardBody,
  Header: CardHeader,
  Footer: CardFooter,
})
