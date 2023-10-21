import { Box, button, css, HStack, Stack, styled, Wrap, token, Tokens } from '@pacha/styled-system'

import {
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  FormControl,
  Heading,
  Input,
  Modal,
  Popover,
  PopoverProps,
  Portal,
  Select,
  SelectProps,
  Skeleton,
  Switch,
  Table,
  Tabs,
  TabsProps,
  Tag,
  Tooltip,
  TooltipProps,
  type CheckboxProps,
  useDisclosure,
} from '@pacha/components'

import { useColorModeValue } from './color-mode'
import { ColorModeSwitch } from './color-mode-switch'

import '@pacha/preset-chakra/reset.css'
import '../static.css'
import { ToTokenRecord, assignInlineVars } from '@pacha/shared'

export const Sandbox = () => {
  // console.log(getColorSchemeVars());

  return (
    <Stack p="4">
      <Box ml="auto">
        <ColorModeSwitch />
      </Box>
      <BasicModal />
      {/* <CardExample /> */}
      <ColorModeDemo />
      <h1 className={css({ textStyle: 'heading.uppercase' })}>Sandbox: Panda components</h1>
      <Wrap>
        {/* <div
          style={
            getColorSchemeVars({ medium: 'red' }, 'pacha') as Record<
              string,
              string
            >
          }
          className={button({ variant: 'primaryFilled' })}
        >
          btn recipe
        </div> */}
        <button className={button({ variant: 'ghost' })}>btn ghost</button>
        <button className={button({ size: 'lg' })}>btn lg</button>
        <Button colorPalette="teal">btn teal</Button>
        <Button colorPalette="teal" variant="ghost">
          btn teal ghost
        </Button>
        <Button colorPalette="blue" mr={3}>
          blue
        </Button>
        <Button
          colorPalette="blue"
          mr={3}
          style={assignInlineVars<ToTokenRecord<Tokens>>({
            colors: {
              'blue.500': 'red',
              'blue.600': 'green',
              white: 'yellow',
            },
          })}
        >
          assignInlineVars
        </Button>

        <Badge colorPalette="green" variant="outline">
          Outline
        </Badge>
        <Badge colorPalette="purple" variant="solid">
          Solid
        </Badge>
        <Badge colorPalette="red" variant="subtle">
          Subtle
        </Badge>
        <Skeleton w="200px" />
        <SwitchExample />
        <TagExample />
        <AlertExample />
        <AvatarExample />
        <CheckboxDemo />
        <InputDemo />
        <FormControlDemo />
        <PopoverDemo />
        <SelectDemo />
        <SelectDemo variant="ghost" />
        <TabsDemo />
        <TabsDemo variant="enclosed" />
        <TabsDemo variant="enclosed-colored" />
        <TabsDemo variant="soft-rounded" />
        <TabsDemo variant="solid-rounded" />
        <TabsDemo variant="unstyled" />
        <TableDemo />
        <TooltipDemo />
        <CardExample />
      </Wrap>
    </Stack>
  )
}

const ColorModeDemo = () => {
  const color = useColorModeValue(token('colors.blue.300'), token('colors.amber.300'))
  return <span style={{ color }}>{color}</span>
}

const AvatarExample = () => {
  return (
    <>
      <Wrap>
        <Avatar size="2xs">
          <Avatar.Fallback>DA</Avatar.Fallback>
          <Avatar.Image src="https://bit.ly/dan-abramov" alt="avatar" />
        </Avatar>
        <Avatar size="xs">
          <Avatar.Fallback>BR</Avatar.Fallback>
          <Avatar.Image src="https://bit.ly/broken-link" alt="avatar" />
        </Avatar>
        <Avatar size="sm">
          <Avatar.Fallback>KCD</Avatar.Fallback>
          <Avatar.Image src="https://bit.ly/kent-c-dodds" alt="avatar" />
        </Avatar>
        <Avatar size="md">
          <Avatar.Fallback>RF</Avatar.Fallback>
          <Avatar.Image src="https://bit.ly/ryan-florence" alt="avatar" />
        </Avatar>
        <Avatar size="lg">
          <Avatar.Fallback>PO</Avatar.Fallback>
          <Avatar.Image src="https://bit.ly/prosper-baba" alt="avatar" />
        </Avatar>
        <Avatar size="xl">
          <Avatar.Fallback>CN</Avatar.Fallback>
          <Avatar.Image src="https://bit.ly/code-beast" alt="avatar" />
        </Avatar>
        <Avatar size="2xl">
          <Avatar.Fallback>SA</Avatar.Fallback>
          <Avatar.Image src="https://bit.ly/sage-adebayo" alt="avatar" />
        </Avatar>
      </Wrap>
    </>
  )
}

const TagExample = () => {
  return (
    <HStack gap={4}>
      <Tag size="sm" variant="solid" colorPalette="teal">
        Teal
      </Tag>
      <Tag size="md" variant="solid" colorPalette="teal">
        Teal
      </Tag>
      <Tag size="lg" variant="solid" colorPalette="teal">
        Teal
      </Tag>
    </HStack>
  )
}

function BasicModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Modal open={isOpen} onClose={onClose}>
        <Button onClick={onOpen}>Open Modal</Button>
        <Portal>
          <Modal.Overlay />
          <Modal.Container>
            <Modal.Content>
              <Modal.Header>Pacha Modal Title</Modal.Header>
              <Modal.Close>X</Modal.Close>
              <Modal.Body>
                <span>
                  Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat
                  veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
                  officia tempor esse quis. Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna
                  aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum
                  quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad
                  veniam.
                </span>
              </Modal.Body>

              <Modal.Footer>
                <Button colorPalette="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </Modal.Footer>
            </Modal.Content>
          </Modal.Container>
        </Portal>
      </Modal>
    </>
  )
}

const AlertExample = () => {
  return (
    <Stack gap={3}>
      <Alert colorPalette="red">
        <Alert.ErrorIcon />
        There was an error processing your request
      </Alert>

      <Alert colorPalette="green">
        <Alert.SuccessIcon />
        Data uploaded to the server. Fire on!
      </Alert>

      <Alert colorPalette="orange">
        <Alert.WarningIcon />
        Seems your account is about expire, upgrade now
      </Alert>

      <Alert colorPalette="blue">
        <Alert.InfoIcon />
        Chakra is going live on August 30th. Get ready!
      </Alert>
    </Stack>
  )
}

const SwitchExample = () => (
  <Switch defaultChecked>
    <Switch.Control>
      <Switch.Thumb />
    </Switch.Control>
    <Switch.Label>Label</Switch.Label>
  </Switch>
)

const StackDivider = () => (
  <div
    className={css({
      borderWidth: 0,
      alignSelf: 'stretch',
      borderColor: 'inherit',
      width: 'auto',
      height: 'auto',
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: '1px',
    })}
  />
)

const CardExample = () => {
  return (
    <Card>
      <Card.Header>
        <Heading size="md">Client Report</Heading>
      </Card.Header>

      <Card.Body>
        <Stack gap="4">
          <div>
            <Heading size="xs" textTransform="uppercase">
              Summary
            </Heading>
            <styled.span pt="2" fontSize="sm">
              View a summary of all your clients over the last month.
            </styled.span>
          </div>
          <StackDivider />
          <div>
            <Heading size="xs" textTransform="uppercase">
              Overview
            </Heading>
            <styled.span pt="2" fontSize="sm">
              Check out the overview of your clients.
            </styled.span>
          </div>
          <StackDivider />
          <div>
            <Heading size="xs" textTransform="uppercase">
              Analysis
            </Heading>
            <styled.span pt="2" fontSize="sm">
              See a detailed analysis of all your business clients.
            </styled.span>
          </div>
        </Stack>
      </Card.Body>
    </Card>
  )
}

const CheckboxField = (props: CheckboxProps) => {
  return (
    <Checkbox defaultChecked {...props}>
      {(state) => (
        <>
          <Checkbox.Control>
            <Checkbox.Icon isChecked={state.isChecked} isIndeterminate={state.isIndeterminate} />
          </Checkbox.Control>
          <Checkbox.Label>Label</Checkbox.Label>
        </>
      )}
    </Checkbox>
  )
}

const CheckboxDemo = () => {
  return (
    <Stack gap={3}>
      <CheckboxField size="sm" />
      <CheckboxField size="md" />
      <CheckboxField size="lg" />
      <CheckboxField colorPalette="teal" size="sm" />
      <CheckboxField colorPalette="teal" size="md" />
      <CheckboxField colorPalette="teal" size="lg" />
    </Stack>
  )
}

const InputDemo = () => {
  return (
    <Stack gap={4}>
      <Stack gap={3}>
        <Input variant="outline" placeholder="Outline" />
        <Input variant="filled" placeholder="Filled" />
        <Input variant="flushed" placeholder="Flushed" />
        <Input variant="unstyled" placeholder="Unstyled" />
      </Stack>
      <Input.Group>
        <Input.Addon placement="left" children="+234" />
        <Input.Field type="tel" placeholder="phone number" />
      </Input.Group>

      {/* If you add the size prop to `Input.Group`, it'll pass it to all its children. */}
      <Input.Group size="sm">
        <Input.Addon placement="left" children="https://" />
        <Input.Field placeholder="mysite" />
        <Input.Addon placement="right" children=".com" />
      </Input.Group>
    </Stack>
  )
}

const FormControlDemo = () => {
  return (
    <Stack gap={4}>
      <FormControl isInvalid isRequired>
        <FormControl.Label>
          Email address
          <FormControl.RequiredIndicator />
        </FormControl.Label>
        <Input type="email" />
        <FormControl.Helper>We'll never share your email.</FormControl.Helper>
        <FormControl.Error>
          <FormControl.ErrorIcon />
          Your name is invalid
        </FormControl.Error>
      </FormControl>
    </Stack>
  )
}

const PopoverDemo = (props: PopoverProps) => (
  <Popover portalled {...props}>
    <Popover.Trigger asChild>
      <Button>Open Popover</Button>
    </Popover.Trigger>
    <Portal>
      <Popover.Positioner>
        <Popover.Content>
          <Popover.Arrow>
            <Popover.ArrowTip />
          </Popover.Arrow>
          <Stack gap="1">
            <Popover.Title>Favorite Framework</Popover.Title>
            <Popover.Description>
              Tell us what is your favorite framework and why you love to use it.
            </Popover.Description>
          </Stack>
          <Box position="absolute" top="1" right="1">
            <Popover.CloseTrigger asChild>
              <Button px="0" aria-label="Close Popover" size="sm">
                X
              </Button>
            </Popover.CloseTrigger>
          </Box>
        </Popover.Content>
      </Popover.Positioner>
    </Portal>
  </Popover>
)

const SelectDemo = (props: Omit<SelectProps<any>, 'items'>) => {
  const items = [
    { label: 'React', value: 'react' },
    { label: 'Solid', value: 'solid' },
    { label: 'Svelte', value: 'svelte', disabled: true },
    { label: 'Vue', value: 'vue' },
  ]

  return (
    <Select positioning={{ sameWidth: true }} width="2xs" colorPalette="teal" {...props} items={items}>
      <Select.Label>Framework</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.Value placeholder="Select a Framework" />
          ↕️
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content colorPalette="teal">
            <Select.ItemGroup id="framework">
              <Select.ItemGroupLabel htmlFor="framework">Framework</Select.ItemGroupLabel>
              {items.map((item) => (
                <Select.Item key={item.value} item={item}>
                  <Select.ItemText>{item.label}</Select.ItemText>
                  <Select.ItemIndicator>✅</Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select>
  )
}

const TabsDemo = (props: TabsProps) => {
  const options = [
    { id: 'react', label: 'React' },
    { id: 'solid', label: 'Solid' },
    { id: 'svelte', label: 'Svelte', disabled: true },
    { id: 'vue', label: 'Vue' },
  ]
  return (
    <Tabs defaultValue="react" {...props}>
      <Tabs.List>
        {options.map((option) => (
          <Tabs.Trigger key={option.id} value={option.id} disabled={option.disabled}>
            {option.label}
          </Tabs.Trigger>
        ))}
        <Tabs.Indicator />
      </Tabs.List>
    </Tabs>
  )
}

const TableDemo = () => {
  return (
    <Table.Container variant="striped" colorPalette="blue">
      <Table.Root>
        <Table.Caption>Imperial to metric conversion factors</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>To convert</Table.Head>
            <Table.Head>into</Table.Head>
            <Table.Head data-is-numeric>multiply by</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>inches</Table.Cell>
            <Table.Cell>millimetableTable.rowes (mm)</Table.Cell>
            <Table.Cell data-is-numeric>25.4</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>feet</Table.Cell>
            <Table.Cell>centimetableTable.rowes (cm)</Table.Cell>
            <Table.Cell data-is-numeric>30.48</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>yards</Table.Cell>
            <Table.Cell>metableTable.rowes (m)</Table.Cell>
            <Table.Cell data-is-numeric>0.91444</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Head>To convert</Table.Head>
            <Table.Head>into</Table.Head>
            <Table.Head data-is-numeric>multiply by</Table.Head>
          </Table.Row>
        </Table.Footer>
      </Table.Root>
    </Table.Container>
  )
}

const TooltipDemo = (props: TooltipProps) => (
  <Tooltip open={true} {...props}>
    <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
    <Portal>
      <Tooltip.Positioner>
        <Tooltip.Content>
          <Tooltip.Arrow>
            <Tooltip.ArrowTip />
          </Tooltip.Arrow>
          I am a Tooltip!
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Portal>
  </Tooltip>
)
