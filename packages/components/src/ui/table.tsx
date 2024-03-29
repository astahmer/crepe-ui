import type { ComponentPropsWithoutRef } from "react";
import { HTMLStyledProps, styled } from "@crepe-ui/styled-system/jsx";
import { createStyleContext } from "./create-style-context";
import { Assign } from "@crepe-ui/styled-system/types";
import { table, TableVariantProps } from "@crepe-ui/styled-system/recipes";

const { withProvider, withContext } = createStyleContext(table);

interface StyleProps extends HTMLStyledProps<"div"> {}
interface JsxProps
  extends Assign<ComponentPropsWithoutRef<"div">, StyleProps> {}

export interface TableProps extends JsxProps, TableVariantProps {}

const TableContainer = withProvider(styled("div"), "container");
const TableRoot = withProvider(styled("table"), "table");

const TableBody = withContext(styled("tbody"), "tbody");
const TableCaption = withContext(styled("caption"), "caption");
const TableCell = withContext(styled("td"), "td");
const TableFooter = withContext(styled("tfoot"), "tfoot");
const TableHead = withContext(styled("th"), "th");
const TableHeader = withContext(styled("thead"), "thead");
const TableRow = withContext(styled("tr"), "tr");

export const Table = Object.assign(TableRoot, {
  Container: TableContainer,
  Table: TableRoot,
  Root: withContext(styled("table"), "table"),
  Body: TableBody,
  Caption: TableCaption,
  Cell: TableCell,
  Footer: TableFooter,
  Head: TableHead,
  Header: TableHeader,
  Row: TableRow,
});
