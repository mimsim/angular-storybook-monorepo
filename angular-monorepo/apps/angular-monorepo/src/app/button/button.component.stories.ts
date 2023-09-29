import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'ButtonComponent',
};
export default meta;
type Story = StoryObj<ButtonComponent>;

// export const Primary: Story = {
//   args: {},
// };

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/button works!/gi)).toBeTruthy();
  },
};
export const Primary = () => ({
  component: ButtonComponent,
  props: {
    primary: true,
    // label: 'Primary Button',
    label: 'Primary Button',
    text: 'Click me!',
    padding: 10,
    disabled: true,
  },
});

export const Secondary = () => ({
  component: ButtonComponent,
  props: {
    label: 'Secondary Button',
  },
});

export const Warn = () => ({
  component: ButtonComponent,
  props: {
    label: 'Warn',
  },
});