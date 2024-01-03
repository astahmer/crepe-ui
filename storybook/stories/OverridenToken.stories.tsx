import type { Meta, StoryObj } from "@storybook/react";
import { css } from "@crepe-ui/styled-system/css";
import { PropsWithChildren } from "react";

const ButtonWithOverridenToken = ({ children }: PropsWithChildren) => {
  return (
    <button
      className={css({
        bg: "red.300",
        fontFamily: "Inter",
        px: "4",
        py: "3",
        borderRadius: "md",
        _hover: { bg: "red.400" },
      })}
    >
      {children}
    </button>
  );
};

const meta = {
  title: "Example/OverridenToken",
  component: ButtonWithOverridenToken,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className={css({ m: 10 })}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ButtonWithOverridenToken>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Hello 🐼!",
  },
};
