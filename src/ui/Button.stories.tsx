import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'danger', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon'],
    },
    children: {
      control: 'text',
    },
    loading: {
      control: 'boolean',
    },
    iconLeft: { control: 'text' },
    iconRight: { control: 'text' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Delete',
  },
};

export const WithIconLeft: Story = {
  args: {
    variant: 'primary',
    children: 'Login',
    iconLeft: 'log-in',
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    children: 'Submitting',
    loading: true,
  },
};

export const IconOnly: Story = {
  args: {
    variant: 'ghost',
    size: 'icon',
    iconLeft: 'settings',
  },
};