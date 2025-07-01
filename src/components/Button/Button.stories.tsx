import { StoryObj, Meta } from '@storybook/react'

import { allModes } from '../../../.storybook/modes'

import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    chromatic: {
      modes: {
        xs: allModes.xs,
        s: allModes.s,
        m: allModes.m,
        l: allModes.l,
      },
    },
  },
  args: {
    children: 'Button',
  },
} satisfies Meta<typeof Button>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Clear: Story = {
  args: {
    clear: true,
  },
}

export const Icon: Story = {
  args: {
    icon: 'cart',
    'aria-label': 'cart',
  },
}

export const IconAndText: Story = {
  args: {
    icon: 'cart',
    children: (
      <div style={{ paddingLeft: '16px' }}>
        <span style={{ color: '#949494' }}>Order</span>
        <span style={{ color: 'white', paddingLeft: '8px' }}>€ 8</span>
      </div>
    ),
  },
}
