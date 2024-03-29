import * as Ark from "@ark-ui/react/tooltip";
import { Assign } from "@crepe-ui/styled-system/types";
import { HTMLStyledProps, styled } from "@crepe-ui/styled-system/jsx";
import { TooltipVariantProps, tooltip } from "@crepe-ui/styled-system/recipes";
import { createStyleContext } from "./create-style-context";

const { withProvider, withContext } = createStyleContext(tooltip);

// export * from '@ark-ui/react/tooltip'
interface StyleProps extends HTMLStyledProps<typeof Ark.Tooltip.Root> {}
interface JsxProps extends Assign<Ark.TooltipProps, StyleProps> {}

export interface TooltipProps extends JsxProps, TooltipVariantProps {}

const TooltipRoot = withProvider(styled(Ark.Tooltip.Root));
const TooltipArrow = withContext(styled(Ark.Tooltip.Arrow), "arrow");
const TooltipArrowTip = withContext(styled(Ark.Tooltip.ArrowTip), "arrowTip");
const TooltipContent = withContext(styled(Ark.Tooltip.Content), "content");
const TooltipPositioner = withContext(
  styled(Ark.Tooltip.Positioner),
  "positioner"
);
const TooltipTrigger = withContext(styled(Ark.Tooltip.Trigger), "trigger");

export const Tooltip = Object.assign(TooltipRoot, {
  Root: TooltipRoot,
  Arrow: TooltipArrow,
  ArrowTip: TooltipArrowTip,
  Content: TooltipContent,
  Positioner: TooltipPositioner,
  Trigger: TooltipTrigger,
});
