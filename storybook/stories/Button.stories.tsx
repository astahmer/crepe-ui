import { Button } from '@pacha/components'
import { Stack } from '@pacha/styled-system/jsx'
import { button } from '@pacha/styled-system/recipes'
import type { Meta, StoryObj } from '@storybook/react'

const variantMapToStorybookSelect = (variantMap: Record<string, string[]>) => {
	const controls = {} as Record<string, any>
	Object.entries(variantMap).forEach(([key, value]) => {
		controls[key] = { control: 'select', options: value }
	})

	return controls
}

const argTypes = variantMapToStorybookSelect(button.variantMap)

const meta = {
	title: 'Components/Button',
	component: Button,
	argTypes,
	args: {
		children: 'Hello 🐼!',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: {} }

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Variants: Story = {
	render: () => {
		return (
			<Stack gap="2">
				{Object.entries(button.variantMap).map(([key, value]) => {
					return (
						<div key={key}>
							{key}
							<Stack direction="row" key={value} gap="2">
								{value.map((variant) => {
									return (
										<Button colorPalette="blue" variant={variant} key={variant}>
											{variant}
										</Button>
									)
								})}
							</Stack>
						</div>
					)
				})}
			</Stack>
		)
	},
}
