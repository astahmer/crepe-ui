import { ComponentPropsWithoutRef, forwardRef } from "react";
import { styled } from "@crepe-ui/styled-system/jsx";
import { CheckboxVariantProps, link } from "@crepe-ui/styled-system/recipes";

const LinkRoot = styled("a", link);

interface StyleProps extends ComponentPropsWithoutRef<typeof LinkRoot> {}

export interface LinkProps extends StyleProps, CheckboxVariantProps {
  /**
   *  If `true`, the link will open in new tab
   *
   * @default false
   */
  isExternal?: boolean;
}

/**
 * Links are accessible elements used primarily for navigation.
 *
 * It integrates well with other routing libraries like
 * React Router, Reach Router and Next.js Link.
 *
 * @example
 *
 * ```jsx
 * <Link as={ReactRouterLink} to="/home">Home</Link>
 * ```
 *
 * @see Docs https://chakra-ui.com/link
 */
export const Link = forwardRef<typeof LinkRoot, LinkProps>(function Link(
  { isExternal, ...props },
  ref
) {
  return (
    <LinkRoot
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener" : undefined}
      {...props}
      ref={ref as never}
    />
  );
});

Link.displayName = "Link";
