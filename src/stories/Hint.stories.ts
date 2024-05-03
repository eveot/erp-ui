import { Hint } from '@components/Hint';
import { IconNames } from '@components/Icon';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: Hint,
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
} as Meta<typeof Hint>;

export const Preview: StoryObj<typeof Hint> = {
  args: {
    tooltip: 'Tooltip',
    textLeft: 'Text left',
    textRight: 'Text right'
  }
};