import { Slider } from '@components/Slider';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      control: 'range'
    }
  },
  tags: ['autodocs'],
} as Meta<typeof Slider>;

export const Default: StoryObj<typeof Slider> = {
  args: {
    label: 'Label',
    value: 30
  }
};