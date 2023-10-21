import * as Ark from '@ark-ui/react/avatar'
import { HTMLStyledProps, styled } from '@pacha/styled-system'
import { avatar, type AvatarVariantProps } from '@pacha/styled-system'
import { createStyleContext } from './create-style-context'
import { PreferRight } from '@pacha/shared'

import { ComponentProps, ForwardRefExoticComponent } from 'react'
import type * as zag from '@zag-js/avatar'
import { type Optional } from './types'
import { createThemeStyled } from './create-theme-styled'

const { withProvider, withContext } = createStyleContext(avatar)

// export * from '@ark-ui/react/avatar';

interface StyleProps extends HTMLStyledProps<typeof Ark.Avatar.Root> {}
interface JsxProps extends PreferRight<Ark.AvatarProps, StyleProps> {}

export interface AvatarProps extends JsxProps, AvatarVariantProps {}

// Ark-UI doesn't (yet ?) expose the UseXXXProps and we need it for tsc .d.ts
// https://github.com/microsoft/TypeScript/issues/47663
// https://github.com/chakra-ui/ark/blob/ba18a28ac8dae026d2489e6fb19d4064beaeb407/packages/frameworks/react/src/avatar/use-avatar.ts
interface UseAvatarProps extends Optional<zag.Context, 'id'> {}

// and that means we also have to cast this one
const AvatarRoot = createThemeStyled(
  withProvider(styled(Ark.Avatar.Root as ForwardRefExoticComponent<ComponentProps<'div'> & UseAvatarProps>), 'root'),
  'Avatar',
)

const AvatarFallback = withContext(styled(Ark.Avatar.Fallback), 'fallback')
const AvatarImage = withContext(styled(Ark.Avatar.Image), 'image')

export const Avatar = Object.assign(AvatarRoot, {
  Root: AvatarRoot,
  Fallback: AvatarFallback,
  Image: AvatarImage,
})
