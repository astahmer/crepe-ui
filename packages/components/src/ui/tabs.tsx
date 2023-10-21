import * as Ark from '@ark-ui/react/tabs'
import { PreferRight } from '@pacha/shared'
import { HTMLStyledProps, styled } from '@pacha/styled-system'
import { TabsVariantProps, tabs } from '@pacha/styled-system'
import { createStyleContext } from './create-style-context'

import { ComponentProps, ForwardRefExoticComponent, ReactElement } from 'react'
import type * as presence from '@zag-js/presence'
import type * as zag from '@zag-js/tabs'
import { type Optional } from './types'
import type { HTMLArkProps } from '@ark-ui/react'
import { Assign } from '@pacha/styled-system'

const { withProvider, withContext } = createStyleContext(tabs)

// export * from '@ark-ui/react/tabs';
interface StyleProps extends HTMLStyledProps<typeof Ark.Tabs.Root> {}
interface JsxProps extends PreferRight<Ark.TabsProps, StyleProps> {}

export interface TabsProps extends JsxProps, TabsVariantProps {}

// Ark-UI doesn't (yet ?) expose the UseXXXProps and we need it for tsc .d.ts
// https://github.com/microsoft/TypeScript/issues/47663
// https://github.com/chakra-ui/ark/blob/ba18a28ac8dae026d2489e6fb19d4064beaeb407/packages/frameworks/react/src/tabs/use-tabs.ts
interface UseTabsProps extends Optional<zag.Context, 'id'> {
  /**
   * The initial value of the tabs.
   */
  defaultValue?: zag.Context['value']
}

interface UsePresenceProps extends Optional<presence.Context, 'present'> {}
interface PresenceProps extends UsePresenceProps {
  /**
   * Only a single child is allowed.
   */
  children: ReactElement
  /**
   * Whether to enable lazy mounting
   * @default false
   */
  lazyMount?: boolean
  /**
   * Whether to unmount on exit.
   * @default false
   */
  unmountOnExit?: boolean
}

interface TabPresenceProps extends PresenceProps, zag.ContentProps {}
type InnerTabContentProps = HTMLArkProps<'div'> & zag.ContentProps
interface TabContentProps extends InnerTabContentProps, Omit<TabPresenceProps, 'children'> {}

interface TabTriggerProps extends Assign<HTMLArkProps<'button'>, zag.TriggerProps> {}

const TabsRoot = withProvider(
  styled(Ark.Tabs.Root as ForwardRefExoticComponent<ComponentProps<'div'> & UseTabsProps>),
  'root',
)

const TabContent = withContext(
  styled(Ark.Tabs.Content as ForwardRefExoticComponent<ComponentProps<'div'> & TabContentProps>),
  'content',
)
const TabPanels = withContext(styled('div'), 'panels')
const TabIndicator = withContext(styled(Ark.Tabs.Indicator), 'indicator')
const TabList = withContext(styled(Ark.Tabs.List), 'list')
const TabTrigger = withContext(
  styled(Ark.Tabs.Trigger as ForwardRefExoticComponent<ComponentProps<'div'> & TabTriggerProps>),
  'trigger',
)

export const Tabs = Object.assign(TabsRoot, {
  Root: TabsRoot,
  Panels: TabPanels,
  Content: TabContent,
  Indicator: TabIndicator,
  List: TabList,
  Trigger: TabTrigger,
})
