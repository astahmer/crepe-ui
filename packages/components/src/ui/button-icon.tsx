import { styled } from "@crepe-ui/styled-system/jsx";
import type { ComponentPropsWithoutRef } from "react";

export interface ButtonIconProps
  extends ComponentPropsWithoutRef<typeof styled.span> {}
export const ButtonIcon = styled(styled.span, {
  base: {
    display: "inline-flex",
    alignSelf: "center",
    flexShrink: 0,
  },
});
