import { ComponentProps, forwardRef } from 'react'
import { HTMLStyledProps, styled } from '@pacha/styled-system'
import { TextareaVariantProps, textarea } from '@pacha/styled-system'
import { useFormControl } from './use-form-control'
import { PreferRight } from '@pacha/shared'
import { FormControlOptions } from './form-control-context'
import { ark } from '@ark-ui/react'

interface StyleProps extends HTMLStyledProps<'textarea'> {}
interface JsxProps extends PreferRight<ComponentProps<typeof ark.textarea>, StyleProps> {}

export interface TextareaProps extends Omit<JsxProps, 'size'>, TextareaVariantProps, FormControlOptions {}

const StyledTextarea = styled(ark.textarea, textarea)
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(props, ref) {
  const fieldProps = useFormControl<HTMLTextAreaElement>(props)

  return <StyledTextarea ref={ref as never} {...fieldProps} />
})
Textarea.displayName = 'Textarea'
