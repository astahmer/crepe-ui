import { defineRecipe } from "@pandacss/dev";
import { cssVar } from "@crepe-ui/shared";
import { badgeRecipe, badgeVars } from "./badge.recipe";

// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/theme/src/components/tag.ts
// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/components/src/tag/tag.tsx
// didn't include the slots (container / closeButton / label) as it's not used in the app

const vars = cssVar.scope("tag", [
  "bg",
  "color",
  "shadow",
  "min-height",
  "min-width",
  "font-size",
  "padding-inline",
]);

export const tagRecipe = defineRecipe({
  className: "tag",
  base: {
    colorPalette: "gray",
    fontWeight: "medium",
    lineHeight: 1.2,
    outline: 0,
    [vars.color.name]: badgeVars.color.ref,
    [vars.bg.name]: badgeVars.bg.ref,
    [vars.shadow.name]: badgeVars.shadow.ref,
    color: vars.color.ref,
    bg: vars.bg.ref,
    boxShadow: vars.shadow.ref,
    borderRadius: "md",
    minH: vars["min-height"].ref,
    minW: vars["min-width"].ref,
    fontSize: vars["font-size"].ref,
    px: vars["padding-inline"].ref,
    _focusVisible: {
      [vars.shadow.name]: "shadows.outline",
    },
    //
    display: "inline-flex",
    verticalAlign: "top",
    alignItems: "center",
    maxWidth: "100%",
  },
  variants: {
    variant: badgeRecipe.variants?.variant ?? {},
    size: {
      sm: {
        [vars["min-height"].name]: "sizes.5",
        [vars["min-width"].name]: "sizes.5",
        [vars["font-size"].name]: "fontSizes.xs",
        [vars["padding-inline"].name]: "space.2",
      },
      md: {
        [vars["min-height"].name]: "sizes.6",
        [vars["min-width"].name]: "sizes.6",
        [vars["font-size"].name]: "fontSizes.sm",
        [vars["padding-inline"].name]: "space.2",
      },
      lg: {
        [vars["min-height"].name]: "sizes.8",
        [vars["min-width"].name]: "sizes.8",
        [vars["font-size"].name]: "fontSizes.md",
        [vars["padding-inline"].name]: "space.3",
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "subtle",
  },
});
