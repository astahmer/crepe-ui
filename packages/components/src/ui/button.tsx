import { forwardRef, type ComponentProps, type ReactNode } from "react";

import { ark } from "@ark-ui/react";
import { css, cx } from "@crepe-ui/styled-system/css";
import { styled } from "@crepe-ui/styled-system/jsx";
import {
  button,
  type ButtonVariantProps,
} from "@crepe-ui/styled-system/recipes";
import { ButtonIcon } from "./button-icon";
import { JsxStyleProps } from "@crepe-ui/styled-system/types";

// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/theme/src/components/button.ts
// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/components/src/button/button.tsx#L60

const ButtonRoot = styled(ark.button, button);

interface StyleProps extends ComponentProps<typeof ButtonRoot> {}

export interface ButtonProps
  extends Omit<StyleProps, "colorPalette">,
    Omit<ButtonVariantProps, "colorPalette"> {
  leftIcon?: ReactNode;
  colorPalette?: JsxStyleProps["colorPalette"];
}

/**
 * Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation.
 *
 * @see Docs https://chakra-ui.com/docs/components/button
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/button/
 */
export const Button = forwardRef<typeof ButtonRoot, ButtonProps>(
  ({ children, leftIcon, className, ...props }, ref) => {
    return (
      // Little trick to get the colorPalette prop to work
      // While keeping the colorPalette used for the compoundVariants
      <ButtonRoot
        {...(props as any)}
        className={cx(css({ colorPalette: props.colorPalette }), className)}
        ref={ref}
      >
        <ButtonContent leftIcon={leftIcon}>{children}</ButtonContent>
      </ButtonRoot>
    );
  }
);

Button.displayName = "Button";

type ButtonContentProps = Pick<ButtonProps, "leftIcon" | "children">;

function ButtonContent(props: ButtonContentProps) {
  const { leftIcon, children } = props;
  return (
    <>
      {leftIcon && <ButtonIcon marginEnd="0.5rem">{leftIcon}</ButtonIcon>}
      {children}
    </>
  );
}
