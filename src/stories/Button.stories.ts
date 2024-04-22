import { Button } from '@components/Button/Button';
import { IconNames } from '@components/Icon';
import { Meta, StoryObj } from '@storybook/react';


export default {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    dataSize: 'md',
  },
  argTypes: {
    iconLeft: {
      options: IconNames
    },
    iconRight: {
      options: IconNames
    }
  }
} as Meta<typeof Button>;

export const DefaultButton: StoryObj<typeof Button> = {
  args: {
    children: 'Button',
  },
};