import { ModalLegacy } from '@legacycomponents/ModalLegacy';
import type { Meta, StoryObj } from '@storybook/react';


const meta = {
  title: 'ModalLegacy',
  component: ModalLegacy,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ModalLegacy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
    onClick: () => { },
    placeholder: 'Placeholder',
  },
};
