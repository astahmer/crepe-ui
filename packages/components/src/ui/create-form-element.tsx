import { forwardRef } from 'react'
import { FormContextGetterProps, FormControlProviderContext, useFormControlContext } from './form-control-context'

export const createFormContextElement = (
	BaseElement: React.ComponentType,
	elementName: string,
	getterName: FormContextGetterProps,
	conditionalCheck?: (field: FormControlProviderContext) => boolean,
) => {
	const Component = forwardRef((props: any, ref: any) => {
		const field = useFormControlContext()

		if (conditionalCheck && !conditionalCheck(field)) {
			return null
		}

		const formProps = field?.[getterName](props, ref)

		return <BaseElement {...formProps} />
	})

	Component.displayName = elementName

	return Component
}
