import { Button } from '@components/Button';
import { Tooltip } from '@components/Tooltip';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof Tooltip>;

export const Preview: StoryObj<typeof Tooltip> = {
  args: {
    text: 'Tooltip text'
  },
  render: ({text, align}) => (
    <Tooltip text={ text } align={ align }>
      <Button dataSize='sm'>Tooltip</Button>
    </Tooltip>
)
};