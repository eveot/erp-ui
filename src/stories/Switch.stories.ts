import { Switch } from '@components/Switch';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof Switch>;

export const Preview: StoryObj<typeof Switch> = {
  args: {}
};