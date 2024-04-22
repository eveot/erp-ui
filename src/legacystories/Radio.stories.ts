import { RadioLegacy } from '@legacycomponents/RadioLegacy';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'RadioLegacy',
  component: RadioLegacy,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioLegacy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    isActive: true,
  },
};
