import { Modal } from '@components/Modal';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: Modal,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    image: {
      control: 'text',
    },
    width: {
      type: 'string',
    }
  }
} as Meta<typeof Modal>;

export const Default: StoryObj<typeof Modal> = {
  args: {
    title: 'Label',
    description: 'Description',
    image: undefined
  }
};