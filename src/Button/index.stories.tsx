import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './index';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: 'Large Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Large Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'medium',
  text: 'Meduim Button',
  disabled: true,
};

export const Active = Template.bind({});
Active.args = {
  size: 'medium',
  text: 'Meduim Button',
  disabled: false,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  text: 'Small Button',
};
