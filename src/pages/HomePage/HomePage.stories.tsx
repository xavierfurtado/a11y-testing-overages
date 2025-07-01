import type { Meta, StoryObj } from '@storybook/react'
import { http, HttpResponse } from 'msw'

import { BASE_URL } from '../../api'
import { restaurants } from '../../stub/restaurants'
import { allModes } from '../../../.storybook/modes'

import { HomePage } from './HomePage'

const meta = {
  title: 'Pages/HomePage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
    chromatic: {
      modes: {
        xs: allModes.xs,
        s: allModes.s,
        m: allModes.m,
        l: allModes.l,
      },
    },
    msw: {
      handlers: [http.get(BASE_URL, () => HttpResponse.json(restaurants))],
    },
  },
} satisfies Meta<typeof HomePage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
