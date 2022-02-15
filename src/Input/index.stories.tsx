import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './index';

export default {
  title: 'Example/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "Hello there,...",
  message: 'Enter your name:',
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    placeholder: "Input no longer allowed",
};

export const Error = Template.bind({});
Error.args = {
    placeholder: "Please enter valid email format",
    error: true,
};

