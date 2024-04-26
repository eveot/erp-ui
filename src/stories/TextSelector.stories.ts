import { TextSelector } from '@components/TextSelector';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: TextSelector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof TextSelector>;

export const Default: StoryObj<typeof TextSelector> = {
  args: {
    items: ['Text 1', 'Text 2', 'Text 3', 'Text 4'],
  }
};