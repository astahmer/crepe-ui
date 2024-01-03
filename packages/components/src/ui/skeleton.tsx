import { cssVariables } from "@crepe-ui/preset-chakra/vars";
import { HTMLStyledProps, styled } from "@crepe-ui/styled-system/jsx";
import {
  SkeletonVariantProps,
  skeleton,
} from "@crepe-ui/styled-system/recipes";
import { forwardRef } from "react";

export interface SkeletonProps
  extends SkeletonVariantProps,
    HTMLStyledProps<"div"> {
  startColor?: string;
  endColor?: string;
}

const SkeletonRoot = styled("div", skeleton);

/**
 * `Skeleton` is used to display the loading state of some component.
 *
 * @see Docs https://chakra-ui.com/docs/components/skeleton
 */
export const Skeleton = forwardRef<typeof SkeletonRoot, SkeletonProps>(
  ({ children, startColor, endColor, style, ...props }, ref) => {
    return (
      <SkeletonRoot
        {...props}
        style={{
          // @ts-ignore
          [cssVariables.skeleton["start-color"].name]: startColor,
          // @ts-ignore
          [cssVariables.skeleton["end-color"].name]: endColor,
          ...style,
        }}
        ref={ref as never}
      >
        {children}
      </SkeletonRoot>
    );
  }
);
