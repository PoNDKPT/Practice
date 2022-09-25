import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import Sidebar from './Sidebar';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  avatar:
    'https://images.pexels.com/photos/12346579/pexels-photo-12346579.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  firstName: 'Elon',
  lastName: 'Mask',
};
