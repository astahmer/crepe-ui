import type { ComponentPropsWithoutRef } from "react";
import { HTMLStyledProps, styled } from "@crepe-ui/styled-system/jsx";

// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/components/src/checkbox/checkbox-icon.tsx

function CheckIcon(props: ComponentPropsWithoutRef<typeof styled.svg>) {
  return (
    <styled.svg
      viewBox="0 0 12 10"
      style={{
        width: "1.2em",
        fill: "none",
        strokeWidth: 2,
        stroke: "currentColor",
        strokeDasharray: 16,
      }}
      {...props}
    >
      <polyline points="1.5 6 4.5 9 10.5 1" />
    </styled.svg>
  );
}

function IndeterminateIcon(props: ComponentPropsWithoutRef<typeof styled.svg>) {
  return (
    <styled.svg
      viewBox="0 0 24 24"
      style={{ width: "1.2em", stroke: "currentColor", strokeWidth: 4 }}
      {...props}
    >
      <line x1="21" x2="3" y1="12" y2="12" />
    </styled.svg>
  );
}

export interface CheckboxIconProps extends HTMLStyledProps<"svg"> {
  /**
   * @default false
   */
  isIndeterminate?: boolean;
  /**
   * @default false
   */
  isChecked?: boolean;
}

/**
 * CheckboxIcon is used to visually indicate the checked or indeterminate
 * state of a checkbox.
 *
 * @todo allow users pass their own icon svgs
 */
export function CheckboxIcon(props: CheckboxIconProps) {
  const { className, isIndeterminate, isChecked, ...rest } = props;
  if (!isChecked && !isIndeterminate) return null;

  const BaseIcon = isIndeterminate ? IndeterminateIcon : CheckIcon;

  return (
    <styled.div
      data-scope="checkbox"
      data-part="icon"
      className={className}
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <BaseIcon {...(rest as any)} />
    </styled.div>
  );
}
