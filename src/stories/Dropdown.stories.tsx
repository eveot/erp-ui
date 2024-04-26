import { Button } from '@components/Button';
import { Dropdown } from '@components/Dropdown';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof Dropdown>;

export const Default: StoryObj<typeof Dropdown> = {
  args: {
    label: 'Dropdown Text'
  },
  render: (props) => (
    <Dropdown {...props}>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>4</Button>
    </Dropdown>
  )
};