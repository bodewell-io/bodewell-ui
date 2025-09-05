import type { Meta, StoryObj } from '@storybook/react';
import { LineChart } from './LineChart';
import { Card } from '../layout/Card';

const meta: Meta<typeof LineChart> = {
  title: 'Charts/LineChart',
  component: LineChart,
  decorators: [
    (Story) => (
      <Card className="p-6 w-[700px] h-[400px]">
        <Story />
      </Card>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const userData = [
    { month: 'Jan', newUsers: 120, returningUsers: 80 },
    { month: 'Feb', newUsers: 150, returningUsers: 110 },
    { month: 'Mar', newUsers: 130, returningUsers: 160 },
    { month: 'Apr', newUsers: 210, returningUsers: 140 },
    { month: 'May', newUsers: 250, returningUsers: 190 },
    { month: 'Jun', newUsers: 220, returningUsers: 210 },
];

export const Default: Story = {
  args: {
    data: userData,
    dataKeyX: 'month',
    lineKeys: ['newUsers', 'returningUsers'],
  },
};