import type { Meta, StoryObj } from '@storybook/react';

import { Button } from "../components";

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mode: 'default',
    children: 'Button',
    size: 'sm',
    onClick: () => console.log('click')
  },
};

export const Primary: Story = {
  args: {
    mode: 'primary',
    children: 'Button',
    size: 'md',
    onClick: () => console.log('click')
  },
};

export const White: Story = {
  args: {
    mode: 'white',
    children: 'Button',
    size: 'xlg',
    onClick: () => console.log('click')
  },
};
