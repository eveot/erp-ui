import { Button } from '@components/Button';
import { ButtonsGroup } from '@components/ButtonsGroup';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: ButtonsGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof ButtonsGroup>;

export const Preview: StoryObj<typeof ButtonsGroup> = {
  args: {},
  render: (props) => (
    <ButtonsGroup {...props}>
      <Button dataStyle='light'>Button 1</Button>
      <Button dataStyle='light'>Button 2</Button>
      <Button dataStyle='light'>Button 2</Button>
    </ButtonsGroup>
  )
};