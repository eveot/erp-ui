import { Progress } from '@components/Progress';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    progress: {
      control: 'range'
    }
  },
  tags: ['autodocs'],
} as Meta<typeof Progress>;

export const Default: StoryObj<typeof Progress> = {
  args: {
    progress: 50
  }
};