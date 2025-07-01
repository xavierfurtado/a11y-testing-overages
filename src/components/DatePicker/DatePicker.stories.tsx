import { StoryObj, Meta } from '@storybook/react'
import { fn } from '@storybook/test'
import { useState } from 'react'

import { allModes } from '../../../.storybook/modes'

import { DatePicker, DatePickerProps } from './DatePicker'

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'padded',
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
    onChange: fn(),
  },
} satisfies Meta<typeof DatePicker>
export default meta

type Story = StoryObj<typeof meta>

// Define a type that makes value and onChange optional
type InteractiveDatePickerProps = Omit<DatePickerProps, 'value' | 'onChange'> & {
  value?: DatePickerProps['value']
  onChange?: DatePickerProps['onChange']
}

// A reusable component for interactive DatePicker demos
const InteractiveDatePicker = (props: InteractiveDatePickerProps) => {
  const [value, setValue] = useState(props.value || null)
  return <DatePicker {...props} value={value} onChange={setValue} />
}

export const Default: Story = {
  args: {
    value: new Date(),
  },
}

export const WithLabel: Story = {
  args: {
    value: new Date(),
    label: 'Select Date',
  },
}

export const Empty: Story = {
  args: {
    value: null,
    placeholder: 'Choose a date',
  },
}

export const Disabled: Story = {
  args: {
    value: new Date(),
    disabled: true,
  },
}

export const WithError: Story = {
  args: {
    value: new Date(),
    error: 'Please select a valid date',
  },
}

export const Clearable: Story = {
  args: {
    value: new Date(),
    clearable: true,
  },
}

export const DateFormatMMDDYYYY: Story = {
  args: {
    value: new Date(),
    dateFormat: 'MM/DD/YYYY',
  },
}

export const DateFormatDDMMYYYY: Story = {
  args: {
    value: new Date(),
    dateFormat: 'DD/MM/YYYY',
  },
}

export const DateFormatYYYYMMDD: Story = {
  args: {
    value: new Date(),
    dateFormat: 'YYYY-MM-DD',
  },
}

export const DateFormatMMMDDYYYY: Story = {
  args: {
    value: new Date(),
    dateFormat: 'MMM DD, YYYY',
  },
}

export const WithMinMaxDates: Story = {
  args: {
    value: new Date(),
    minDate: new Date(new Date().setDate(new Date().getDate() - 7)),
    maxDate: new Date(new Date().setDate(new Date().getDate() + 7)),
  },
}

export const WithDisabledDates: Story = {
  args: {
    value: new Date(),
    disabledDates: [
      new Date(new Date().setDate(new Date().getDate() + 2)),
      new Date(new Date().setDate(new Date().getDate() + 4)),
      new Date(new Date().setDate(new Date().getDate() + 6)),
    ],
  },
}

export const Primary: Story = {
  args: {
    value: new Date(),
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    value: new Date(),
    variant: 'secondary',
  },
}

export const Success: Story = {
  args: {
    value: new Date(),
    variant: 'success',
  },
}

export const Warning: Story = {
  args: {
    value: new Date(),
    variant: 'warning',
  },
}

export const Error: Story = {
  args: {
    value: new Date(),
    variant: 'error',
  },
}

export const WithWeekNumbers: Story = {
  args: {
    value: new Date(),
    showWeekNumbers: true,
  },
}

export const AlternativePlacement: Story = {
  args: {
    value: new Date(),
    placement: 'top',
  },
}

export const RangeSelection: Story = {
  args: {
    value: {
      start: new Date(new Date().setDate(new Date().getDate() - 3)),
      end: new Date(),
    },
    range: true,
  },
}

export const Interactive: Story = {
  args: {
    value: new Date(),
  },
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <h3>Basic DatePicker</h3>
          <InteractiveDatePicker label="Select a date" clearable />
        </div>

        <div>
          <h3>Range DatePicker</h3>
          <InteractiveDatePicker
            label="Select date range"
            range
            value={{ start: null, end: null }}
            clearable
          />
        </div>

        <div>
          <h3>DatePicker with custom format</h3>
          <InteractiveDatePicker label="Select a date" dateFormat="MMM DD, YYYY" clearable />
        </div>

        <div>
          <h3>DatePicker with limited range</h3>
          <InteractiveDatePicker
            label="Select a date"
            minDate={new Date(new Date().setDate(new Date().getDate() - 5))}
            maxDate={new Date(new Date().setDate(new Date().getDate() + 5))}
            clearable
          />
        </div>
      </div>
    )
  },
}

export const AllVariants: Story = {
  args: {
    value: new Date(),
  },
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <InteractiveDatePicker label="Primary" variant="primary" />
        <InteractiveDatePicker label="Secondary" variant="secondary" />
        <InteractiveDatePicker label="Success" variant="success" />
        <InteractiveDatePicker label="Warning" variant="warning" />
        <InteractiveDatePicker label="Error" variant="error" />
      </div>
    )
  },
}
