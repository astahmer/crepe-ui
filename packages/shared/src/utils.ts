// https://github.com/chakra-ui/panda/blob/55eb7cce8a351bbe678edc15fb00d0d4b604576f/packages/shared/src/css-var.ts
const dashCaseRegex = /[A-Z]/g
export function dashCase(string: string) {
	return string.replace(dashCaseRegex, (match) => `-${match.toLowerCase()}`)
}

// https://github.com/chakra-ui/chakra-ui/blob/b904bbccab7d9c3b7ead48043b0e0652701f31f8/packages/utilities/src/common.ts

export const ariaAttr = (condition: boolean | undefined) => (condition ? true : undefined)

type Booleanish = boolean | 'true' | 'false'
export const dataAttr = (condition: boolean | undefined) => (condition ? '' : undefined) as Booleanish

type Args<T extends Function> = T extends (...args: infer R) => any ? R : never

export function callAllHandlers<T extends (event: any) => void>(...fns: (T | undefined)[]) {
	return function func(event: Args<T>[0]) {
		fns.some((fn) => {
			fn?.(event)
			return event?.defaultPrevented
		})
	}
}

export function getInitials(name: string) {
	const names = name.split(' ')
	const firstName = names[0] ?? ''
	const lastName = names.length > 1 ? names[names.length - 1] : ''
	return firstName && lastName ? `${firstName.charAt(0)}${lastName.charAt(0)}` : firstName.charAt(0)
}
