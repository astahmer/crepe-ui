import { styled } from '@pacha/styled-system'
import { card } from '@pacha/styled-system'
import { createStyleContext } from './create-style-context'

const { withProvider, withContext } = createStyleContext(card)

const CardRoot = withProvider(styled('div'), 'container')
const CardBody = withContext(styled('div'), 'body')
const CardHeader = withContext(styled('div'), 'header')
const CardFooter = withContext(styled('div'), 'footer')

export const Card = Object.assign(CardRoot, {
  Root: CardRoot,
  Body: CardBody,
  Header: CardHeader,
  Footer: CardFooter,
})
