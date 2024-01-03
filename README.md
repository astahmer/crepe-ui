# 🥞 crepe-ui, a Chakra UI port using Panda+Ark-UI

- `pnpm i`
- `pnpm dev`
- `cd packages/components`
- `pnpm demo`

<img width="1711" alt="Screenshot 2024-01-03 at 23 48 32" src="https://github.com/astahmer/crepe-ui/assets/47224540/03ef5fa7-a3bc-40c0-9508-234c255e775e">
<img width="1720" alt="Screenshot 2024-01-03 at 23 48 40" src="https://github.com/astahmer/crepe-ui/assets/47224540/e079155a-bdcf-4cc5-86d8-d72d4c311c9f">

---

We only need to watch/rebuild the `packages/preset-chakra` due to using
[custom conditions](https://nodejs.org/api/packages.html#conditional-exports),
since Panda doesn't support them yet.

Updating the `packages/preset-chakra` will trigger a `static.css` file
generation, which is used by the demo.

## TODO

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
