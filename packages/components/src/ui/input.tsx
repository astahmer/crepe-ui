import { PreferRight } from '@pacha/shared'
import { HTMLStyledProps, styled } from '@pacha/styled-system'
import { input, type InputVariantProps } from '@pacha/styled-system'
import { createStyleContext } from './create-style-context'
import { InputAddon } from './input-addon'
import { ComponentProps } from '@pacha/styled-system'
import { useFormControl } from './use-form-control'
import { forwardRef } from 'react'
import { FormControlOptions } from './form-control-context'

const { withProvider, withContext } = createStyleContext(input)

// export * from '@ark-ui/react/input';
interface StyleProps extends HTMLStyledProps<'input'> {}
interface JsxProps extends PreferRight<ComponentProps<'input'>, StyleProps> {}

export interface InputProps extends Omit<JsxProps, 'size'>, InputVariantProps, FormControlOptions {}

const StyledInputRoot = withProvider(styled('input'), 'field')
const InputRoot = forwardRef<'span', InputProps>(function FormErrorIcon(props, ref) {
  const fieldProps = useFormControl<HTMLInputElement>(props)

  return <StyledInputRoot ref={ref as never} {...fieldProps} />
})
InputRoot.displayName = 'Input'

const InputGroup = withProvider(styled('div'), 'group')

export const Input = Object.assign(InputRoot, {
  Root: InputRoot,
  Group: InputGroup,
  Field: withContext(styled('input'), 'field'),
  Addon: withContext(InputAddon, 'addon'),
})
