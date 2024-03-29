import * as Ark from "@ark-ui/react/checkbox";
import { HTMLStyledProps, styled } from "@crepe-ui/styled-system/jsx";
import {
  checkbox,
  type CheckboxVariantProps,
} from "@crepe-ui/styled-system/recipes";
import { CheckboxIcon } from "./checkbox-icon";
import { createStyleContext } from "./create-style-context";

import { Assign } from "@crepe-ui/styled-system/types";
import type * as zag from "@zag-js/checkbox";
import type { PropTypes } from "@zag-js/react";
import { ComponentProps, ForwardRefExoticComponent, ReactNode } from "react";
import { type Optional } from "./types";

const { withProvider, withContext } = createStyleContext(checkbox);

// export * from '@ark-ui/react/checkbox';

interface StyleProps extends HTMLStyledProps<"label"> {}
interface JsxProps extends Assign<Ark.CheckboxProps, StyleProps> {}

export interface CheckboxProps extends JsxProps, CheckboxVariantProps {}

// Ark-UI doesn't (yet ?) expose the UseXXXProps and we need it for tsc .d.ts
// https://github.com/microsoft/TypeScript/issues/47663
// https://github.com/chakra-ui/ark/blob/ba18a28ac8dae026d2489e6fb19d4064beaeb407/packages/frameworks/react/src/checkbox/use-checkbox.ts
interface UseCheckboxProps extends Optional<zag.Context, "id"> {
  defaultChecked?: zag.Context["checked"];
}

// and that means we also have to cast this one
const CheckboxRoot = withProvider(
  styled(
    Ark.Checkbox.Root as ForwardRefExoticComponent<
      Assign<
        ComponentProps<"label"> & UseCheckboxProps,
        {
          children?: ReactNode | ((pages: zag.Api<PropTypes>) => ReactNode);
        }
      >
    >
  ),
  "container"
);

const CheckboxControl = withContext(styled(Ark.Checkbox.Control), "control");
const CheckboxLabel = withContext(styled(Ark.Checkbox.Label), "label");

export const Checkbox = Object.assign(CheckboxRoot, {
  Root: CheckboxRoot,
  Control: CheckboxControl,
  Label: CheckboxLabel,
  Icon: withContext(CheckboxIcon, "icon"),
});
