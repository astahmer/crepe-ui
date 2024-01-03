import { styled } from "@crepe-ui/styled-system/jsx";
import { card } from "@crepe-ui/styled-system/recipes";
import { createStyleContext } from "./create-style-context";

const { withProvider, withContext } = createStyleContext(card);

const CardRoot = withProvider(styled("div"), "container");
const CardBody = withContext(styled("div"), "body");
const CardHeader = withContext(styled("div"), "header");
const CardFooter = withContext(styled("div"), "footer");

export const Card = Object.assign(CardRoot, {
  Root: CardRoot,
  Body: CardBody,
  Header: CardHeader,
  Footer: CardFooter,
});
