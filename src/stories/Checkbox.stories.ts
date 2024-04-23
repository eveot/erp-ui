import { Checkbox } from '@components/Checkbox';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: Checkbox,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark'
    }
  },
  tags: ['autodocs'],
} as Meta<typeof Checkbox>;

export const Default: StoryObj<typeof Checkbox> = {
  args: {
    children: 'Content',
    dataStyle: 'dark',
    disabled: false,
    active: false
  }
};