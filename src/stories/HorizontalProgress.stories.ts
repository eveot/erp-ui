import { HorizontalProgress } from '@components/HorizontalProgress';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: HorizontalProgress,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    progress: {
      control: 'range'
    }
  },
  tags: ['autodocs'],
} as Meta<typeof HorizontalProgress>;

export const Default: StoryObj<typeof HorizontalProgress> = {
  args: {
    progress: 50
  }
};