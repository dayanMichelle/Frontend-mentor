import React from 'react';

import { Text } from './Text';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Text {...args} />;

export const Numbers = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Numbers.args = {
  text: '00 000 00000',
  color:'white',
  size:'20px'
};

export const Label = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Label.args = {
  text: 'confirm',
  color:'black',
  size:'15px'
};