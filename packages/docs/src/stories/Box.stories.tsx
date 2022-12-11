import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@lr-ui/react'

export default {
  title: 'Form/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testing Box element</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
