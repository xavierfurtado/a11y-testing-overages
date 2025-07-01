import { StoryObj, Meta } from '@storybook/react'

import { allModes } from '../../../.storybook/modes'

import { Category } from './Category'

const meta = {
  title: 'Components/Category',
  component: Category,
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
    title: 'Pizza',
    photoUrl:
      'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=550',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Category>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Rounded: Story = {
  args: {
    round: true,
  },
}
