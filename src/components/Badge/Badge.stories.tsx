import type { Meta, StoryObj } from '@storybook/react'

import { Badge } from './Badge'

const meta = {
  title: 'Components/Badge',
  component: Badge,
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'Comfort food',
  },
}
