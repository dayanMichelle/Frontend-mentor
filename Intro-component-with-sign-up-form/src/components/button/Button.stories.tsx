import React from "react";
import "../../index.css";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Generics/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const UnClick = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UnClick.args = {
  text: "Prueba",
};

export const Clicked = Template.bind({});
Clicked.args = {
  text: "Prueba",
  isClicked: true,
};
