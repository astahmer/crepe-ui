import * as Ark from "@ark-ui/react/switch";
import { HTMLStyledProps, styled } from "@crepe-ui/styled-system/jsx";
import {
  switchRecipe,
  type SwitchRecipeVariantProps,
} from "@crepe-ui/styled-system/recipes";
import { createStyleContext } from "./create-style-context";
import { Assign } from "@crepe-ui/styled-system/types";

import type * as zag from "@zag-js/switch";
import { Optional } from "./types";
import { ComponentProps, ForwardRefExoticComponent } from "react";

const { withProvider, withContext } = createStyleContext(switchRecipe);

interface StyleProps extends HTMLStyledProps<"input"> {}
interface JsxProps extends Assign<Ark.SwitchProps, StyleProps> {}

export interface SwitchProps
  extends Omit<JsxProps, "size">,
    SwitchRecipeVariantProps {}

export interface UseSwitchProps extends Optional<zag.Context, "id"> {
  /**
   * The initial checked state of the switch.
   */
  defaultChecked?: zag.Context["checked"];
}

// Ark-UI doesn't (yet ?) expose the UseXXXProps and we need it for tsc .d.ts
// https://github.com/microsoft/TypeScript/issues/47663
// https://github.com/chakra-ui/ark/blob/ba18a28ac8dae026d2489e6fb19d4064beaeb407/packages/frameworks/react/src/avatar/use-avatar.ts
interface UseAvatarProps extends Optional<zag.Context, "id"> {}

// and that means we also have to cast this one
const SwitchRoot = withProvider(
  styled(
    Ark.Switch.Root as ForwardRefExoticComponent<
      ComponentProps<"label"> & UseAvatarProps
    >
  ),
  "root"
);

const SwitchControl = withContext(styled(Ark.Switch.Control), "control");
const SwitchLabel = withContext(styled(Ark.Switch.Label), "label");
const SwitchThumb = withContext(styled(Ark.Switch.Thumb), "thumb");

export const Switch = Object.assign(SwitchRoot, {
  Root: SwitchRoot,
  Control: SwitchControl,
  Label: SwitchLabel,
  Thumb: SwitchThumb,
});
