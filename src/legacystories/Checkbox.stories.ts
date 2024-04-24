import { CheckboxLegacy } from '@legacycomponents/CheckboxLegacy';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'CheckboxLegacy',
  component: CheckboxLegacy,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxLegacy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IsActive: Story = {
  args: {
    isActive: true,
    children: 'Content',
    onClick: () => console.log('click'),
  },
};

export const IsDeactivated: Story = {
  args: {
    isActive: false,
    children: 'Content',
    onClick: () => console.log('click'),
  },
};
