import { IconNames } from '@components/Icon';
import { TextInfo } from '@components/TextInfo';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: TextInfo,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    iconLeft: {
      options: IconNames
    },
    iconRight: {
      options: IconNames
    }
  },
  tags: ['autodocs'],
} as Meta<typeof TextInfo>;

export const Default: StoryObj<typeof TextInfo> = {
  args: {
    children: 'Content'
  }
};