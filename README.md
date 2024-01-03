# crepe-ui, a Chakra UI port using Panda+Ark-UI

- `pnpm i`
- `pnpm dev`
- `cd packages/components`
- `pnpm demo`

We only need to watch/rebuild the `packages/preset-chakra` due to using
[custom conditions](https://nodejs.org/api/packages.html#conditional-exports),
since Panda doesn't support them yet.

Updating the `packages/preset-chakra` will trigger a `static.css` file
generation, which is used by the demo.

## TODO

- rename to @crepe-ui-ui

- update Ark-UI and remove all the pasted UseXXXProps types when v1 is released

- create other frameworks implementation, only the React one is done

- for each frameworks, export 2 different versions:

  1. for Panda users, with `@crepe-ui/styled-system` as external dependency
  2. for non-Panda users, with everything bundled

- make a version of the components that is RSC-compatible = without
  `createStyleContext`
  - could use `defineParts`
  - or could just keep using slots but with explicit props passing

## Missing Chakra components

Editable, Number Input, Pin Input, Radio, Range Slider, Slider, Stat, Circular
Progress, Spinner, Toast, Highlight, Drawer, Menu, Accordion, Breadcrumb,
Stepper
