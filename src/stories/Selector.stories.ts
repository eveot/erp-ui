import { Selector } from '@components/Selector';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: Selector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof Selector>;

export const Default: StoryObj<typeof Selector> = {
  args: {
    items: ['Text 1', 'Text 2', 'Text 3', 'Text 4'],
  }
};