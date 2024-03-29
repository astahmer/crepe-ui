import * as Ark from "@ark-ui/react/popover";
import { Assign } from "@crepe-ui/styled-system/types";
import { HTMLStyledProps, styled } from "@crepe-ui/styled-system/jsx";
import { popover } from "@crepe-ui/styled-system/recipes";
import { createStyleContext } from "./create-style-context";

const { withProvider, withContext } = createStyleContext(popover);

// export * from '@ark-ui/react/popover'
interface StyleProps extends HTMLStyledProps<typeof Ark.Popover.Root> {}
interface JsxProps extends Assign<Ark.PopoverProps, StyleProps> {}

export interface PopoverProps extends JsxProps {}

const PopoverRoot = withProvider(styled(Ark.Popover.Root));
const PopoverAnchor = withContext(styled(Ark.Popover.Anchor), "anchor");
const PopoverArrow = withContext(styled(Ark.Popover.Arrow), "arrow");
const PopoverArrowTip = withContext(styled(Ark.Popover.ArrowTip), "arrowTip");
const PopoverCloseTrigger = withContext(
  styled(Ark.Popover.CloseTrigger),
  "closeTrigger"
);
const PopoverContent = withContext(styled(Ark.Popover.Content), "content");
const PopoverDescription = withContext(
  styled(Ark.Popover.Description),
  "description"
);
const PopoverFooter = withContext(styled("div"), "footer");
const PopoverPositioner = withContext(
  styled(Ark.Popover.Positioner),
  "positioner"
);
const PopoverTitle = withContext(styled(Ark.Popover.Title), "title");
const PopoverTrigger = withContext(styled(Ark.Popover.Trigger), "trigger");

export const Popover = Object.assign(PopoverRoot, {
  Root: PopoverRoot,
  Anchor: PopoverAnchor,
  Arrow: PopoverArrow,
  ArrowTip: PopoverArrowTip,
  CloseTrigger: PopoverCloseTrigger,
  Content: PopoverContent,
  Description: PopoverDescription,
  Footer: PopoverFooter,
  Positioner: PopoverPositioner,
  Title: PopoverTitle,
  Trigger: PopoverTrigger,
});
