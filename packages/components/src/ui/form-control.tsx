import { PreferRight } from '@pacha/shared'
import { forwardRef } from 'react'
import { HTMLStyledProps, styled } from '@pacha/styled-system'
import { formControl, type FormControlVariantProps } from '@pacha/styled-system'
import { ComponentProps } from '@pacha/styled-system'
import { createFormContextElement } from './create-form-element'
import { createStyleContext } from './create-style-context'
import {
  FormControlOptions,
  FormControlProvider,
  useFormControlContext,
  useFormControlProvider,
} from './form-control-context'
import { Icon } from './icon'

const { withProvider, withContext } = createStyleContext(formControl)

// export * from '@ark-ui/react/formControl';
interface StyleProps extends HTMLStyledProps<'div'> {}
interface JsxProps extends PreferRight<ComponentProps<'div'>, StyleProps> {}

interface FormControlContext extends FormControlOptions {
  /**
   * The label text used to inform users as to what information is
   * requested for a text field.
   */
  label?: string
  /**
   * The custom `id` to use for the form control. This is passed directly to the form element (e.g, Input).
   * - The form element (e.g. Input) gets the `id`
   * - The form label id: `form-label-${id}`
   * - The form error text id: `form-error-text-${id}`
   * - The form helper text id: `form-helper-text-${id}`
   */
  id?: string
}

export interface FormControlProps extends Omit<JsxProps, 'size'>, FormControlVariantProps, FormControlContext {}

const StyledContainer = withProvider(styled('div'), 'container')

/**
 * FormControl provides context such as
 * `isInvalid`, `isDisabled`, and `isRequired` to form elements.
 *
 * This is commonly used in form elements such as `input`,
 * `select`, `textarea`, etc.
 *
 * @see Docs https://chakra-ui.com/docs/components/form-control
 */
const FormControlContainer = forwardRef<'div', FormControlProps>(function FormControl(props, ref) {
  const { getRootProps, htmlProps: _, ...context } = useFormControlProvider(props)

  return (
    <FormControlProvider value={context}>
      <StyledContainer {...getRootProps({}, ref)} />
    </FormControlProvider>
  )
})
FormControlContainer.displayName = 'FormControl'

//

export interface FormLabelProps extends HTMLStyledProps<'label'> {}
const StyledLabel = withContext(styled('label'), 'label')

// Styles taken from `packages/preset-chakra/src/recipes/form-control.recipe.ts`
// because there's no recipe extension yet
// TODO recipe extension
export const FormLabel = styled(StyledLabel, {
  base: {
    display: 'block',
    textAlign: 'start',
    //
    fontSize: 'md',
    marginEnd: '3',
    mb: '2',
    fontWeight: 'medium',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    opacity: 1,
    _disabled: {
      opacity: 0.4,
    },
  },
})

/**
 * Used to enhance the usability of form controls.
 *
 * It is used to inform users as to what information
 * is requested for a form field.
 *
 * ♿️ Accessibility: Every form field should have a form label.
 */
const FormControlLabel = createFormContextElement(StyledLabel, 'FormLabel', 'getLabelProps')

//

export interface FormRequiredIndicatorProps extends HTMLStyledProps<'span'> {}
const StyledRequiredIndicator = withContext(styled('span'), 'required-indicator')

/**
 * Used to enhance the usability of form controls.
 *
 * It is used to inform users as to what information
 * is requested for a form field.
 *
 * ♿️ Accessibility: Every form field should have a form requiredIndicator.
 */
const FormRequiredIndicator = createFormContextElement(
  StyledRequiredIndicator,
  'FormRequiredIndicator',
  'getRequiredIndicatorProps',
  (field) => field?.isRequired,
)

//

export interface FormHelperTextProps extends HTMLStyledProps<'div'> {}
const StyledHelperText = withContext(styled('div'), 'helper')

/**
 * FormHelperText
 *
 * Assistive component that conveys additional guidance
 * about the field, such as how it will be used and what
 * types in values should be provided.
 */
const FormHelperText = createFormContextElement(StyledHelperText, 'FormHelperText', 'getHelpTextProps')
// const FormHelperText = StyledHelperText;

//

export interface FormErrorProps extends HTMLStyledProps<'div'> {}
const StyledError = withContext(styled('div'), 'error')

/**
 * FormError
 *
 * Assistive component that conveys additional guidance
 * about the field, such as how it will be used and what
 * types in values should be provided.
 */
const FormError = createFormContextElement(
  StyledError,
  'FormError',
  'getErrorMessageProps',
  (field) => field?.isInvalid,
)

//

const ErrorIcon = () => (
  <path
    fill="currentColor"
    d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
  />
)

export interface FormErrorIconProps extends HTMLStyledProps<typeof Icon> {}
const StyledErrorIcon = withContext(Icon, 'error-icon')

/**
 * FormErrorIcon
 *
 * Assistive component that conveys additional guidance
 * about the field, such as how it will be used and what
 * types in values should be provided.
 */
const FormErrorIcon = forwardRef<typeof Icon, FormErrorIconProps>(function FormErrorIcon(props, ref) {
  const field = useFormControlContext()
  if (!field?.isInvalid) return null

  return (
    <StyledErrorIcon ref={ref as never} {...props}>
      <ErrorIcon />
    </StyledErrorIcon>
  )
})
FormErrorIcon.displayName = 'FormErrorIcon'

//

export const FormControl = Object.assign(FormControlContainer, {
  Container: FormControlContainer,
  Label: FormControlLabel,
  Helper: FormHelperText,
  RequiredIndicator: FormRequiredIndicator,
  Error: FormError,
  ErrorIcon: FormErrorIcon,
})
