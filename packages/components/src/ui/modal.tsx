import * as Ark from "@ark-ui/react/dialog";
import { HTMLStyledProps, styled } from "@crepe-ui/styled-system/jsx";
import {
  modal,
  type ModalVariantProps,
  closeButton,
} from "@crepe-ui/styled-system/recipes";
import { createStyleContext } from "./create-style-context";
import { Assign } from "@crepe-ui/styled-system/types";
import { ForwardRefExoticComponent, forwardRef } from "react";
import { DialogDescriptionProps } from "@ark-ui/react/dialog";

const { withProvider, withContext } = createStyleContext(modal);

// export * from '@ark-ui/react/dialog';
// export type ModalProps = Ark.DialogProps & ModalVariantProps;
interface StyleProps extends HTMLStyledProps<typeof Ark.Dialog.Root> {}
interface JsxProps extends Assign<Ark.DialogProps, StyleProps> {}

export interface ModalProps extends JsxProps, ModalVariantProps {}

const DialogRoot = withProvider(styled(Ark.Dialog.Root), "root");
const DialogBackdrop = withContext(styled(Ark.Dialog.Backdrop), "backdrop");
const DialogCloseTrigger = withContext(
  // TODO recipe extension
  styled(Ark.Dialog.CloseTrigger, closeButton),
  "closeTrigger"
);
const DialogContainer = withContext(styled(Ark.Dialog.Positioner), "container");
const DialogContent = withContext(styled(Ark.Dialog.Content), "content");

const OverrideDialogDescription = forwardRef((props, ref) => {
  // @ts-expect-error Chakra-ui ModalBody is a div, Ark-UI DialogDescription is a p
  // if we use p, we can't put divs etc in there
  return <Ark.Dialog.Description as="div" {...props} ref={ref} />;
});
const DialogDescription = withContext(
  styled(OverrideDialogDescription) as ForwardRefExoticComponent<
    HTMLStyledProps<"div"> & DialogDescriptionProps
  >,
  "description"
);
const DialogTitle = withContext(styled(Ark.Dialog.Title), "title");
const DialogTrigger = withContext(styled(Ark.Dialog.Trigger), "trigger");
const DialogFooter = withContext(styled("div"), "footer");

export const Modal = Object.assign(DialogRoot, {
  Root: DialogRoot,
  Overlay: DialogBackdrop,
  Close: DialogCloseTrigger,
  Container: DialogContainer,
  Content: DialogContent,
  Body: DialogDescription,
  Header: DialogTitle,
  Trigger: DialogTrigger,
  Footer: DialogFooter,
});

export const ModalCloseButton = styled("button", closeButton);
