import React from "react";
import "../../index.css";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Form } from "./Form";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Generics/Form",
  component: Form,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Form>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Form> = (args) => <Form  />;

export const Default = Template.bind({});
Default.args = {
   
};
