import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Avatar} from './index';

export default {
  title: 'Example/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Sample1 = Template.bind({});
Sample1.args = {
  alt: "Kitten avatar",
  image: "https://robohash.org/ca6e3ae85147564c74ab762c68db1b8b?set=set4&bgset=&size=400x400",
};

export const Sample2 = Template.bind({});
Sample2.args = {
    alt: "Robo avatar",
    image: "https://gravatar.com/avatar/1066d3c8ab5f5a3322bdf6ed780f774a?s=400&d=robohash&r=x",
};


