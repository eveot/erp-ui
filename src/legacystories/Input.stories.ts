import { InputLegacy } from '@legacycomponents/InputLegacy';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'InputLegacy',
  component: InputLegacy,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputLegacy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: '',
    name: 'storybook',
    size: 'sm',
    onChange: (value) => { console.log(value) },
    type: 'text'
  },
};
