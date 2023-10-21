import { styled } from '@pacha/styled-system'
import type { ComponentPropsWithoutRef } from 'react'

export interface ButtonIconProps extends ComponentPropsWithoutRef<typeof styled.span> {}
export const ButtonIcon = styled(styled.span, {
  base: {
    display: 'inline-flex',
    alignSelf: 'center',
    flexShrink: 0,
  },
})
