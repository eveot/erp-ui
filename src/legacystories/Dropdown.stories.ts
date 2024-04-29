import { DropdownLegacy } from '@legacycomponents/DropdownLegacy';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'DropdownLegacy',
  component: DropdownLegacy,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownLegacy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Close: Story = {
  args: {
    children: 'Нажмите кнопку',
    callbacks: [
      {
        value: 'Open',
        callback: {
          click: () => alert('Callback Click')
        }
      },
      {
        value: 'Clear',
        callback: {
          mouseLeave: () => alert('Callback Mouse Leave')
        }
      },
      {
        value: 'Close',
        callback: {
          mouseMove: () => alert('Callback Mouse Move')
        }
      }
    ]
  },
};
