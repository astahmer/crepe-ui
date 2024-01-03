import * as Ark from "@ark-ui/react/select";
import { HTMLStyledProps, styled } from "@crepe-ui/styled-system/jsx";
import { SelectVariantProps, select } from "@crepe-ui/styled-system/recipes";
import { createStyleContext } from "./create-style-context";

import type { CollectionItem } from "@ark-ui/react/select";
import type * as zag from "@zag-js/select";
import { Optional } from "./types";
import { ComponentProps, ForwardRefExoticComponent } from "react";
import { Assign } from "@crepe-ui/styled-system/types";
import type { HTMLArkProps } from "@ark-ui/react";

const { withProvider, withContext } = createStyleContext(select);

// export * from '@ark-ui/react/select';
interface StyleProps extends HTMLStyledProps<typeof Ark.Select.Root> {}
interface JsxProps<T extends Ark.CollectionItem>
  extends Assign<Ark.SelectProps<T>, StyleProps> {}

export interface SelectProps<T extends Ark.CollectionItem>
  extends JsxProps<T>,
    SelectVariantProps {}

// Ark-UI doesn't (yet ?) expose the UseXXXProps and we need it for tsc .d.ts
// https://github.com/microsoft/TypeScript/issues/47663
// https://github.com/chakra-ui/ark/blob/ba18a28ac8dae026d2489e6fb19d4064beaeb407/packages/frameworks/react/src/select/use-select.ts
interface UseSelectProps<T extends CollectionItem>
  extends zag.CollectionOptions<T>,
    Omit<Optional<zag.Context<T>, "id">, "collection"> {
  /**
   * The initial value of the select.
   */
  defaultValue?: zag.Context<T>["value"];
}

interface SelectItemProps
  extends Assign<
      HTMLArkProps<"div">,
      {
        children?:
          | React.ReactNode
          | ((props: zag.ItemState) => React.ReactNode);
      }
    >,
    zag.ItemProps {}

interface SelectItemGroupProps
  extends Assign<HTMLArkProps<"div">, zag.ItemGroupProps> {}

interface SelectItemGroupLabelProps
  extends Assign<HTMLArkProps<"div">, zag.ItemGroupLabelProps> {}

// and that means we also have to cast this one
const SelectRoot = withProvider(
  styled(
    Ark.Select.Root as ForwardRefExoticComponent<
      ComponentProps<"div"> & UseSelectProps<any>
    >
  ),
  "root"
);

const SelectClearTrigger = withContext(
  styled(Ark.Select.ClearTrigger),
  "clearTrigger"
);
const SelectContent = withContext(styled(Ark.Select.Content), "content");
const SelectControl = withContext(styled(Ark.Select.Control), "control");
const SelectItem = withContext(
  styled(
    Ark.Select.Item as ForwardRefExoticComponent<
      ComponentProps<"div"> & SelectItemProps
    >
  ),
  "item"
);
const SelectItemGroup = withContext(
  styled(Ark.Select.ItemGroup) as any as ForwardRefExoticComponent<
    ComponentProps<"div"> & SelectItemGroupProps
  >,
  "itemGroup"
);
const SelectItemGroupLabel = withContext(
  styled(Ark.Select.ItemGroupLabel) as any as ForwardRefExoticComponent<
    ComponentProps<"div"> & SelectItemGroupLabelProps
  >,
  "itemGroupLabel"
);
const SelectItemIndicator = withContext(
  styled(Ark.Select.ItemIndicator),
  "itemIndicator"
);
const SelectItemText = withContext(styled(Ark.Select.ItemText), "itemText");
const SelectLabel = withContext(styled(Ark.Select.Label), "label");
const SelectPositioner = withContext(
  styled(Ark.Select.Positioner),
  "positioner"
);
const SelectTrigger = withContext(styled(Ark.Select.Trigger), "trigger");
const SelectValue = withContext(styled(Ark.Select.Value), "value");

export const Select = Object.assign(SelectRoot, {
  Root: SelectRoot,
  ClearTrigger: SelectClearTrigger,
  Content: SelectContent,
  Control: SelectControl,
  Item: SelectItem,
  ItemGroup: SelectItemGroup,
  ItemGroupLabel: SelectItemGroupLabel,
  ItemIndicator: SelectItemIndicator,
  ItemText: SelectItemText,
  Label: SelectLabel,
  Positioner: SelectPositioner,
  Trigger: SelectTrigger,
  Value: SelectValue,
});
