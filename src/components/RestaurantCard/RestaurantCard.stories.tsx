import type { Meta, StoryObj } from '@storybook/react'

import { restaurants } from '../../stub/restaurants'
import { allModes } from '../../../.storybook/modes'

import { RestaurantCard } from './RestaurantCard'

const meta = {
  title: 'Components/RestaurantCard',
  component: RestaurantCard,
  parameters: {
    chromatic: {
      modes: {
        light: allModes.light,
        dark: allModes.dark,
        xs: allModes.xs,
        s: allModes.s,
        m: allModes.m,
        l: allModes.l,
      },
    },
  },
} satisfies Meta<typeof RestaurantCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    ...restaurants[0],
    name: 'Burger Kingdom',
  },
}

export const New: Story = {
  args: {
    ...Default.args,
    isNew: true,
  },
}

export const Closed: Story = {
  args: {
    ...Default.args,
    isClosed: true,
  },
}

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
}
