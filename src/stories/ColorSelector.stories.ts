import { Meta, StoryObj } from '@storybook/react';
import {ColorSelector} from "@components/ColorSelector";

export default {
  component: ColorSelector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof ColorSelector>;

export const Default: StoryObj<typeof ColorSelector> = {
  args: {
  
  }
};