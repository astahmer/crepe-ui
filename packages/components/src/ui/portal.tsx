// https://github.com/chakra-ui/zag/blob/1ec8547a40c5c570edd77c835dfb1d7ada37b5b7/packages/frameworks/react/src/portal.ts#L10

import { createElement, useReducer, useRef } from "react";
import { createPortal } from "react-dom";

import { useEffect, useLayoutEffect } from "react";

const useSafeLayoutEffect =
  typeof document !== "undefined" ? useLayoutEffect : useEffect;

export interface PortalProps {
  children: React.ReactNode;
  target?: React.RefObject<HTMLElement>;
  tag?: string;
  host?: HTMLElement | null;
}

export function Portal(props: PortalProps): JSX.Element {
  const { children, target, tag, host: hostProp } = props;
  const node = useRef<HTMLDivElement | null>(null);
  const portalNode = useRef<HTMLElement | null>(null);
  const [, forceUpdate] = useReducer((s) => s + 1, 0);

  useSafeLayoutEffect(() => {
    if (!node.current) return;
    const doc = node.current.ownerDocument;
    const host = hostProp ?? doc.body;
    portalNode.current = doc.createElement(tag ?? "crepe-ui-portal");
    host.appendChild(portalNode.current);

    forceUpdate();

    return () => {
      if (portalNode.current) {
        host.removeChild(portalNode.current);
      }
    };
  }, []);

  const targetNode = target?.current ?? portalNode.current;

  if (targetNode) {
    return createPortal(children as any, targetNode);
  }

  return createElement("span", { ref: node });
}
