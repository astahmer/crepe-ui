import { sva } from "@crepe-ui/styled-system/css";
import { styled } from "@crepe-ui/styled-system/jsx";
import { createStyleContext } from "./create-style-context";

// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/theme/src/components/list.ts
// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/components/src/layout/list.tsx

const listRecipe = sva({
  slots: ["ul", "ol", "icon", "item"],
  base: {
    ul: {
      listStyleType: "initial",
      marginStart: "1em",
    },
    ol: {
      listStyleType: "decimal",
      marginStart: "1em",
    },
    icon: {
      marginEnd: "2",
      display: "inline",
      verticalAlign: "text-bottom",
    },
  },
});

const { withProvider, withContext } = createStyleContext(listRecipe);

const UnorderedList = withProvider(styled.ul, "ul");
const OrderedList = withProvider(styled.ul, "ol");

const ListItem = withContext(styled.li, "item");
const ListIcon = withContext(styled.li, "icon");

export const List = Object.assign(UnorderedList, {
  Unordered: UnorderedList,
  Ordered: OrderedList,
  Item: ListItem,
  Icon: ListIcon,
});
